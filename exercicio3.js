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

total = 0;
console.log("Olá " + cartaoConsumo.nomeCliente);
for (let item of cartaoConsumo.produtoConsumido){
    total += item.precoUnit * item.quantidade
}
console.log("O total da sua comanda foi: R$ " + total/100)
