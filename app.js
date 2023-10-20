let listaDeNumeros = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumero();
let numeroTentativas = 1;

// foi criada a function pra deixar mais limpo o código, sem repetições.
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});

}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Bem vindo ao jogo do Número Secreto!');
    exibirTextoNaTela('p', 'Digite  um número de 1 a 100');

}

exibirMensagemInicial()

function verificarChute(){
    let chute = document.querySelector('input').value;

    if( chute == numeroSecreto){
        let palavraTentativa = numeroTentativas > 1 ? 'tentativas' : 'tentativa';
        
        exibirTextoNaTela('h1', 'Parabéns! você acertou o número secreto!');
        exibirTextoNaTela('p', `Você acertou o número secreto com ${numeroTentativas} ${palavraTentativa}` );

        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if( chute > numeroSecreto ){
            exibirTextoNaTela('p', `O número secreto é menor que o chute (${chute})`);

        } else {
            exibirTextoNaTela('p', `O número secreto é maior que o chute (${chute})`);
            
        }

        numeroTentativas++;
        limpaCampo();

    } 

}

function gerarNumero(){
    let numeroSecreto = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumeros.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumeros = [];
    }

    if(listaDeNumeros.includes(numeroSecreto)){
        return gerarNumero();
    } else {
        listaDeNumeros.push(numeroSecreto);
        return numeroSecreto;
    }
}

function limpaCampo(){
    chute = document.querySelector('input');
    chute.value = '';

}

function reiniciarJogo(){
    numeroSecreto = gerarNumero();
    limpaCampo();
    numeroTentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}