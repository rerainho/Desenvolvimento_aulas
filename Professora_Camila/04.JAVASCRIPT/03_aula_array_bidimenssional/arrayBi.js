let matrix1 = [
    [1,2,3],
    [4,5,6],
]
console.log('Antes:');
console.log(matrix1);

//Alterando um valor di array//

console.clear();
matrix1[0][2]=-10; // a instrução matrix1 0 2 = -10 altera o elemento 0,2 do array bidimesional matrix1.
console.log('Depois:')
console.log(matrix1);

console.clear() //declaração//
let numArray=[1,2,3,4]; //variável em array unidimensional//
console.log(typeof numArray); //impressão no console do que foi solicitado//

let numArray2=numArray.toString();
console.log(typeof numArray2);//transformando o objeto em texto//

//acrescentando Join - incluem a separação//

console.clear();
let test1=[0,1,2,3,4,5];
let test2=test1.join=('***');

console.log(test1);
console.log(typeof test2);


//acrescentando propriedade do tamanho arrays - length//

console.clear();
let array=[0,1,2,3,4,5];
console.log(array.length);

//remove o elemento do último índice do array exemplo a variável x - método pop()//

console.clear();
const frutas1=['Banana','Pêra','Laranja','Manga'];
let x=frutas1.pop();


console.log(frutas1);
console.log(x);

//inclui o elemento no array exemplo a variável y - método push()//

console.clear();
const frutas10=['Banana','Pêra','Laranja','Manga'];
let y=frutas10.push('Pitaya');

console.log(frutas10);
console.log(y);

//remove o elemento no início "na primeira posição" do array - método shift()//

console.clear();
const frutas20=['Banana','Mamão'];
let z=frutas20.shift(); // a let z trata-se da primeira posição 'banana'//

console.log(frutas20);
console.log(z);

//Insere o elemento no início "na primeira posição" do array - método unshift()//

console.clear();
const frutas30=['Banana','Mamão'];
let w=frutas30.unshift('Kiwi');

console.log(frutas30);
console.log(w);

//Apaga um elemento específico do array - método delete()//

console.clear();
const frutas40=['Banana','Mamão','Laranja','Pitaya'];
delete frutas40[2];

console.log(frutas40);

