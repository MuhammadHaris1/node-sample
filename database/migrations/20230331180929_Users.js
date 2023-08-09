/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex, Promise) {
   return knex.schema.createTable('users',table=>{


        table.increments('id');
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();

    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex, Promise) {
   return knex.schema.dropTable('users')
  
};
