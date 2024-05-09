//estrutura encadeada //

console.clear();
const num = 'Hello';

const g = 11;

if (num %2 == 0 && !isNaN(num))
console.log ('Número par');

else if (num %2 != 0 && !isNaN(num))
console.log('Número par');

 else console.log('Não é um número');

 // operador ternário //

 console.clear();
let resultado = 3>4?'Sim': 'Não';

console.log(resultado);

// Switch, breack e operador ternário //

const h = 11;
const cor = h>11 ? 'vermelha':'azul';
console.clear();
switch (cor) {
    case 'vermelha':console.log('a cor é vermelha');
        
        break;

    case 'azul':console.log('a cor é azul');
        break;
        default:console.log('a cor não é azul nem vermelha');
    }

    // Array unidimensional(vetor), bidimensional e tridimensional (matrizes): São índices (posições) //

console.clear();
const num1 = new Array(30,-1,5,3,121);
const num2 = (18,20,-6,40,25);

console.log(num1);
console.log(num2);

// elementos diversos do array // 

console.log(`primeiro elemento de num1:${num1[0]}`);
console.log(`primeiro elemento de num2:${num2[0]}`); //código na linha dois está ouxando o último elemento, verificar erro do código//

// elementos diversos do array bidimensional// 

console.clear();
const matrix = [['banana', 'maça','pêra'],
['Laranja', true,1],
[null, 'Uva', -350]];

// acessando os elementos diversos de array //
console.log(`Acesssa a primeira linha:${matrix[0]}`);
console.log(`Acessa a primeira linha:${matrix[0][1]}`);


