const Clientes = require('./modelos/Clientes');
const Pedido = require('./modelos/Pedido');

const exemploCliente = {
    nome: 'Ana',
    endereço: 'Rua do gato,45',
    telefone : 85983452313


}
//Clientes.criarCliente(exemploCliente)
const exemploCliente2 = {
    nome:'Eliza',
    endereço: 'Rua da Eliza,60',
    telefone:85987653421
}
//Clientes.atualizarClientes(1,exemploCliente2)
//Clientes.obterCliente(2)
//Clientes.excluirClientes(1)
const exemploPedido = {
    NumPedido: 6,
    data : '10/03/23',
    produtos: 'doce de goiaba',
    cliente_id : 2


}
Pedido.criarPedido(exemploPedido)

