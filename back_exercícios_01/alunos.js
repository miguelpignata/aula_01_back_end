const alunos = [
    { nome: "Leonardo", idade: 16, cidade: "Amparo", notaFinal: "10" },
    { nome: "Giovana", idade: 16, cidade: "Amparo", notaFinal: "9.5" },
    { nome: "Miguel", idade: 16, cidade: "Amparo", notaFinal: "7" },
    { nome: "Enzo", idade: 17, cidade: "Amparo", notaFinal: "7" },
]
//Exibindo informações do objeto
alunos.forEach(alunos => {
    console.log(`Nome: ${alunos.nome}, idade: ${alunos.idade}, cidade: ${alunos.cidade}, notaFinal: ${alunos.notaFinal}`)
})