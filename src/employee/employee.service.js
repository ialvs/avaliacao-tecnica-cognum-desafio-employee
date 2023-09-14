const knex = require("../db/knex.connection");

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

module.exports = { findAll, findById, create };
