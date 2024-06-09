// Função para fazer o request na API
function getImage(e) {
    // Busca a url da API no HTML
    let url_api = document.getElementById('url_api').innerText;
    console.log(url_api);
    // Função fetch para buscar dados na API
    fetch(url_api, {
    method: 'GET',
    })
    .then((response) => {
    return response.json();
    })
    .then((data) => {
    console.log(data);
    document.getElementById('id').innerText = data[0,1,2,3,4].id;
    let imagem = `<img class="rounded img-fluid" src="${data[0,1,2,3,4].url}" />`;
    // Insere a imagem no elemento HTML com id imagem_aqui
    document.querySelector('#imagem_aqui_1').innerHTML = imagem;
    document.querySelector('#imagem_aqui_2').innerHTML = imagem;
    document.querySelector('#imagem_aqui_3').innerHTML = imagem;
    document.querySelector('#imagem_aqui_4').innerHTML = imagem;
    document.querySelector('#imagem_aqui_5').innerHTML = imagem;
    document.querySelector('#imagem_aqui_6').innerHTML = imagem;
    document.querySelector('#imagem_aqui_7').innerHTML = imagem;
    document.querySelector('#imagem_aqui_8').innerHTML = imagem;
    document.querySelector('#imagem_aqui_9').innerHTML = imagem;
    document.querySelector('#imagem_aqui_10').innerHTML = imagem;
    });
    }
