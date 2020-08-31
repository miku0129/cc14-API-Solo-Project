exports.up = function (knex) {
  return knex.schema.createTable("peoples", (table) => {
    table.increments().index();

    table.text("first_name");

    table.text("last_name");

    table.text("gender");

    table.text("city");
  });
};

exports.down = function (knex) {};
