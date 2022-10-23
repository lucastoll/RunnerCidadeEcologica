import { ponto, setPonto } from "../pontuacao.js";
import { playerTemPowerUp } from "../powerUps/animacaoPowerup.js";
import { arrayPontosExtras, sustentabilidadePontoExtra } from "./colisorPontosExtras.js"
let scoreSustentabilidade = document.querySelector(".scoreSustentabilidade");
let scoreSustentabilidade2x = document.querySelector(".scoreSustentabilidade2x");

function sustentabilidade(){
    if(playerTemPowerUp){
        scoreSustentabilidade2x.style.animation = "scoreExtra 1.5s ease-in 1";
        setPonto(ponto + 50);

        setTimeout(() => {
            scoreSustentabilidade2x.style.animation = "none";
        }, 1550)    
    }
    else{
        scoreSustentabilidade.style.animation = "scoreExtra 1.5s ease-in 1";
        setPonto(ponto + 25); 

        setTimeout(() => {
            scoreSustentabilidade.style.animation = "none";
        }, 1550)
    }

    document.querySelector(".audioPontoExtra").play();
    arrayPontosExtras.forEach((spritePontoExtra) => {
        spritePontoExtra.style.animation = "none";
    })

}

export { sustentabilidade }