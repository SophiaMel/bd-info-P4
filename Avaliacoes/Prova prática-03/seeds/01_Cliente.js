/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  return knex('Cliente')
  .del()
  .then(function(){
    return knex('Cliente').insert([
      {nome:'Sophia',endereço:'Rua das Flores,240',telefone:85986206547 }

    ]);

  })
  // Deletes ALL existing entries
};
