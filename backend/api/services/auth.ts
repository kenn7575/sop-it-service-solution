import { ldapAuthenticate } from "@functions";
import prisma from "@/prisma.config";
import { sign, verify } from "jsonwebtoken";

const { JWT_SECRET } = process.env;

export async function login(
  username: string,
  password: string
): Promise<IResponse> {
  try {
    let user = await ldapAuthenticate(username, password);

    if (!user) return { status: 400, data: "Invalid credentials" };

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

    const token = sign(user, JWT_SECRET, { expiresIn: "1d" });

    return { status: 200, data: { user, token } };
  } catch (err) {
    console.log(err);

    return { status: 400, data: "Something went wrong" };
  }
}

export async function validate(token: string): Promise<IResponse> {
  if (!JWT_SECRET) throw new Error("JWT_SECRET not set");

  try {
    const verified = verify(token, JWT_SECRET);

    return { status: 200, data: verified };
  } catch (err) {
    return { status: 400, data: "Invalid token" };
  }
}
