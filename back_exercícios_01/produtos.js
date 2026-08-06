//Definição de variáveis tipo lista de objetos
const produtos = [
    { nome: "óculos", preco: 26, quantidade: "46" },
    { nome: "protetor solar", preco: 60, quantidade: "46" },
    { nome: "boné", preco: 57, quantidade: "23" },
    { nome: "chinelo", preco: 60, quantidade: "10" }
]
//Exibindo informações do objeto
produtos.forEach(produtos => {
    console.log(`Nome: ${produtos.nome}, Preço: R$ ${produtos.preco.toFixed(2)}, quantidade: ${produtos.quantidade}`)
})