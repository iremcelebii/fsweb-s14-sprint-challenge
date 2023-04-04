const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.json({ message: "selamlar task" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
