const nomes = ["Jadson", "Danielle", "Jessica"];

// CHAMANDO COM FUNÇÃO EXPLICITA
nomes.forEach(function (nome) {
    console.log(nome);
});

// CHAMANDO COM ARROW FUNCTION
nomes.forEach((nome) => {
    console.log(nome);
});

// CHAMANDO COM ARROW FUNCTION
function imprimeNome(nome) {
    console.log(nome);
}
// PASSA ARROW FUNCTION COMO PARAMETRO PARA O FOREACH
nomes.forEach(imprimeNome);