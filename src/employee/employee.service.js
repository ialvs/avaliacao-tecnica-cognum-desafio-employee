const knex = require("../db/knex.connection");

const findAll = async () => {
    return await knex("employee").orderBy("id");
};

module.exports = { findAll };
