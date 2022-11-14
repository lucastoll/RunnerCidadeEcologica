import { comprimentoPlayer, posicaoPlayerLeft } from "../player/movimentacao.js";
import { playerTemPowerUp } from "./animacaoPowerup.js";
import { bicicleta } from "./bicicleta.js";
import { caminhada } from "./caminhada.js";
import { carroEletrico } from "./carroEletrico.js";
import { onibus } from "./onibus.js";

const player = document.querySelector(".player");
const powerUpBicicleta = document.querySelector(".powerUp--bicicleta");
const powerUpOnibus = document.querySelector(".powerUp--onibus");
const powerUpCarroEletrico = document.querySelector(".powerUp--carroEletrico");
const powerUpCaminhada = document.querySelector(".powerUp--caminhada");

/* Define a colisão e condição de parada */
let posicaoPlayer, posicaoPowerUpBicicleta, posicaoPowerUpOnibus, posicaoPowerUpCarroEletrico, posicaoPowerUpCaminhada;

const arrayPowerups = [powerUpBicicleta, powerUpOnibus, powerUpCarroEletrico, powerUpCaminhada];
let arrayPosicaoPowerups = [posicaoPowerUpBicicleta, posicaoPowerUpOnibus, posicaoPowerUpCarroEletrico, posicaoPowerUpCaminhada];

let playerEstaColidindoBicicleta, playerEstaColidindoOnibus, playerEstaColidindoCarroEletrico, playerEstaColidindoCaminhada;

function colisorPowerup(){
    posicaoPowerUpBicicleta = arrayPowerups[0].offsetLeft;
    posicaoPowerUpOnibus = arrayPowerups[1].offsetLeft;
    posicaoPowerUpCarroEletrico = arrayPowerups[2].offsetLeft;
    posicaoPowerUpCaminhada = arrayPowerups[3].offsetLeft;
    posicaoPlayer = window.getComputedStyle(player).bottom.replace("px", "");
    
    arrayPosicaoPowerups = [posicaoPowerUpBicicleta, posicaoPowerUpOnibus, posicaoPowerUpCarroEletrico];
  

    playerEstaColidindoBicicleta = (posicaoPowerUpBicicleta < (posicaoPlayerLeft + comprimentoPlayer) && posicaoPowerUpBicicleta > (posicaoPlayerLeft - 50) && posicaoPlayer > 25 && posicaoPlayer < 100);
    playerEstaColidindoOnibus = (posicaoPowerUpOnibus < (posicaoPlayerLeft + comprimentoPlayer) && posicaoPowerUpOnibus > (posicaoPlayerLeft - 50) && posicaoPlayer > 25 && posicaoPlayer < 100);
    playerEstaColidindoCarroEletrico = (posicaoPowerUpCarroEletrico < (posicaoPlayerLeft + comprimentoPlayer) && posicaoPowerUpCarroEletrico > (posicaoPlayerLeft - 50) && posicaoPlayer > 25 && posicaoPlayer < 100);
    playerEstaColidindoCaminhada = (posicaoPowerUpCaminhada  < (posicaoPlayerLeft + comprimentoPlayer) && posicaoPowerUpCaminhada > (posicaoPlayerLeft - 50) && posicaoPlayer > 25 && posicaoPlayer < 100);


    if(playerEstaColidindoBicicleta || playerEstaColidindoCaminhada || playerEstaColidindoCarroEletrico || playerEstaColidindoOnibus){
      document.querySelector(".efeitoSonoroPowerUp").play();
    }

    if(playerEstaColidindoBicicleta){
      bicicleta();
    }
    else if(playerEstaColidindoOnibus){
      onibus();
    }
    else if(playerEstaColidindoCarroEletrico){
      carroEletrico();
    }
    else if(playerEstaColidindoCaminhada){
      caminhada();
    }  
  }
  

export { colisorPowerup, arrayPowerups, arrayPosicaoPowerups };