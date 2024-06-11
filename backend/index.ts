import express, { Request } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { authenticateUser } from "./functions/auth";
import dotenv from "dotenv";

dotenv.config();

const app = express();

var origin: string | string[] = "http://localhost:5173";

if (process.env.FRONTEND_URL) origin = process.env.FRONTEND_URL.split(",");

app.use(cors({ origin, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("json spaces", 4);
app.use(cookieParser());

const router = express.Router();

import Auth from "./routes/auth";

router.use("/auth", Auth);

router.use(async (req, res, next) => {
  authenticateUser(req as Request & { user: any }, res, next);
});

import Loans from "./routes/loans";
import Loans_view from "./routes/loans_view";
import Mail from "./routes/mail";
import Items from "./routes/items";
import Users from "./routes/users";

router.use("/loans", Loans);
router.use("/loans_view", Loans_view);
router.use("/mail", Mail);
router.use("/items", Items);
router.use("/users", Users);

import tables from "./routes/tables";

router.use("", tables);

app.use("/api", router);

const port = process.env.BACKEND_PORT || 5000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
