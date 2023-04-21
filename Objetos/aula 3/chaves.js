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

const chavesDoObjeto = Object.keys(cliente)

console.log(chavesDoObjeto)

if (!chavesDoObjeto.includes("enderecos")){
    console.error("Erro, é necessário ter um endereço cadastrado.")
}