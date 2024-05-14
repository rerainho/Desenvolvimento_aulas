//Funções de acordo com as ações solicitadas,sintaxe: função é um bloco de código implementando para executar uma tarefa em particular

function name(params) {
    
}

console.clear();
function addNums(num1 = 1, num2 = 1){
    return num1 + num2;
}

// chamada a função addNums

let x=addNums(4,5); //variável com uma variávle dentro
console.log(x);

//Chamada a função posteriormente a declaração da função//

let z=myFunc(4,5);
console.log(z);

function myFunc(num1,num2) {
    return num1*num2;
}

// arrow function "forma mais fácil de declarar uma função"//

//sintaxe://

const hello=()=>{ // sinal de => para indicar a posição do bloco//
    return 'Arrow function aplication sintaxe';
};

console.log(hello); // retorna o objeto da função 
console.log(hello()) // executa a função e imprime a string no return

//usando versão addNums://

const addNums2=(num11=1,num12=1)=>{
    return num11+num12;
};

console.log(addNums2);

console.clear();
const addNums5=(num21=1,num22=2)=>{
    return num21+num22
};

let soma=addNums5(5,10);
console.log(soma);