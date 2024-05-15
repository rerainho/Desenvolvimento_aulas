// Criação do array de objetos "funcionarios"
const funcionarios = [
    { nome: "Maria", salario: 3455 },
    { nome: "João", salario: 4583 },
    { nome: "Fernando", salario: 1750 },
    { nome: "Talyta", salario: 3090 },
    { nome: "Wally", salario: 4800 }
];

console.log("Funcionários e seus salários:");
funcionarios.forEach((funcionario) => {
    console.log(`- ${funcionario.nome}: R$ ${funcionario.salario.toFixed(2)}`);
});

const reajuste = 0.05;
funcionarios.map((funcionario) => {
    funcionario.salario *= (1 + reajuste);
    return funcionario;
});

const funcionariosAcimaDe5000 = funcionarios.filter((funcionario) => funcionario.salario > 5000);

const funcionarioWally = funcionarios.find((funcionario) => funcionario.nome === "Wally");

console.log("\nFuncionários após reajuste:");
funcionarios.forEach((funcionario) => {
    console.log(`- ${funcionario.nome}: R$ ${funcionario.salario.toFixed(2)}`);
});

if (funcionarioWally) {
    console.log(`\nEncontrado o funcionário Wally com salário de R$ ${funcionarioWally.salario.toFixed(2)}.`);
} else {
    console.log("\nFuncionário Wally não encontrado.");
}