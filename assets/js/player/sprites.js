import { player } from "../obstaculos/colisorObstaculos.js";
import { playerTemPowerUp } from "../powerUps/animacaoPowerup.js";
import { playerTemBicicleta } from "../powerUps/bicicleta.js";
import { playerTemCarroEletrico } from "../powerUps/carroEletrico.js";
import { playerTemOnibus } from "../powerUps/onibus.js";

const playerWalking2 = document.querySelector(".playerWalking--2");
const playerWalking3 = document.querySelector(".playerWalking--3");
const playerWalking4 = document.querySelector(".playerWalking--4");
const playerWalking5 = document.querySelector(".playerWalking--5");

const arrayPlayerWalking = [playerWalking2, playerWalking3, playerWalking4, playerWalking5];

let spriteAtual = 0;

const loopSpritesPlayer = setInterval(() => {
    if(playerTemPowerUp == false){
        spritesPlayerAndando();
    }
    else if(playerTemBicicleta){

    }
    else if(playerTemOnibus){

    }
    else if(playerTemCarroEletrico){

    }
}, 250); 

function spritesPlayerAndando(){
    if(spriteAtual == 4){
        spriteAtual = 0;
    }
    if(spriteAtual == 0){
        arrayPlayerWalking[3].style.display = "none";
    }
    else{
        arrayPlayerWalking[spriteAtual - 1].style.display = "none";
    }
    arrayPlayerWalking[spriteAtual++].style.display = "block";
}

function spritesPlayerBicicleta(){

}

function spritesPlayerOnibus(){

}

function spritesPlayerCarro(){

}

function spritesPlayerCarroEletrico(){

}