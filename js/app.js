let quantidadeAlugados = 0;

function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${quantidadeAlugados}`);
}

function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
    


    if (imagem.classList.contains('dashboard__item__img--rented')) {
        if (confirm(`Deseja devolver o jogo ${nomeJogo.textContent}?`)) {         
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        quantidadeAlugados--;
        }
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        quantidadeAlugados++;
    }
    contarEExibirJogosAlugados();
};

document.addEventListener('DOMContentLoaded', function() {
    quantidadeAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});