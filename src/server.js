const express = require("express");
const employeeRoutes = require("./employee/employee.routes");

const app = express();

app.use(express.json());
app.use("/employee", employeeRoutes);

module.exports = app;
