function mudarCorFundo() {
    const primeiroParagrafo = document.querySelector('section:first-of-type p');
    primeiroParagrafo.style.backgroundColor = 'green';
}

function marcarParagrafos() {
    const paragrafosSegundaSecao = document.querySelectorAll('section:last-of-type p');
    paragrafosSegundaSecao.forEach(paragrafo => {
        paragrafo.style.fontWeight = 'bold';
    });


