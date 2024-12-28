import { Request, Response } from "express";
import * as LoginService from "@/api/services/auth";

interface IController {
  (req: Request, res: Response): void;
}

export function Login(): IController {
  return async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password)
      return res.json({ error: "Missing credentials" });

    const { status, data, message } = await LoginService.Login(
      username,
      password
    );

    if (data)
      res.cookie("token", data, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
      });

    res.status(status).json({ data, message });
  };
}

export function Validate(): IController {
  return async (req, res) => {
    const { token } = req.cookies;

    if (!token) return res.status(401).json({ error: "Validation failed" });

    const { status, data, message } = await LoginService.Validate(token);

    res.status(status).json({ data, message });
  };
}