import { bicicleta } from "./bicicleta.js";
import { carroEletrico } from "./carroEletrico.js";
import { onibus } from "./onibus.js";

const player = document.querySelector(".player");
const powerUpBicicleta = document.querySelector(".powerUp--bicicleta");
const powerUpOnibus = document.querySelector(".powerUp--onibus");
const powerUpCarroEletrico = document.querySelector(".powerUp--carroEletrico");

/* Define a colisão e condição de parada */
let posicaoPlayer, posicaoPowerUpBicicleta, posicaoPowerUpOnibus, posicaoPowerUpCarroEletrico;

const arrayPowerups = [powerUpBicicleta, powerUpOnibus, powerUpCarroEletrico];
let arrayPosicaoPowerups = [posicaoPowerUpBicicleta, posicaoPowerUpOnibus, posicaoPowerUpCarroEletrico];


function colisorPowerup(){
    posicaoPowerUpBicicleta = arrayPowerups[0].offsetLeft;
    posicaoPowerUpOnibus = arrayPowerups[1].offsetLeft;
    posicaoPowerUpCarroEletrico = arrayPowerups[2].offsetLeft;
    arrayPosicaoPowerups = [posicaoPowerUpBicicleta, posicaoPowerUpOnibus, posicaoPowerUpCarroEletrico];
    
    posicaoPlayer = window.getComputedStyle(player).bottom.replace("px", "");
  
    const playerEstaColidindoBicicleta = (posicaoPowerUpBicicleta < 92 && posicaoPlayer > 15 && posicaoPlayer < 95) 
    const playerEstaColidindoOnibus = (posicaoPowerUpOnibus < 92 && posicaoPlayer > 15 && posicaoPlayer < 95) 
    const playerEstaColidindoCarroEletrico = (posicaoPowerUpCarroEletrico < 92 && posicaoPlayer > 15 && posicaoPlayer < 95) 

    if(playerEstaColidindoBicicleta){
      bicicleta();
    }
    else if(playerEstaColidindoOnibus){
      onibus();
    }
    else if(playerEstaColidindoCarroEletrico){
      carroEletrico();
    }
  }
  

export { colisorPowerup, arrayPowerups, arrayPosicaoPowerups };