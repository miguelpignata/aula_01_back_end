//Atribuição de variáveis
var frutas = ["maçã", "banana", "laranja", "uva", "abacaxi"]
//Acessando elementos do vetor
console.log("O primeiro elemento do vetor é: " + frutas[0])
console.log("O segundo elemento do vetor é: " + frutas[1])
//Acessando com laço de repetição
for (var i = 0; i < frutas.length; i++) {
    console.log(`O elemento ${i} do vetor é: ${frutas[i]}`)
}
//Acessando com forEach (Para cada elemento do vetor)
frutas.forEach((fruta, indice) => {
    console.log(`O elemento ${indice} do vetor é: ${fruta}`)
})