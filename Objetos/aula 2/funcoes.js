const cliente = {
    nome: "Jadson",
    idade: 31,
    email: "jadson@empresa.com.br",
    telefone: ["11987754521", "11986304166"],
    saldo: 200,
    efetuaPagamento: function(valor) {
        if (valor > this.saldo) {
            console.log("Saldo Insuficiente!");
        } else{
            this.saldo -= valor;
            console.log(`Pagamento realizado\nNovo saldo de ${this.saldo}`);
        }
    }
};


cliente.efetuaPagamento(50)