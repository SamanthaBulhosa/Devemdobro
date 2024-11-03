// Faz a movimentação da carta 
VanillaTilt.init(document.querySelector(".cartao-lendas"), {
    max: 25,
    speed: 400
    });
    VanillaTilt.init(document.querySelectorAll(".cartao-lendas"));

// Função para filtrar os personagens de acordo com o tipo selecionado no menu
function filtrarPersonagens(tipo) {
    // Seleciona todos os cartões de lendas e oculta todos inicialmente
    const cartoes = document.querySelectorAll('.cartao-lendas');
    const listagem = document.querySelectorAll('.listagem .lendas');

    // Oculta todos os cartões inicialmente
    cartoes.forEach(cartao => cartao.style.display = 'none');
    
    // Exibe a primeira carta do tipo selecionado
    if (tipo === 'Todos') {
        // Se o tipo for "Todos", exibe o primeiro cartão de todos os cartões
        if (cartoes.length > 0) {
            cartoes[0].style.display = 'block';
            cartoes[0].classList.add('aberto');
        }
    } else {
        // Exibe apenas a primeira carta que corresponde ao tipo selecionado
        const primeiroCartaoDoTipo = Array.from(cartoes).find(cartao => cartao.classList.contains(`tipo-${tipo}`));
        if (primeiroCartaoDoTipo) {
            primeiroCartaoDoTipo.style.display = 'block';
            primeiroCartaoDoTipo.classList.add('aberto');
        }
    }

    // Exibe/oculta itens da listagem de acordo com o tipo selecionado
    listagem.forEach(item => {
        item.style.display = (tipo === 'Todos' || item.classList.contains(`tipo-${tipo}`)) ? 'flex' : 'none';
    });

    // Atualiza a classe ativa no menu
    const menuItems = document.querySelectorAll('.ordem li');
    menuItems.forEach(item => item.classList.remove('ativo'));
    document.querySelector(`.tipo-${tipo}`).classList.add('ativo');
}

// Seleciona os elementos da listagem
const listaSelecaoLendasApex = document.querySelectorAll('.listagem .lendas');

// Itera sobre a lista de seleção de lendas para controlar o clique
listaSelecaoLendasApex.forEach(lenda => {
    lenda.addEventListener('click', () => {
        // Oculta todos os cartões
        const cartoes = document.querySelectorAll('.cartao-lendas');
        cartoes.forEach(cartao => cartao.style.display = 'none');

        // Remove a classe 'aberto' do cartão atualmente aberto
        const cartaoLendasAberto = document.querySelector('.cartao-lendas.aberto');
        if (cartaoLendasAberto) {
            cartaoLendasAberto.classList.remove('aberto');
        }

        // Pega o ID da lenda clicada e exibe apenas a carta correspondente
        const idLendasSelecionado = lenda.attributes.id.value;
        const idDocartaoLendasParaAbrir = 'cartao-' + idLendasSelecionado;
        const cartaoLendasParaAbrir = document.getElementById(idDocartaoLendasParaAbrir);
        if (cartaoLendasParaAbrir) {
            cartaoLendasParaAbrir.style.display = 'block';
            cartaoLendasParaAbrir.classList.add('aberto');
        } else {
            console.error(`Cartão com o id ${idDocartaoLendasParaAbrir} não encontrado.`);
        }

        // Remove a classe 'ativo' da lenda selecionada anteriormente na listagem
        const lendasAtivoNaListagem = document.querySelector('.listagem .ativo');
        if (lendasAtivoNaListagem) {
            lendasAtivoNaListagem.classList.remove('ativo');
        }

        // Adiciona a classe 'ativo' à lenda que foi clicada
        lenda.classList.add('ativo');
    });
});
