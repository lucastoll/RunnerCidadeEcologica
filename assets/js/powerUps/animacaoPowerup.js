
import { animacaoNuvemLimpaParaNuvemPoluida, animacaoNuvemPoluidaParaNuvemLimpa } from "../nuvem/nuvens.js";
import { player, posicaoPlayerBottom, arrayObstaculos, arrayPosicoesObstaculos  } from "../obstaculos/colisorObstaculos.js";
import { randomizerObstaculos, timeoutRecursivoRandomizerObstaculos } from "../obstaculos/randomizerObstaculos.js";
import { setPosicaoPlayerLeft } from "../player/movimentacao.js";
import { ponto, pontuacao } from "../pontuacao.js";

let animacaoPowerupRodando = false;
let playerTemPowerUp = false;
let powerUpTimeBar = document.querySelector(".pontuacaoTimeBar");
let arrayTimeoutsBarraDeTempoPowerUp = [];

let contador = 1;

function animacaoPowerUp(statusPowerUp){
    clearTimeout(timeoutRecursivoRandomizerObstaculos);
    animacaoPowerupRodando = true;
    playerTemPowerUp = true;
    travaAnimacoes();
    animacaoPisca();
    if(statusPowerUp == "entradaPowerUp"){
        pontuacao.innerHTML=`<span class="pontuacao2x">2x</span>Score: ${ponto}`;
        animacaoNuvemPoluidaParaNuvemLimpa();
        powerUpTimeBar.style.display = "block";
        powerUpTimeBar.style.width = "100%";
        contador = 1;
        for(let i=21; i >= 0; i--){
            arrayTimeoutsBarraDeTempoPowerUp.push(
                setTimeout(() => {
                    powerUpTimeBar.style.width = `${(i / 21) * 100}%`;
                }, (contador++) * 1000)
            )
        }
    }
    else{
        animacaoNuvemLimpaParaNuvemPoluida();
        setTimeout(() => {
            pontuacao.innerHTML=`Score: ${ponto}`;
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
    player.style.animation = `pisca 3s linear 1`;
}

export { animacaoPowerUp, animacaoPowerupRodando, playerTemPowerUp, setPlayerTemPowerUp, animacaoPisca, travaAnimacoes, powerUpTimeBar, arrayTimeoutsBarraDeTempoPowerUp}