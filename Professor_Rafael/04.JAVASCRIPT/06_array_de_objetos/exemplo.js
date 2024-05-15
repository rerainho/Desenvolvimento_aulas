// Criação do array de objetos "funcionarios"
const funcionarios = [
    { nome: "Maria", salario: 3450 },
    { nome: "Romário", salario: 4500 },
    { nome: "Fernanda", salario: 1550 },
    { nome: "Tania", salario: 3190 },
    { nome: "Wally", salario: 4800 }
];

// Listar nome e salário de todos os funcionários usando Template String
console.log("Funcionários e seus salários:");
funcionarios.forEach((funcionario) => {
    console.log(`- ${funcionario.nome}: R$ ${funcionario.salario.toFixed(2)}`);
});

// Aplicar reajuste de 5% a todos os funcionários
const reajuste = 0.05;
funcionarios.map((funcionario) => {
    funcionario.salario *= (1 + reajuste);
    return funcionario;
});

// Filtrar funcionários que recebem mais de 5000
const funcionariosAcimaDe5000 = funcionarios.filter((funcionario) => funcionario.salario > 5000);

// Pesquisar o funcionário Wally
const funcionarioWally = funcionarios.find((funcionario) => funcionario.nome === "Wally");

// Exibir resultados
console.log("\nFuncionários após reajuste:");
funcionarios.forEach((funcionario) => {
    console.log(`- ${funcionario.nome}: R$ ${funcionario.salario.toFixed(2)}`);
});

if (funcionarioWally) {
    console.log(`\nEncontrado o funcionário Wally com salário de R$ ${funcionarioWally.salario.toFixed(2)}.`);
} else {
    console.log("\nFuncionário Wally não encontrado.");
}