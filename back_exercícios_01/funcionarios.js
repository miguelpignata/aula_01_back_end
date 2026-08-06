const funcionários = [
    { nome: "Safira", cargo: "Gerente", salário: 15000, tempoServiço: "6 anos"},
    { nome: "Jade", cargo: "Analista", salário: 10000, tempoServiço: "4 anos"},
    { nome: "Margarida", cargo: "Assistente", salário: 4000, tempoServiço: "9 meses"},
    { nome: "Roberto", cargo: "Administrador", salário: 12000, tempoServiço: "9 anos"},
]
//Exibindo informações do objeto
funcionários.forEach(funcionários => {
    console.log(`nome: ${funcionários.nome}, cargo: ${funcionários.cargo}, salário: ${funcionários.salário}, tempoServiço: ${funcionários.tempoServiço}`)
})