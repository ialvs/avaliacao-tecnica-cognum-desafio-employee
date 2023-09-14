const express = require("express");
const employeeRoutes = require("./employee/employee.routes");

const app = express();

app.use(express.json());

app.get("/hello", async (req, res) => {
    return res.json({ message: "Hello, Cognum!" });
});

app.use("/employee", employeeRoutes);

module.exports = app;
