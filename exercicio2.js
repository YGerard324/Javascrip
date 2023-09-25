const cartaoConsumo = {
    nomeCliente: "Fulano",
    idadeCliente: 20,
    produtoConsumido: [
        {
            nomeProduto: "Batata frita",
            precoUnit: 1250,
            quantidade: 2
        },
        {
            omeProduto: "Queijo Coalho",
            precoUnit: 1800,
            quantidade: 1
        },
        {
            omeProduto: "Cerveja",
            precoUnit: 800,
            quantidade: 2
        }
    ]
};

console.log("cliente: " + cartaoConsumo.nomeCliente + "\n idade: " + cartaoConsumo.idadeCliente);
cartaoConsumo.idadeCliente = 21;
console.log("Nova idade: " + cartaoConsumo.idadeCliente);
console.log(cartaoConsumo.produtoConsumido[0].nomeProduto)
console.log(cartaoConsumo.produtoConsumido[cartaoConsumo.produtoConsumido.length - 1].precoUnit)
