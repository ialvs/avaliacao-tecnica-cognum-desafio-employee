const { Router } = require("express");
const { populate } = require("./employee.controller");

const routes = Router();
routes.get("/", populate);

module.exports = routes;
