import {arrayObstaculos} from "./colisao.js"
let randomizer = 0, i;

function randomizerObstaculos(){
    randomizer = getRandomInt(0, 2);
    console.log(randomizer)
    arrayObstaculos[randomizer].style.animation = "carroparado linear infinite 2s";
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

export {randomizerObstaculos};