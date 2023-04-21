const clientes = require("./clientes.json")

function filtrarApartamentos(clientes) {
    return clientes.filter((cliente) => {
        return (
            cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento")
        );
    });
}

const filtados = filtrarApartamentos(clientes)

console.log(filtados)