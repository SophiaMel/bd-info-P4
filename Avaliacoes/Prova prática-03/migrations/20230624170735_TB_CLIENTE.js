/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable("Cliente",function(table){
        table.increments('id');
        table.string('nome').notNullable();
        table.string('endereço').notNullable();
        table.double('telefone').unsigned();


    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('Cliente');
  
};

