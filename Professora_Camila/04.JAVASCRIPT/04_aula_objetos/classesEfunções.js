// sintaxe de classe// costructior é um método utilizado 
class nomeClass{
    constructor(){exemplos}
}
//usando propriedades, atributos, estáfo da classe de herança para essa variáveis// Declaração:
//Classe:
class Carro{
    constructor(name, year){
        this.name=name;
        this.year=year;
    }
}
//Instanciando (criando) objetos à classe
let meuCarro1 = new Carro ('Ford', 2014);
let meuCarro2 = new Carro ('Audi', 2019);

// Imprimindo valores
console.log(meuCarro1.name);
console.log(meuCarro1.year);

console.log(meuCarro2.name);
console.log(meuCarro2.year);

// Declarando nova classe com métodos
console.clear();
    class NovoCarro{
        constructor(nome, ano){
            this.nome=nome;
            this.ano=ano;
            }
    
    idadeCarro(ano){
        return ano = this.ano;
    }}
      
    
// Buscando o ano atual automaticamente//
 let dataHoje = new Date(); // método getFullYear() retorna o ano da data especificada de acordo com a hora local
let ano =  dataHoje.getFullYear();

//Instanciando o objeto à classe
let MeuNovoCarro = new NovoCarro ('Ford', 2014);
console.log(MeuNovoCarro.idadeCarro(ano));
//console.log(datahoje) colocar posteriormente ao let;
console.log(dataHoje);