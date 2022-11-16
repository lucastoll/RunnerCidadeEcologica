import { jogoEmExecucao } from "../comecarJogo.js";
import { player } from "../obstaculos/colisorObstaculos.js";
import { animacaoPowerupRodando } from "../powerUps/animacaoPowerup.js";


let posicaoPlayerLeft = 40;
let comprimentoPlayer = 133;

const executeMoves = () => {
    Object.keys(controller).forEach(key=> {
      controller[key].pressed && controller[key].func()
    })
}

setInterval(executeMoves, 20);

const controller = {
    87: {pressed: false, func: puloCounter}, //w
    68: {pressed: false, func: moveDireita}, //d 
    65: {pressed: false, func: moveEsquerda} //a
}

document.addEventListener("keydown", (e) => {
    if(controller[e.keyCode]){
        controller[e.keyCode].pressed = true
    }
})

document.addEventListener("keyup", (e) => {
    if(controller[e.keyCode]){
      controller[e.keyCode].pressed = false
    }
})

let contador = 0;
let estaPulando = false;
let podeTimeout = true;

let bottomMarginVeiculo = 8;
function setBottomMarginVeiculo(value){
    bottomMarginVeiculo = value;
}

function puloCounter(){
    if(estaPulando == false && jogoEmExecucao == true && animacaoPowerupRodando == false){
        contador++;

        if(podeTimeout == true){

            podeTimeout = false
            setTimeout(() => {
                pulo(contador);
            }, 100)
        }
    }
}

let bottom = 0;

function setBottom(value){
    bottom = value;
}


function pulo(contadorParam){
    contador = 0;

    if(contadorParam > 5){
        pular(12, 110, 5);
    }
    else if(contadorParam <= 5){
        pular(11, 85, 4);
    }
}

function pular(SomaBotton, limiteQueda, menosBottom){
    if(estaPulando) return
    let timerId = setInterval(() => {
        if(!jogoEmExecucao || animacaoPowerupRodando == true){
            clearInterval(timerId);
            estaPulando = false;
            podeTimeout = true;
        }
        else{
            if(bottom > limiteQueda){
                clearInterval(timerId);
                let timerDownId = setInterval(function(){
                    if(!jogoEmExecucao || animacaoPowerupRodando == true){
                        clearInterval(timerDownId);
                        estaPulando = false;
                        podeTimeout = true;
                    }
                    else{
                        bottom -= menosBottom;
                        player.style.bottom = bottom + "px";
        
                        if(bottom <= 10){
                            bottom = bottomMarginVeiculo;
                            estaPulando = false;
                            podeTimeout = true;
                            player.style.bottom = bottom + "px";
                            clearInterval(timerDownId)
                        }
                    }

                }, 20)
            } 
        estaPulando = true;
        bottom += SomaBotton;
        bottom = bottom * 0.93;
        player.style.bottom = bottom + "px";
        }     
    }, 20)
}




function moveEsquerda(){
    posicaoPlayerLeft = Number(window.getComputedStyle(player).left.replace("px", ""));
    comprimentoPlayer = Number(window.getComputedStyle(player).width.replace("px", ""));    

    if(jogoEmExecucao == true && animacaoPowerupRodando == false) {
        if(posicaoPlayerLeft > 0){
            posicaoPlayerLeft = posicaoPlayerLeft - 3;
        }
        player.style.left = `${posicaoPlayerLeft}px`;
     }
}

const areajogo1 = document.querySelector(".areajogo1");
let areaJogoComprimento;

function moveDireita(){
    posicaoPlayerLeft = Number(window.getComputedStyle(player).left.replace("px", ""));
    comprimentoPlayer = Number(window.getComputedStyle(player).width.replace("px", ""));
    areaJogoComprimento = Number(window.getComputedStyle(areajogo1).width.replace("px", ""));

    if(jogoEmExecucao == true && animacaoPowerupRodando == false) {
        if(posicaoPlayerLeft + comprimentoPlayer < areaJogoComprimento){
            posicaoPlayerLeft = posicaoPlayerLeft + 3;
        }
        player.style.left = `${posicaoPlayerLeft}px`;
     }
}

function setPosicaoPlayerLeft(value){
    posicaoPlayerLeft = value;
}

export { posicaoPlayerLeft, comprimentoPlayer, setPosicaoPlayerLeft, setBottomMarginVeiculo, setBottom };