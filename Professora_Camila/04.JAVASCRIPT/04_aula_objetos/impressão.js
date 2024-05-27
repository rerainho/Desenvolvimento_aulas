
// mês, ano, hora//
let dataHoje = new Date();
let dia = dataHoje.getDate();
let ano = dataHoje.getFullYear();
let mes = dataHoje.getMonth();
let hora = dataHoje.getUTCHours();


console.log(dia);
console.log(ano);
console.log(mes);
console.log(hora);
console.log(`Hoje é: ${dia}, ${ano}, ${mes}, ${hora}`)