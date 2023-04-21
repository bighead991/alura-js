const pessoa = {
    nome: "Jadson",
    idade: 32,
    profissao: "Dev em formação",
};

//ADICIONA UM NOVO VALOR AO OBJETO
pessoa.telefone = "(11) 988776655"

//DELETANDO VALOR DO OBJETO
delete pessoa.telefone
delete pessoa["telefone"]

console.log(pessoa)