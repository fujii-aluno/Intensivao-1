const botaoPlayPause = document.getElementById("play-pause");
const audioCapitulo = document.getElementById("audio-capitulo")
const botaoProximo = document.getElementById("proximo");
const capituloTexto = document.getElementById("capitulo");
const botaoVoltar = document.getElementById("anterior")

const numerosCapitulos = 10;
let taTocando = 0;
let capituloAtual = 1;

function tocarFaixa(){
    audioCapitulo.play();
    botaoPlayPause.className = "bi bi-play-fill";
    
}
function pausarFaixa(){
    audioCapitulo.pause();
    botaoPlayPause.className = "bi bi-pause";
}

botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoProximo.addEventListener('click', proximaFaixa);
botaoVoltar.addEventListener("click", voltarFaixa)

function tocarOuPausar(){
    if(taTocando){
        taTocando = 0;
        pausarFaixa();      
    }
    else{        
        tocarFaixa();   
        taTocando = 1;
    }
}

function proximaFaixa(){
    if (capituloAtual == numerosCapitulos){
        capituloAtual = 1;
    }else {
        capituloAtual++
    }

    audioCapitulo.src = `./books/dom-casmurro/${capituloAtual}.mp3`;
    capitulo.innerText = `Capítulo ${capituloAtual}`;
    taTocando = 1;
    tocarFaixa();
}

function voltarFaixa(){
    if (capituloAtual == 1){
        capituloAtual = 1;
    }else {
        capituloAtual = capituloAtual - 1;
    }

    audioCapitulo.src = `./books/dom-casmurro/${capituloAtual}.mp3`;
    capitulo.innerText = `Capítulo ${capituloAtual}`;
    taTocando = 1;
    tocarFaixa();
}