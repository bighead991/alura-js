const cliente = {
    nome: "jadson",
    idade: 31,
    sexo: "masculino",
    cpf: "111.222.333.-44",
    email: "jadson@dominio.com.br",
};


// console.log(cliente["nome"])

const chaves = ["nome", "idade", "sexo", "cpf", "email"];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
});

