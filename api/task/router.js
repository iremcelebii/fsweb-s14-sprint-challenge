const express = require("express");
const taskModel = require("./model");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const tasks = await taskModel.getTasks();
    res.json(tasks);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const task = await taskModel.addTask(req.body);
    res.json(task);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
