import { animacaoPowerupRodando } from "./powerUps/animacaoPowerup.js";

const pontuacao = document.querySelector('.pontuacao');
let ponto=0;
let timerObstaculos = 2000;

function Marcaponto(){
    if(animacaoPowerupRodando == false){
        if(timerObstaculos > 1500)
            timerObstaculos = Math.floor(-10 * ponto + 2010);
        
        ponto++;
        pontuacao.innerHTML=`Score: ${ponto}`;
    }
}

function ResetaPontos(){
    ponto=0;
    pontuacao.innerHTML=`Score: ${ponto}`;
}

export {Marcaponto, ResetaPontos, timerObstaculos};