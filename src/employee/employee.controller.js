const { findAll } = require("./employee.service");

const getAll = async (req, res) => {
    const employees = await findAll();

    return res.json(employees);
};

module.exports = { getAll };
