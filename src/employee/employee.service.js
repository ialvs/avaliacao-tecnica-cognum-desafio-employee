const knex = require("../db/knex.connection");
const axios = require("axios").default;

const findAll = async () => {
    return await knex("employee").orderBy("id");
};

const findById = async id => {
    return await knex("employee").where("id", id);
};

const create = async employee => {
    const { name, role } = employee;

    return await knex("employee").insert({ name, role }, [
        "id",
        "name",
        "role",
    ]);
};

const update = async (updatedEmployee, id) => {
    const { newName, newRole } = updatedEmployee;
    return await knex("employee")
        .where("id", id)
        .update({ name: newName, role: newRole }, ["id"]);
};

const remove = async id => {
    return await knex("employee").where("id", id).del();
};

const getRandomPeople = async () => {
    try {
        const quantity = 10;
        const fields = "name";

        const { data } = await axios.get(
            `https://randomuser.me/api/?results=${quantity}&inc=${fields}`
        );
        const { results } = data;

        const fullNames = results.map(person => {
            return { name: `${person.name.first} ${person.name.last}` };
        });
        return fullNames;
    } catch (error) {
        console.log(error.message);
    }
};

const roleChooser = () => {
    const randomNumber = Math.floor(Math.random() * (9 - 0 + 1) + 0);
    const roles = {
        0: "Sales Manager",
        1: "Marketing Analyst",
        2: "Software Engineer",
        3: "Administrative Assistant",
        4: "Graphic Designer",
        5: "HR Analyst",
        6: "Front-end Developer",
        7: "Project Manager",
        8: "Financial Analyst",
        9: "Quality Analyst",
    };
    return roles[randomNumber];
};

const populateEmployee = async () => {
    const names = await getRandomPeople();

    const employees = names.map(name => {
        let role = roleChooser();
        let onlyName = name.name;
        return { name: onlyName, role };
    });

    return knex("employee").insert(employees, ["id", "name", "role"]);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove,
    populateEmployee,
};
