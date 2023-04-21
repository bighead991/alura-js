const cliente = {
    nome: "Jadson",
    idade: 31,
    email: "jadson@empresa.com.br",
    telefone: ["11987754521", "11986304166"],
};

cliente.enderecos = [
    {
        rua: "Rua Braga",
        numero: 249,
        casa: 2,
    },
];

for (let chave in cliente){
    let tipo = typeof cliente[chave]
    if (tipo !== 'object' && tipo !== 'function'){
        console.log(`A chave  ${chave} tem o valor ${cliente[chave]}`)
    }
}
