import { jogoEmExecucao } from "../comecarJogo.js";
import { ponto, setPonto } from "../pontuacao.js";
import { playerTemPowerUp } from "../powerUps/animacaoPowerup.js";
import { arrayPontosExtras } from "./colisorPontosExtras.js"
import { randomNumPontosExtras } from "./randomizerPontosExtras.js";
let scoreCereja = document.querySelector(".scoreCereja");
let scoreCereja2x = document.querySelector(".scoreCereja2x");

function cereja(){
    if(playerTemPowerUp){
        scoreCereja2x.style.animation = "scoreExtra 1.5s ease-in 1"; 
        setTimeout(() => {
            scoreCereja2x.style.animation = "none";
        }, 1550)
        setPonto(ponto + 20);
    }
    else{
        scoreCereja.style.animation = "scoreExtra 1.5s ease-in 1";   
        setTimeout(() => {
            scoreCereja.style.animation = "none";
        }, 1550)
        setPonto(ponto + 10); 
    }

    document.querySelector(".audioPontoExtra").play();
    arrayPontosExtras.forEach((spritePontoExtra) => {
        spritePontoExtra.style.animation = "none";
    })
}

const spriteCereja00 = document.querySelector(".pontosExtras--cereja00");
const spriteCereja01 = document.querySelector(".pontosExtras--cereja01");
const spriteCereja02 = document.querySelector(".pontosExtras--cereja02");
const spriteCereja03 = document.querySelector(".pontosExtras--cereja03");
const spriteCereja04 = document.querySelector(".pontosExtras--cereja04");

let contadorSpriteCereja = 0;

function spritesCereja(){
    if(jogoEmExecucao && randomNumPontosExtras == 2){
        if(contadorSpriteCereja == 0){
         spriteCereja04.style.display = "none"
         spriteCereja00.style.display = "block";
         contadorSpriteCereja++;
        }
        else if(contadorSpriteCereja == 1){
         spriteCereja00.style.display = "none"
         spriteCereja01.style.display = "block";
         contadorSpriteCereja++;
        }
        else if(contadorSpriteCereja == 2){
         spriteCereja01.style.display = "none"
         spriteCereja02.style.display = "block";
         contadorSpriteCereja++;
        }
        else if(contadorSpriteCereja == 3){
         spriteCereja02.style.display = "none"
         spriteCereja03.style.display = "block";
         contadorSpriteCereja++;
        }
        else if(contadorSpriteCereja == 4){
         spriteCereja03.style.display = "none"
         spriteCereja04.style.display = "block";
         contadorSpriteCereja = 0
        }   
     }
}

export { cereja, spritesCereja }