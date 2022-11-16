import { encerrarJogo } from "../encerrarJogo.js";
import { comprimentoPlayer, posicaoPlayerLeft } from "../player/movimentacao.js";
import { playerTemOnibus } from "../powerUps/onibus.js";
import { randomNumObstaculo } from "./randomizerObstaculos.js";

//urbano
const player = document.querySelector(".player");
const sacoDeLixo = document.querySelector(".sacoDeLixo01");
const sacoDeLixo2 = document.querySelector(".sacoDeLixo02");
const hidrante = document.querySelector(".hidrante");
const cone = document.querySelector(".cone");
const pomba = document.querySelector(".pomba");
const rato = document.querySelector(".rato");
const placaSubwaySurfers = document.querySelector(".placaSubwaySurfers");
//ciclovia
const pedra = document.querySelector(".pedra01");
const pedra2 = document.querySelector(".pedra02");
const passarinho = document.querySelector(".passarinho");
const banco = document.querySelector('.banco');
const tronco = document.querySelector(".tronco");



const popUp = document.querySelector(".containerPopUpRestart");

/* Define a colisão e condição de parada */
let posicaoPlayerBottom, arrayPosicoesObstaculos;

/* sacoDeLixo até cone - cidade suja - 0 a 5 */
/* hidrante até passarinho - cidade limpa - 4 a 7 */
/* passarinho até tronco - ciclovia - 7 a 11 */

const arrayObstaculos = [sacoDeLixo, sacoDeLixo2, pomba, rato, hidrante, cone, placaSubwaySurfers, passarinho, pedra, pedra2, banco, tronco];

let playerEstaColidindo

function colisorObstaculos(){
    arrayPosicoesObstaculos = [];
    for(let i = 0; i < arrayObstaculos.length; i++){
      arrayPosicoesObstaculos.push(arrayObstaculos[i].offsetLeft)
    }
    posicaoPlayerBottom = window.getComputedStyle(player).bottom.replace("px", "");

    if(randomNumObstaculo == 2 || randomNumObstaculo == 7){ // Obstaculos aereos
      playerEstaColidindo = 
      (arrayObstaculos[randomNumObstaculo].offsetLeft < (posicaoPlayerLeft + comprimentoPlayer) 
      && arrayObstaculos[randomNumObstaculo].offsetLeft > (posicaoPlayerLeft - 50) 
      && posicaoPlayerBottom < 70);
    }
    else if(randomNumObstaculo == 3 || randomNumObstaculo == 4 || randomNumObstaculo == 5){
      playerEstaColidindo = 
      (arrayObstaculos[randomNumObstaculo].offsetLeft < (posicaoPlayerLeft + comprimentoPlayer - 10) 
      && arrayObstaculos[randomNumObstaculo].offsetLeft > (posicaoPlayerLeft - 50) 
      && posicaoPlayerBottom < 40);
    }
    else if(randomNumObstaculo == 6){
      playerEstaColidindo = 
      (arrayObstaculos[randomNumObstaculo].offsetLeft < (posicaoPlayerLeft + comprimentoPlayer - 10) 
      && arrayObstaculos[randomNumObstaculo].offsetLeft > (posicaoPlayerLeft - 50) 
      && posicaoPlayerBottom < 35);
    }
    else if(randomNumObstaculo == 11){
      playerEstaColidindo = 
      (arrayObstaculos[randomNumObstaculo].offsetLeft < (posicaoPlayerLeft + comprimentoPlayer - 10) 
      && arrayObstaculos[randomNumObstaculo].offsetLeft > (posicaoPlayerLeft - 50) 
      && posicaoPlayerBottom < 20);
    }
    else{
      playerEstaColidindo = 
      (arrayObstaculos[randomNumObstaculo].offsetLeft < (posicaoPlayerLeft + comprimentoPlayer) 
      && arrayObstaculos[randomNumObstaculo].offsetLeft > (posicaoPlayerLeft - 50) 
      && posicaoPlayerBottom < 50);
    }


    //&& posicaoObstaculoUm > 0

    if(playerEstaColidindo && playerTemOnibus == false){
      encerrarJogo()
    }
}

export {player, arrayPosicoesObstaculos, posicaoPlayerBottom, arrayObstaculos, colisorObstaculos, popUp};