// while
let contador = 1;
while (contador <= 10) {
    contador++;
console.log(`Valor = ${contador}`);
}

// while com decremento
console.clear();
let cont = 10;
while (cont >= 0) {
console.log(`Valor = ${cont}`);
cont--;
}

//sintaxe//

do{
    instrucao1;
    instrucao2;
    instrucao3;
    instrucaoN;
    } while( condição );
    proximaInstrucao;

// do-while
console.clear();
let i = 0,
text = '';
do {
    text += `O número é ${i}\n`;
    i++;
    } while (i < 10);
    console.log(text);


// Laço For - Progressivo
console.clear();
for (let i = 0; i < 10; i++) console.log(`Laço For número: ${i}`);

// LaçoFor - Decremento
console.clear();
for (let i = 10; i > 0; i--) console.log(`Laço For número: ${i}`);