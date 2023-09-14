const { findAll, findById, create, update } = require("./employee.service");

const getAll = async (req, res) => {
    try {
        const employees = await findAll();

        return res.json(employees);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ mensagem: "erro interno do servidor" });
    }
};

const getById = async (req, res) => {
    try {
        const { id } = req.params;

        const employee = await findById(id);

        if (employee.length == 0) {
            return res
                .status(404)
                .json({ mensagem: "empregado não encontrado." });
        }

        return res.json(employee);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ mensagem: "erro interno do servidor" });
    }
};

const createEmployee = async (req, res) => {
    try {
        const { name, role } = req.body;

        const newEmployee = await create({ name, role });

        return res.status(201).json(newEmployee);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ mensagem: "erro interno do servidor" });
    }
};

const updateEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, role } = req.body;
        const oldEmployee = await findById(id);

        if (oldEmployee.length == 0) {
            return res
                .status(404)
                .json({ mensagem: "empregado não encontrado." });
        }

        const newName = name || oldEmployee[0].name;
        const newRole = role || oldEmployee[0].role;

        const updatedEmployee = await update({ newName, newRole }, id);

        if (!updatedEmployee) {
            return res
                .status(404)
                .json({ mensagem: "empregado não encontrado." });
        }

        return res.status(204).send();
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ mensagem: "erro interno do servidor" });
    }
};

module.exports = { getAll, getById, createEmployee, updateEmployee };
