express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

const giftExchange = require("./routes/gift-exchange");

app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use("/gift-exchange", giftExchange);

app.get("/", (req, res, next) => {
  res.status(200).json({ ping: "pong" });
});
module.exports = app;
