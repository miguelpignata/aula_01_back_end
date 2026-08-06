//Variáveis não tipadas
x = 10
y = 25
//Processamento
soma = x + y
sub = x - y
mult = x * y
div = x / y
resto = x % y
raiz = Math.sqrt(y)
potencia = Math.pow(x, 2)
//Saídas concatenadas
console.log("A soma de " + x + " + " + y + " = " + soma)
console.log("A subtração de " + x + " - " + y + " = " + sub)
//Saídas concatenadas com aspas simpes 'apóstrofes'
console.log('A multiplicação de ' + x + ' * ' + y + ' = ' + mult)
console.log('A divisão de ' + x + ' / ' + y + ' = ' + div.toFixed(2))
console.log('O resto da divisão de ' + x + ' % ' + y + ' = ' + resto)
//Saídas com template string (crase)
console.log(`A raiz quadrada de ${y} = ${raiz.toFixed(2)}`)
console.log(`A potência de ${x}² = ${potencia}`)