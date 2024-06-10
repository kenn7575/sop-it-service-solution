const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();

var origin = "http://localhost:5173";

if (process.env.FRONTEND_URL) origin = process.env.FRONTEND_URL.split(",");

app.use(cors({ origin, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("json spaces", 4);
app.use(cookieParser());

const router = express.Router();

router.use("/auth", require("./routes/auth"));

router.use(async (req, res, next) => {
  const { authenticateUser } = require("./functions/auth");

  authenticateUser(req, res, next);
});

router.use("/loans", require("./routes/loans"));
router.use("/loans_view", require("./routes/loans_view"));
router.use("/mail", require("./routes/mail"));
router.use("/items", require("./routes/items"));
router.use("/users", require("./routes/users"));

router.use("", require("./routes/tables"));

app.use("/api", router);

const port = process.env.BACKEND_PORT || 5000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
