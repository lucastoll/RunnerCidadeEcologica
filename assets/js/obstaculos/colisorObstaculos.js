import { encerrarJogo } from "../encerrarJogo.js";
import { comprimentoPlayer, posicaoPlayerLeft } from "../player/movimentacao.js";
import { playerTemOnibus } from "../powerUps/onibus.js";
import { randomNumObstaculo } from "./randomizerObstaculos.js";

const player = document.querySelector(".player");
const sacoDeLixo = document.querySelector(".sacoDeLixo01");
const sacoDeLixo2 = document.querySelector(".sacoDeLixo02");
const hidrante = document.querySelector(".hidrante");
const cone = document.querySelector(".cone");
const pomba = document.querySelector(".pomba");
const rato = document.querySelector(".rato");
const popUp = document.querySelector(".containerPopUpRestart");

/* Define a colisão e condição de parada */
let posicaoPlayerBottom, arrayPosicoesObstaculos;

const arrayObstaculos = [sacoDeLixo, sacoDeLixo2, hidrante, cone, rato, pomba];

let playerEstaColidindo

function colisorObstaculos(){
    arrayPosicoesObstaculos = [];
    for(let i = 0; i < arrayObstaculos.length; i++){
      arrayPosicoesObstaculos.push(arrayObstaculos[i].offsetLeft)
    }


    posicaoPlayerBottom = window.getComputedStyle(player).bottom.replace("px", "");

    if(randomNumObstaculo < 5){ // Obstaculos terrestres
      playerEstaColidindo = 
      (arrayObstaculos[randomNumObstaculo].offsetLeft < (posicaoPlayerLeft + comprimentoPlayer) 
      && arrayObstaculos[randomNumObstaculo].offsetLeft > (posicaoPlayerLeft - 50) 
      && posicaoPlayerBottom < 50);
    }
    else if(randomNumObstaculo == 5){ // Obstaculos aereos
      playerEstaColidindo = 
      (arrayObstaculos[randomNumObstaculo].offsetLeft < (posicaoPlayerLeft + comprimentoPlayer) 
      && arrayObstaculos[randomNumObstaculo].offsetLeft > (posicaoPlayerLeft - 50) 
      && posicaoPlayerBottom > 60);
    }

    //&& posicaoObstaculoUm > 0

    if(playerEstaColidindo && playerTemOnibus == false){
      encerrarJogo()
    }
}

export {player, arrayPosicoesObstaculos, posicaoPlayerBottom, arrayObstaculos, colisorObstaculos, popUp};