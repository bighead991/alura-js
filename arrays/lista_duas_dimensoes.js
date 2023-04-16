const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

// UNIFICANDO UMA OU MAIS LISTA EM UM NOVO ARRAY
const listaMediaAlunos = [alunos, medias]

console.log(listaMediaAlunos)

console.log(`A nota do Aluno ${listaMediaAlunos[0][0]} nesse semetre foi igual à: ${listaMediaAlunos[1][0]}`)