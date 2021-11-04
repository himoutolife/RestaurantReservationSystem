const tables = require("./01-tables.json");

exports.seed = function(knex) {
  return knex
  // Deletes ALL existing entries
    .raw("TRUNCATE TABLE tables RESTART IDENTITY CASCADE")
    // Inserts seed entries
    .then(() => knex("tables").insert(tables));
};