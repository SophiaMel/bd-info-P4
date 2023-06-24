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
        table.integer('cliente_id').unsigned();
        table.foreign('cliente_id').references('cliente.id');
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
