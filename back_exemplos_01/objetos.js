//Definição de variáveis tipo objeto
const fruta = {
    nome: "Maçã",
    preco: 2.5,
    tipo: "Macã Fuji",
    cor: "Vermelha"
}
//Acessando propriedades do objeto
console.log(`O nome da fruta é: ${fruta.nome}`)
console.log(`O preço da fruta é: R$ ${fruta.preco.toFixed(2)}`)
console.log(`O tipo da fruta é: ${fruta.tipo}`)
console.log(`A cor da fruta é: ${fruta.cor}`)