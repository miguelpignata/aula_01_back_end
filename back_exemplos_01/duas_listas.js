//Atribuição de variáveis
var frutas = ["maçã", "banana", "laranja", "uva", "abacaxi"]
var precos = [2.5, 3.0, 1.5, 4.0, 5.0]
//Acessando com laço de repetição
for (var i = 0; i < frutas.length; i++) {
    console.log(`${i}: ${frutas[i]}\t R$ ${precos[i].toFixed(2)}`)
}
//Acessando com forEach (Para cada elemento do vetor)
frutas.forEach((fruta, indice) => {
    console.log(`${indice}: ${fruta} \t R$ ${precos[indice].toFixed(2)}`)
})