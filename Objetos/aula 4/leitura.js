const dados = require("./cliente.json")

console.log(dados)

// CONVERTE A SAIDA JSON EM STRING
const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString)

// CONVERTE A SAIDA DE STRING PARA JSON NOVAMENTE
const clienteEmJson = JSON.parse(clienteEmString);

console.log(clienteEmJson)