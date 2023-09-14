const knex = require("../db/knex.connection");

const findAll = async () => {
    return await knex("employee").orderBy("id");
};

const findById = async id => {
    return await knex("employee").where("id", id);
};

module.exports = { findAll, findById };
