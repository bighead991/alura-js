
const notas = [10, 6, 8, 5.5, 10];

//REMOVENDO O ULTIMO ELEMENTO DO ARRAY
notas.pop()

//ORGANIZANDO ITENS 
notas.sort()
console.log(notas)

media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(`Sua média é: ${media}`)