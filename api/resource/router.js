const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.json({ message: "selamlar resource" });
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    res.json({ message: "selamlar resource" });
  } catch (err) {
    next(err);
  }
});
module.exports = router;
