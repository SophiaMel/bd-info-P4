const knex = require('knex');
const database = knex({
  client: 'sqlite3',
  connection: {
    filename: './SCA.db'
  }
});

class Clientes {
  static async criarCliente(clientes){
    try {
      const [id] = await database('Cliente').insert(clientes);
      console.log('Cliente criado com ID:', id);
    } catch (error) {
      console.error('Erro ao criar Cliente:', error);
    } finally {
      database.destroy();
    }
  }

  static async atualizarClientes(id, clientes) {
    try {
      const result = await database('Cliente').where({ id }).update(clientes);
      console.log('Cliente atualizado:', result);
    } catch (error) {
      console.error('Erro ao atualizar cliente:', error);
    } finally {
      database.destroy();
    }
  }

  static async obterCliente(id) {
    try {
      const clientes = await database('Cliente').where({ id }).first();
      console.log('Aluno encontrado:', clientes);
    } catch (error) {
      console.error('Erro ao obter aluno:', error);
    } finally {
      database.destroy();
    }
  }

  static async excluirClientes(id) {
    try {
      const result = await database('Cliente').where({ id }).del();
      console.log('Cliente excluído:', result);
    } catch (error) {
      console.error('Erro ao excluir Cliente:', error);
    } finally {
      database.destroy();
    }
  }
}

module.exports = Clientes;
