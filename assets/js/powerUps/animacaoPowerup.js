
import { animacaoNuvemLimpaParaNuvemPoluida, animacaoNuvemPoluidaParaNuvemLimpa } from "../nuvem/nuvens.js";
import { player, posicaoPlayerBottom, arrayObstaculos, arrayPosicoesObstaculos  } from "../obstaculos/colisorObstaculos.js";
import { randomizerObstaculos, timeoutRecursivoRandomizerObstaculos } from "../obstaculos/randomizerObstaculos.js";
import { setPosicaoPlayerLeft } from "../player/movimentacao.js";

let animacaoPowerupRodando = false;
let playerTemPowerUp = false;
let powerUpTimeBar = document.querySelector(".pontuacaoTimeBar");

let contador = 1;

function animacaoPowerUp(statusPowerUp){
    clearTimeout(timeoutRecursivoRandomizerObstaculos);
    animacaoPowerupRodando = true;
    playerTemPowerUp = true;
    travaAnimacoes();
    animacaoPisca();
    if(statusPowerUp == "entradaPowerUp"){
        animacaoNuvemPoluidaParaNuvemLimpa();
        powerUpTimeBar.style.display = "block";
        for(let i=21; i >= 0; i--){
            setTimeout(() => {
                powerUpTimeBar.style.width = `${(i / 21) * 100}%`;
            }, (contador++) * 1000)
        }
    }
    else{
        animacaoNuvemLimpaParaNuvemPoluida();
        setTimeout(() => {
            powerUpTimeBar.style.display = "none";
        }, 3000)
    }

    //Após o fim da animação pisca...
    setTimeout(() => {
        for(var i=0; i<arrayObstaculos.length; i++){
            arrayObstaculos[i].style.left = "auto";
            arrayObstaculos[i].style.right = "-20%";
        }
        setPosicaoPlayerLeft(40);
        player.style.bottom = "0px";
        player.style = "";

        animacaoPowerupRodando = false;
        setTimeout(randomizerObstaculos, 3500);
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
    player.style.bottom = `${posicaoPlayerBottom}px`;
}

function animacaoPisca(){
    for(var i=0; i<arrayObstaculos.length; i++){
        arrayObstaculos[i].style.animation = "pisca 3s linear 1";
    }
    console.log(player.style.animation)
    player.style.animation = `pisca 3s linear 1`;
}

export { animacaoPowerUp, animacaoPowerupRodando, playerTemPowerUp, setPlayerTemPowerUp, animacaoPisca, travaAnimacoes }