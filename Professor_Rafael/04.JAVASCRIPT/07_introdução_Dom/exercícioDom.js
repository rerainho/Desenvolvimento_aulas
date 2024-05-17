console.log(window);
window.alert("Bem-vindo ao Document object model");
alert("Apertem os cintos que agora iremos falar sobre Dom");

document.title='testando javascript';
let section = document.createElement('section');
section.innerHTML = 'Dom 1';
document.body.appendChild(section);

 let article = document.createElement('article');
 article.innerHTML = 'Domdom 2';
section.appendChild(article);


 let paragráfo = document.createElement('p');//tudo que fica dentro do parênteses do createElement são as siglas do HTML//
 paragráfo.innerHTML = 'Esse Dom não é o Dominick Toretto';
 section.appendChild(paragráfo);
