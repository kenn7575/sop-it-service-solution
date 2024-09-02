import express, { Router } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { authenticateUser } from "@functions";
import dotenv from "dotenv";

import * as Routes from "@/routes";

dotenv.config();

const app = express();

var origin: string | string[] = "http://localhost:5173";

if (process.env.FRONTEND_URL) origin = process.env.FRONTEND_URL.split(",");

app.use(cors({ origin, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("json spaces", 4);
app.use(cookieParser());

const router = Router();

router.use("/auth", Routes.Auth);

router.use(async (req, res, next) => {
  authenticateUser(req, res, next);
});

router.use("/loans", Routes.Loans);
router.use("/loans_view", Routes.Loans_view);
router.use("/mail", Routes.Mail);
router.use("/items", Routes.Items);
router.use("/users", Routes.Users);
router.use("/users_view", Routes.Users_view);
router.use("/locations", Routes.Locations);

router.use("", Routes.tables);

app.use("/api", router);

const port = process.env.BACKEND_PORT || 5000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
