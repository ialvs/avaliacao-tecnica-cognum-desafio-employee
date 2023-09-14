const { Router } = require("express");
const {
    getAll,
    getById,
    createEmployee,
    updateEmployee,
} = require("./employee.controller");
const { paramIdIsNum, nameRoleAreNull } = require("./employee.middleware");

const routes = Router();

routes.get("/", getAll);
routes.get("/:id", paramIdIsNum, getById);

routes.post("/", nameRoleAreNull, createEmployee);

routes.put("/:id", updateEmployee);

module.exports = routes;
