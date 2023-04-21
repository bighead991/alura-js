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


function ligaParaCliente (telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone);

// UTILIZANDO ESPALHAMENTO DENTRO DE OBJETOS, NÃO É NECESSÁRIO CHAMAR CADA CAMPO INDIVIDUALMENTE 
const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0]
};

console.log(encomenda);