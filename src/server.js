const express = require("express");
const employeeRoutes = require("./routes/user.routes");

const app = express();

app.use(express.json());
app.use("/employee", employeeRoutes);

module.exports = app;
