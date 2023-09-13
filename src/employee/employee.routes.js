const { Router } = require("express");
const { getAll } = require("./employee.controller");

const routes = Router();

routes.get("/", getAll);

module.exports = routes;
