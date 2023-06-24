/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  return knex('Pedidos')
  .del()
  .then(function(){
    return knex('Pedidos').insert([
      {NumPedido: 5, data:'25/04/23', produtos: 'Bolo de chocolate',cliente_id:1}

    ]);
  })  // Deletes ALL existing entries
};
