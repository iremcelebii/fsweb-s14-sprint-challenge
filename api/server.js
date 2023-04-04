//!server.js adımlar:
/*
    1. express i import et --> const express = require("express");
    2.server'ı tanımla --> const server = express();
    3.router'larını import et --> const projectRouter = require("./project/router");
    4. json formatına çevir --> server.use(express.json());
    5.router'ları tanımla --> server.use("/api/project", projectRouter);
    6. hiçbir router a girmezse aradığınız adres bulunamadı hatası dön
    7.global error mesajı
    8. server'ı idex.js de import etmek için export et --> module.exports = server;
*/

const express = require("express");
const server = express();

const projectRouter = require("./project/router");
const resourceRouter = require("./resource/router");
const taskRouter = require("./task/router");

server.use(express.json());
server.use("/api/projects", projectRouter);
server.use("/api/resources", resourceRouter);
server.use("/api/tasks", taskRouter);

server.use((req, res, next) => {
  res.status(404).send("Aradığınız adres bulunamadı");
});

server.use((err, req, res, next) => {
  let status = err.status || 500;
  res
    .status(status)
    .json({ customMessage: "işlem yapılamadı", message: err.message });
});

module.exports = server;
