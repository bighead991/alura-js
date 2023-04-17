// CALCULE A MEDIA GERAL DE CADA SALA.

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala) {
    // ACUMULADRO = ITERAÇÃO DE CADA ELEMENTO DO ARRAY.
    // NOTA = VALOR DE CADA ELEMENTE DO ARRAY.
    const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {
        return acumulador + nota;
    }, 0);

    const media = somaDasNotas / notasDaSala.length;
    
    return media
}

console.log(`A média geral da sala de JavaScritp é: ${calculaMedia(salaJS)}`);
console.log(`A média geral da sala de JavaScritp é: ${calculaMedia(salaJava)}`);
console.log(`A média geral da sala de JavaScritp é: ${calculaMedia(salaPython)}`);

// ALTERNATIVA DO CODIGO ACIMA
// function calculaMedia(notasDaSala) {
//     const somaDasNotas = notasDaSala.reduce((acumulador, nota) => acumulador + nota, 0);
//     const media = somaDasNotas / notasDaSala.length;
    
//     return media
// }

// ALTERNATIVA DO CODIGO ACIMA
// function operacaoNumerica(acc, atual) {
//     return atual + acc
//    }
   
//    const soma = numeros.reduce(operacaoNumerica, 0)