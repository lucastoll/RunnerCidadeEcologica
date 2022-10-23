import { ponto, setPonto } from "../pontuacao.js";
import { playerTemPowerUp } from "../powerUps/animacaoPowerup.js";
import { arrayPontosExtras, cerejaPontoExtra } from "./colisorPontosExtras.js"
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

export { cereja }