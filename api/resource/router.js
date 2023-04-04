const express = require("express");
const resourceModel = require("./model");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const resources = await resourceModel.getResource();
    res.json(resources);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const resource = await resourceModel.addResource(req.body);
    res.json(resource);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
