const express = require("express");
const employeeRoutes = require("./employee/employee.routes");
const populateRoute = require("./employee/populate.routes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
    res.redirect("/hello");
});

app.get("/hello", async (req, res) => {
    return res.json({ message: "Hello, Cognum!" });
});

app.use("/employee", employeeRoutes);
app.use("/populate", populateRoute);

module.exports = app;
