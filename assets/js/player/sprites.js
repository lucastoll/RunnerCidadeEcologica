import { jogoEmExecucao } from "../comecarJogo.js";
import { player } from "../obstaculos/colisorObstaculos.js";
import { animacaoPowerupRodando, playerTemPowerUp } from "../powerUps/animacaoPowerup.js";
import { playerTemBicicleta } from "../powerUps/bicicleta.js";
import { playerTemCarroEletrico } from "../powerUps/carroEletrico.js";
import { playerTemOnibus } from "../powerUps/onibus.js";

const loopSpritesPlayer = setInterval(() => {
    if(jogoEmExecucao){
        if(playerTemPowerUp == false){
            spritesPlayerCarro();
        }
        else if(playerTemBicicleta){
            spritesPlayerAndando();
        }
        else if(playerTemOnibus){
            spritesPlayerAndando();
        }
        else if(playerTemCarroEletrico){
            spritesPlayerAndando();
        }
    }
}, 250); 

const spriteCarro1 = document.querySelector(".carro--1");
const spriteCarro2 = document.querySelector(".carro--2");
const spriteCarro3 = document.querySelector(".carro--3");
const spriteCarro4 = document.querySelector(".carro--4");

const arraySpriteCarro = [spriteCarro1, spriteCarro2, spriteCarro3, spriteCarro4];
let spriteCarro = 0;

function spritesPlayerCarro(){
    player.classList.add("carro");
    if(spriteCarro == 4){
        spriteCarro = 0;
    }
    if(spriteCarro == 0){
        arraySpriteCarro[3].style.display = "none";
    }
    else{
        arraySpriteCarro[spriteCarro - 1].style.display = "none";
    }
    arraySpriteCarro[spriteCarro++].style.display = "block";
}

function spritesPlayerBicicleta(){

}

function spritesPlayerOnibus(){

}

function spritesPlayerCarroEletrico(){

}

function limpaSprites(){
    player.classList.remove("carro");

    playerWalking1.style.display = "none";
    for(let i=0; i < arrayPlayerWalking.length; i++){
        arrayPlayerWalking[i].style.display = "none"
    }
    for(let i=0; i < arraySpriteCarro.length; i++){
        arraySpriteCarro[i].style.display = "none"
    }
}

const playerWalking1 = document.querySelector(".playerWalking--1");
const playerWalking2 = document.querySelector(".playerWalking--2");
const playerWalking3 = document.querySelector(".playerWalking--3");
const playerWalking4 = document.querySelector(".playerWalking--4");
const playerWalking5 = document.querySelector(".playerWalking--5");

const arrayPlayerWalking = [playerWalking2, playerWalking3, playerWalking4, playerWalking5];

let spriteAndando = 0;

function spritesPlayerAndando(){
    if(animacaoPowerupRodando == false){
        playerWalking1.style.display = "none";
        if(spriteAndando == 4){
            spriteAndando = 0;
        }
        if(spriteAndando == 0){
            arrayPlayerWalking[3].style.display = "none";
        }
        else{
            arrayPlayerWalking[spriteAndando - 1].style.display = "none";
        }
        arrayPlayerWalking[spriteAndando++].style.display = "block";
    }
    else{
        for(let i=0; i < arrayPlayerWalking.length; i++){
            arrayPlayerWalking[i].style.display = "none"
        }
        playerWalking1.style.display = "block";
    }

}

export { limpaSprites }