// DESAFIO: CALCULAR A MEDIO DOS ALUNOS E MOSTRAR QUEM ESTÁ REPROVADO ENTRE OS ALUNOS.

const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((aluno, indice) => {
    return medias[indice] < 7;
})

console.log(reprovados)