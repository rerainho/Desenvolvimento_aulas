const itens = [];

        function adicionarItem() {
            const item = document.getElementById('item').value;
            const qtde = parseInt(document.getElementById('qtde').value);
            const valor = parseFloat(document.getElementById('valor').value);

            const totalItem = (qtde * valor).toFixed(2);

            itens.push({ item, qtde, valor, totalItem });

            atualizarLista();
        }

        function atualizarLista() {
            const lista = document.getElementById('itensLista');
            lista.innerHTML = '';

            let totalGeral = 0;

            itens.forEach((item, index) => {
                totalGeral += parseFloat(item.totalItem);
                lista.innerHTML += `
                    <li class="list-group-item">
                        ${item.qtde} ${item.item} - R$ ${item.totalItem}
                        <button class="btn btn-success btn-sm" onclick="aumentarQuantidade(${index})">+</button>
                        <button class="btn btn-warning btn-sm" onclick="diminuirQuantidade(${index})">-</button>
                        <button class="btn btn-danger btn-sm" onclick="removerItem(${index})">X</button>
                    </li>
                `;
            });

            document.getElementById('ValorTotal').textContent = totalGeral.toFixed(2);
        }

        function aumentarQuantidade(index) {
            itens[index].qtde++;
            atualizarLista();
        }

        function diminuirQuantidade(index) {
            if (itens[index].qtde > 1) {
                itens[index].qtde--;
                atualizarLista();
            }
        }

        function removerItem(index) {
            itens.splice(index, 1);
            atualizarLista();
        }