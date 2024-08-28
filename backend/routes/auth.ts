import { Router } from "express";
import { sign, verify } from "jsonwebtoken";
import { ldapAuthenticate } from "@functions";
import prisma from "@/prisma.config";

const { JWT_SECRET } = process.env;

const router = Router();

router.post("/login", async (req, res) => {
  const { username, password: userPassword } = req.body;

  if (!username || !userPassword)
    return res.json({ error: "Missing credentials" });

  try {
    let user = await ldapAuthenticate(username, userPassword);

    if (!user) return res.json({ error: "Invalid credentials" });

    if (!JWT_SECRET) throw new Error("JWT_SECRET not set");

    const dbUser = await prisma.users.findFirst({
      where: { username: user.username },
      select: { UUID: true },
    });

    let newUser = { UUID: 0 };

    if (!dbUser) {
      newUser = await prisma.users.create({
        data: { username: user.username },
      });
    }

    user.UUID = dbUser?.UUID || newUser.UUID;

    const token = sign(user, JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });

    res.json(user);
  } catch (err) {
    console.log(err);
    res.json({ error: "Something went wrong" });
  }
});

router.post("/validate", async (req, res) => {
  const { token } = req.cookies;

  if (!token) return res.status(401).json({ error: "Validation failed" });

  if (!JWT_SECRET) throw new Error("JWT_SECRET not set");

  try {
    const verified = verify(token, JWT_SECRET);
    res.json(verified);
    // res.end();
  } catch (err: any) {
    res.clearCookie("token");
    if (err.name === "TokenExpiredError")
      return res.status(401).json({ error: "Token expired" });

    return res.status(400).json({ error: "Invalid token" });
  }
});

router.get("/cookies", (req, res) => {
  res.json(req.cookies);
});

router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
});

export default router;
