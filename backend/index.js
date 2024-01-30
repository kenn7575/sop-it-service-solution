const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("json spaces", 4);
app.use(cookieParser());

app.use("/api/auth", require("./routes/auth"));

app.use(async (req, res, next) => {
  const { authenticateUser } = require("./functions/auth");

  authenticateUser(req, res, next);
});

app.use("/api/users", require("./routes/users"));
app.use("/api/loans", require("./routes/loans"));
app.use("/api/mail", require("./routes/mail"));
app.use("/api", require("./routes/tables"));

const port = process.env.BACKEND_PORT || 5000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
