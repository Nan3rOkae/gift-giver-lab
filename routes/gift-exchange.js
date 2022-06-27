const { Router } = require("express");

express = require("express");
const names = {};

router.post("/pairs", (req, res, next) => {
  res.status(200).json({ names });
});
router.post("/traditional ", (req, res, next) => {
  res.status(200).json({ names });
});

module.exports = router;
