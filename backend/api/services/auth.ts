import { ldapAuthenticate } from "@functions";
import prisma from "@/prisma.config";
import { sign, verify } from "jsonwebtoken";

const { JWT_SECRET } = process.env;

interface IResponse<T = any> {
  status: number;
  data?: T;
  message: string;
}

export async function Login(
  username: string,
  password: string
): Promise<IResponse> {
  try {
    let user = await ldapAuthenticate(username, password);

    if (!user) return { status: 400, message: "Invalid credentials" };

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

    return {
      status: 200,
      data: token,
      message: "Logged in",
    };
  } catch (err) {
    console.log(err);

    return { status: 400, message: "Something went wrong" };
  }
}

export async function Validate(token: string): Promise<IResponse> {
  if (!JWT_SECRET) throw new Error("JWT_SECRET not set");

  try {
    const verified = verify(token, JWT_SECRET);

    return { status: 200, data: verified, message: "Token verified" };
  } catch (err) {
    return { status: 400, message: "Invalid token" };
  }
}
