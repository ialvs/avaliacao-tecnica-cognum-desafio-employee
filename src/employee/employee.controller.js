const { findAll, findById } = require("./employee.service");

const getAll = async (req, res) => {
    const employees = await findAll();

    return res.json(employees);
};

const getById = async (req, res) => {
    const { id } = req.params;

    const employee = await findById(id);

    if (employee.length == 0) {
        return res.status(404).json({ mensagem: "empregado não encontrado." });
    }

    return res.json(employee);
};

module.exports = { getAll, getById };
