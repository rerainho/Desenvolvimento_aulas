const alunos = [
    {
        nome: "Laura  Mendes",
        notas: [6, 7, 9],
        endereco: "Rua Curuçá, 387"
    },
    {
        nome: "Jorge Silva",
        notas: [6, 5, 8],
        endereco: "Rua Borges, 124"
    },
    {
        nome: "Sarah Ribeiro",
        notas: [4, 5, 9],
        endereco: "Rua Leôncio de Magalhães, 1257"
    }
];

function calcularMedia(notas) {
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length;
}

alunos.forEach((aluno) => {
    const media = calcularMedia(aluno.notas);
    const situacao = media >= 7 ? "aprovado(a)" : "reprovado(a)";
    console.log(`Aluno(a) ${aluno.nome} com notas ${aluno.notas.join(", ")} mora em ${aluno.endereco} e teve a média ${media.toFixed(2)}, portanto foi ${situacao}.`);
});