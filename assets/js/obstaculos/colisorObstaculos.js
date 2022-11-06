import { encerrarJogo } from "../encerrarJogo.js";
import { comprimentoPlayer, posicaoPlayerLeft } from "../player/movimentacao.js";
import { playerTemOnibus } from "../powerUps/onibus.js";
import { randomNumObstaculo } from "./randomizerObstaculos.js";

const player = document.querySelector(".player");
const sacoDeLixo = document.querySelector(".sacoDeLixo01");
const pomba = document.querySelector(".pomba");
const popUp = document.querySelector(".containerPopUpRestart");

/* Define a colisão e condição de parada */
let posicaoPlayerBottom, arrayPosicoesObstaculos;

const arrayObstaculos = [sacoDeLixo, pomba];

let playerEstaColidindo

function colisorObstaculos(){
    arrayPosicoesObstaculos = [];
    for(let i = 0; i < arrayObstaculos.length; i++){
      arrayPosicoesObstaculos.push(arrayObstaculos[i].offsetLeft)
    }


    posicaoPlayerBottom = window.getComputedStyle(player).bottom.replace("px", "");

    if(randomNumObstaculo == 1){ // Obstaculos terrestres
      playerEstaColidindo = 
      (arrayObstaculos[randomNumObstaculo] < (posicaoPlayerLeft + comprimentoPlayer) 
      && arrayObstaculos[randomNumObstaculo] > (posicaoPlayerLeft - 50) 
      && posicaoPlayerBottom < 50 && arrayObstaculos[randomNumObstaculo] > 0);
    }
    else if(randomNumObstaculo == 2){ // Obstaculos aereos
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