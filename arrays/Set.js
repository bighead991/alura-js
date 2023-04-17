//REMOVA OS NOMES REPETIDOS, DEIXANDO APENAS UM DE CADA.

const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const meuSet = new Set(nomes);

const nomesAtualizados = [...meuSet]

console.log(meuSet)

console.log(nomesAtualizados)