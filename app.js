const express = require("express");
const morgan = require("morgan");
const giftExchange = require("./routes/gift-exchange.js");
const { BadRequestError } = require("./utils/errors.js");
const { NotFoundError } = require("./utils/errors.js");
const app = express();
const cors = require("cors");

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());
app.use("/gift-exchange", giftExchange);

app.use((req, res, next) => {
  return next(new NotFoundError());
});

app.use((error, req, res, next) => {
  let message = error.message || "Something went wrong in the application";
  let status = error.status || 500;

  return res
    .status(status)
    .json({ error: { status: status, message: message } });
});

app.get("/", (req, res, next) => {
  res.status(200).json({ ping: "pong" });
});
module.exports = app;
