//!index.js adımlar:
/*
    1. server'ı import et --> const express = const server = require("./api/server.js");
    2.port'u tanımla --> const PORT = process.env.PORT || 9001;
    3.server'ı dinle
*/

const server = require("./api/server.js");

const PORT = process.env.PORT || 9001;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
