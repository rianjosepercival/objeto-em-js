const listaCPFs = ["111.222.333-44", "222.333.444-55", "333.444.555-66"];

const informacoesPessoa = ["nome", "Maria", "idade", 28, "CPF", "111.222.333-44"];

console.log(informacoesPessoa[1]);

const pessoa = {
  nome: "Maria",
  idade: 28,
  CPF: "111.222.333-44",
};

console.log(pessoa.nome);

const cliente = {
  nome: "Carlos",
  idade: 35,
  email: "carlos@empresa.com",
  telefone: ["11999999999", "11888888888"],
};

cliente.endereco = {
  rua: "R. das Flores",
  numero: 250,
  apartamento: false,
  complemento: "Casa",
};

console.log(cliente);
console.log(cliente.endereco);