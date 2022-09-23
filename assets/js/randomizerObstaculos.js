import {arrayObstaculos} from "./colisao.js"
import { timerObstaculos } from "./pontuacao.js";
let randomizer = 0, i;
let tempo=0;
function randomizerObstaculos(){
    randomizer = getRandomInt(0, 2);
    console.log(randomizer)
    console.log(tempo)
    //if e else para determinar o tempo de jogo
    if(tempo<=10)
    {
    arrayObstaculos[randomizer].style.animation = "carroparado linear infinite 2s";
    }
    else{
    arrayObstaculos[randomizer].style.animation = "carroparado linear infinite 1s";    
    }
    for(i=0; i<arrayObstaculos.length; i++){
        if(i != randomizer){
            arrayObstaculos[i].style.animation = "none";
        }
    }   
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
//conta tempo
function contatempo(){
    tempo=tempo+0.5;
}
function zeratempo(){
    tempo=0;
}

export {randomizerObstaculos, zeratempo, contatempo};