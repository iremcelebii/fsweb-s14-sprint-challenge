//!router.js adımlar:
/*
    1. express'i import et --> const express = require("express");
    2.express'ten Router'ı import et --> const router = express.Router();
    3.end pointlerini yazmaya hazırsın
      3.1.end pointlerde try catch blopu oluştur
      3.2. async fonksiyon olduğunu unutma
      3.3.url de bir şey varsa params ile al
      3.4. body de bir şey gönderiyorsan bodyden onu al
      3.5. res.json da gönder
    4.middleware.js'i import et (yazınca)
*/

const express = require("express");
const projectModel = require("./model");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const projects = await projectModel.getProjects();
    res.json(projects);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const project = await projectModel.addProject(req.body);
    res.json(project);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
