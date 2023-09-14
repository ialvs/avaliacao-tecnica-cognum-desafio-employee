const { Router } = require("express");
const {
    getAll,
    getById,
    createEmployee,
    updateEmployee,
    deleteEmployee,
} = require("./employee.controller");
const { paramIdIsNum, nameRoleAreNull } = require("./employee.middleware");

const routes = Router();

routes.get("/", getAll);
routes.get("/:id", paramIdIsNum, getById);

routes.post("/", nameRoleAreNull, createEmployee);

routes.put("/:id", paramIdIsNum, updateEmployee);

routes.delete("/:id", paramIdIsNum, deleteEmployee);

module.exports = routes;
