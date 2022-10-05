
import { player, posicaoPlayer, arrayObstaculos, arrayPosicoesObstaculos  } from "../colisorObstaculos.js";
import { randomizerObstaculos } from "../randomizerObstaculos.js";

let animacaoPowerupRodando = false;
let playerTemPowerUp = false;

function animacaoPowerUp(){
    animacaoPowerupRodando = true;
    playerTemPowerUp = true;
    travaAnimacoes();
    animacaoPisca();
    //Após o fim da animação pisca...
    setTimeout(() => {
        for(var i=0; i<arrayObstaculos.length; i++){
            arrayObstaculos[i].style.left = "auto";
            arrayObstaculos[i].style.right = "-10%";
        }
        player.style.bottom = "0px";
        player.style = "";

        animacaoPowerupRodando = false;
        setTimeout(randomizerObstaculos, 2000);
    }, 3000); 
}

function setPlayerTemPowerUp(value){
    playerTemPowerUp = value;
}

function travaAnimacoes(){
    for(var i=0; i<arrayObstaculos.length; i++){
        arrayObstaculos[i].style.left = `${arrayPosicoesObstaculos[i]}px`
    }
    player.classList.remove("pula");
    player.style.bottom = `${posicaoPlayer}px`;
}

function animacaoPisca(){
    for(var i=0; i<arrayObstaculos.length; i++){
        arrayObstaculos[i].style.animation = "pisca 3s linear 1";
    }
    console.log(player.style.animation)
    player.style.animation = `pisca 3s linear 1`;
}

export { animacaoPowerUp, animacaoPowerupRodando, playerTemPowerUp, setPlayerTemPowerUp, animacaoPisca, travaAnimacoes }