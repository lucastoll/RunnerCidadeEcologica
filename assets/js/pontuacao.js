import { playerTemPowerUp } from "./powerUps/animacaoPowerup.js";

const pontuacao = document.querySelector('.pontuacao');
let ponto=0, pontoTimerObstaculo=0;
let timerObstaculos = 3000;

function Marcaponto(){
    if(playerTemPowerUp == true){
        ponto = ponto + 2;
        pontoTimerObstaculo = pontoTimerObstaculo + 2;
    }
    else{
        if(timerObstaculos > 1500){
            timerObstaculos = Math.floor(-5 * pontoTimerObstaculo + 4010);
        }
        pontoTimerObstaculo++;
        ponto++;
    }
    pontuacao.innerHTML=`Score: ${ponto}`;
}

function ResetaPontos(){
    ponto=0;
    pontuacao.innerHTML=`Score: ${ponto}`;
}

function setTimerObstaculos(value){
    timerObstaculos = value;
}

function setPonto(value){
    ponto = value;
}

export {Marcaponto, ResetaPontos, timerObstaculos, setTimerObstaculos, ponto, setPonto};