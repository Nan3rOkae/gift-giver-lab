express = require("express");
const GiftExchange = require("../models/gift-exchange");
const { BadRequestError } = require("../utils/errors");
const router = express.Router();

router.post("/pairs", (req, res, next) => {
  try {
    if (req.body == null) {
      return new BadRequestError("The body is empty");
    }
    if ((req.body.names = null)) {
      return next(new BadRequestError("The body is empty"));
    }
    const response = GiftExchange.pairs(req.body.names);

    res.status(200).send(response);
  } catch (e) {
    return new BadRequestError(e);
  }
});

router.post("/traditional", (req, res, next) => {
  try {
    if (req.body == null) {
      return new BadRequestError("The body is empty");
    }
    if (req.body.names == null) {
      return new BadRequestError("The body is empty");
    }
    const response = GiftExchange.traditional(req.body.names);

    res.status(200).send(response);
  } catch (e) {
    return new BadRequestError(e);
  }
});

module.exports = router;
