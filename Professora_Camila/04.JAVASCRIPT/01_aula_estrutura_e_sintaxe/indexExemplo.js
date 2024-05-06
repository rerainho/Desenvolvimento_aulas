//*Estrutura simples de if *// 
const a = 10;
if (a == 10) {

    console.log('a é 10');
}

const b = '10'
if (b == 10) {

    console.log('b é 10');
}

console.clear();

//*Estrutura tripla*//
const c = 10;
if (c === 10)
console.log('c é 10');

const d = '10';
if(d === 10){
    console.log('b é 10');
}

console.log('Estou fora de if que compara a string');

console.clear();

//*Estrutura if e else  exemplo 1*//

const e = '10';
if (e === 10) console.log('e é o número 10');

else{
    console.log('Resultado da condição: ${e===10}');
    console.log('e não é um numeral');
    }

    console.clear();

//*Estrutura if e else  exemplo 2*//

const produto = 'Jabuticaba';
if (produto === 'Jabuticaba') console.log('Jabuticaba é uma fruta');

else{
    console.log('Resultado da condição:${produto===Jabuticaba}');
    console.log('produto não é uma fruta');
    }

    console.clear();

    //*Estrutura if e else  exemplo 3*//

const peça = 'Sapato';
if (peça === 'Vestido') console.log('Vestido é uma peça');

else{
    console.log('Resultado da condição: ${peça===sapato}');
    console.log('peça não é um vestido, portanto é um calçado');
}