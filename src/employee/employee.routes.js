const { Router } = require("express");
const { getAll, getById } = require("./employee.controller");
const { paramIdIsNum } = require("./employee.middleware");

const routes = Router();

routes.get("/", getAll);
routes.get("/:id", paramIdIsNum, getById);

module.exports = routes;
