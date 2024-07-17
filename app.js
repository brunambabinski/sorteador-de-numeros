function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value); //recuperar o valor em string. podemos forcar a ser numero
    let de = parseInt(document.getElementById('de').value); //recuperar o valor
    let ate = parseInt(document.getElementById('ate').value); //recuperar o valor

    let sorteados = [];
    let numero;


    for (let i=0; i < quantidade; i++) {
        numero = obterNumeroAleatorio (de, ate); 

        while (sorteados.includes(numero)){// include retorna verdadeiro ou falso
            numero = obterNumeroAleatorio(de,ate)//true
        }


        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;
    // crase para concatenar
    // innerHTML para jogar o valor para lá
    
    alterarStatusBotao();

}


function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; //sorteia entrei todos os numeros possíveis, inclusive ultimo
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';

    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';

    alterarStatusBotao();
}