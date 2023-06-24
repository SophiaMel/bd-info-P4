const knex = require('knex');
const database = knex({
  client: 'sqlite3',
  connection: {
    filename: './SCA.db'
  }
});

class Pedido {
  static async criarPedido(pedido) {
    try {
      const [id] = await database('disciplinas').insert(pedido);
      console.log('Pedido criada com ID:', id);
    } catch (error) {
      console.error('Erro ao criar Pedido:', error);
    } finally {
      database.destroy();
    }
  }

  static async atualizarPedido(id, pedido) {
    try {
      const result = await database('Pedidos').where({ id }).update(pedido);
      console.log('Pedido atualizado:', result);
    } catch (error) {
      console.error('Erro ao atualizar pedido:', error);
    } finally {
      database.destroy();
    }
  }

  static async obterPedido(id) {
    try {
      const pedido = await database('Pedidos').where({ id }).first();
      console.log('Disciplina encontrada:', pedido);
    } catch (error) {
      console.error('Erro ao obter pedido:', error);
    } finally {
      database.destroy();
    }
  }

  static async excluirPedido(id) {
    try {
      const result = await database('Pedidos').where({ id }).del();
      console.log('Pedido excluída:', result);
    } catch (error) {
      console.error('Erro ao excluir pedido:', error);
    } finally {
      database.destroy();
    }
  }
}

module.exports = Pedido;
