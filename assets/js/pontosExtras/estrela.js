import { ponto, setPonto } from "../pontuacao.js";
import { playerTemPowerUp } from "../powerUps/animacaoPowerup.js";
import { arrayPontosExtras } from "./colisorPontosExtras.js";
let scoreEstrela = document.querySelector(".scoreEstrela");
let scoreEstrela2x = document.querySelector(".scoreEstrela2x");

function estrela(){
    if(playerTemPowerUp){
        scoreEstrela2x.style.animation = "scoreExtra 1.5s ease-in 1";
        setTimeout(() => {
            scoreEstrela2x.style.animation = "none";
        }, 1550)
        setPonto(ponto + 100);
    }
    else{
        scoreEstrela.style.animation = "scoreExtra 1.5s ease-in 1";
        setTimeout(() => {
            scoreEstrela.style.animation = "none";
        }, 1550)
        setPonto(ponto + 50); 
    }
    
    document.querySelector(".audioPontoExtra").play();
    arrayPontosExtras.forEach((spritePontoExtra) => {
        spritePontoExtra.style.animation = "none";
    })   
}

export { estrela }