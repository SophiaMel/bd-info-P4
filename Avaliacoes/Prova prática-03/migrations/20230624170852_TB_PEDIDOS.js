/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('Pedidos', function(table){
        table.increments('id');
        table.integer('NumPedido').unsigned();
        table.string('data');
        table.string('produtos');
        table.foreign('NumPedido').references('NumPedido.id');
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
  .dropTableIfExists('Pedidos');
};
