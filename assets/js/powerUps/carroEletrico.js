import { getRandomInt } from "../auxiliares/getRandomInt.js";
import { player } from "../obstaculos/colisorObstaculos.js";
import { areaJogo, jogoEmExecucao } from "../comecarJogo.js";
import { animacaoPowerUp, setPlayerTemPowerUp } from "./animacaoPowerup.js";
import { randomizerPowerups, randomNumPowerup } from "./randomizerPowerups.js";
import { limpaSprites } from "../player/sprites.js";
import { quantidadePowerUp, setPenultimoPowerUpString, setQuantidadePowerUp, setUltimoPowerUpString, ultimoPowerUpString } from "../mensagemPosGameOver.js";
import { arrayMusicas } from "../musica.js";
import { setBottom, setBottomMarginVeiculo } from "../player/movimentacao.js";


const powerUpCarroEletrico = document.querySelector(".powerUp--carroEletrico");
let playerTemCarroEletrico = false;
let timeoutAnimacaoPowerUpCarroEletrico;
let timeoutFimPowerUpCarroEletrico;

function carroEletrico(){
    limpaSprites();
    playerTemCarroEletrico = true;
    setQuantidadePowerUp(quantidadePowerUp + 1);
    setPenultimoPowerUpString(ultimoPowerUpString);
    setUltimoPowerUpString("o carro elétrico");
    for(let i = 0; i < arrayMusicas.length; i++){
        arrayMusicas[i].pause();
    }
    arrayMusicas[1].play();
    
    animacaoPowerUp("entradaPowerUp");
    addEstilosCarroEletrico();
    timeoutAnimacaoPowerUpCarroEletrico = setTimeout(() => {
        animacaoPowerUp();
    }, 20000);

    timeoutFimPowerUpCarroEletrico = setTimeout(() => {
        player.style = "";
        removeEstilosCarroEletrico();
        setTimeout(randomizerPowerups, getRandomInt(10000, 20000));
        limpaSprites();
    }, 23000);
}

function addEstilosCarroEletrico(){
    powerUpCarroEletrico.style.animation = "none";
    powerUpCarroEletrico.style.right = "-10%";
    document.querySelector("body").style.background = "#A1AAAA";
    areaJogo.classList.add("areaJogoCidadeLimpa");
    setBottom(8);
    setBottomMarginVeiculo(8);
}

function removeEstilosCarroEletrico(){
    for(let i = 0; i < arrayMusicas.length; i++){
        arrayMusicas[i].pause();
    }
    arrayMusicas[0].play();
    setPlayerTemPowerUp(false);
    playerTemCarroEletrico = false;
    document.querySelector("body").style.background = "#A1AAAA";
    areaJogo.classList.remove("areaJogoCidadeLimpa");
    setBottom(8);
    setBottomMarginVeiculo(8);
}

const spriteCarroEletrico00 = document.querySelector(".powerUp--carroEletrico00");
const spriteCarroEletrico01 = document.querySelector(".powerUp--carroEletrico01");
const spriteCarroEletrico02 = document.querySelector(".powerUp--carroEletrico02");
const spriteCarroEletrico03 = document.querySelector(".powerUp--carroEletrico03");
const spriteCarroEletrico04 = document.querySelector(".powerUp--carroEletrico04");
const spriteCarroEletrico05 = document.querySelector(".powerUp--carroEletrico05");
const spriteCarroEletrico06 = document.querySelector(".powerUp--carroEletrico06");
const spriteCarroEletrico07 = document.querySelector(".powerUp--carroEletrico07");

let contadorSpriteCarroEletrico = 0;

function spritesPowerUpCarroEletrico(){
  if(jogoEmExecucao && randomNumPowerup == 2){
    if(contadorSpriteCarroEletrico == 0){
     spriteCarroEletrico07.style.display = "none"
     spriteCarroEletrico00.style.display = "block";
     contadorSpriteCarroEletrico++;
    }
    else if(contadorSpriteCarroEletrico == 1){
     spriteCarroEletrico00.style.display = "none"
     spriteCarroEletrico01.style.display = "block";
     contadorSpriteCarroEletrico++;
    } 
    else if(contadorSpriteCarroEletrico == 2){
     spriteCarroEletrico01.style.display = "none"
     spriteCarroEletrico02.style.display = "block";
     contadorSpriteCarroEletrico++;
    } 
    else if(contadorSpriteCarroEletrico == 3){
     spriteCarroEletrico02.style.display = "none"
     spriteCarroEletrico03.style.display = "block";
     contadorSpriteCarroEletrico++;
    } 
    else if(contadorSpriteCarroEletrico == 4){
     spriteCarroEletrico03.style.display = "none"
     spriteCarroEletrico04.style.display = "block";
     contadorSpriteCarroEletrico++;
    }
    else if(contadorSpriteCarroEletrico == 5){
     spriteCarroEletrico04.style.display = "none"
     spriteCarroEletrico05.style.display = "block";
     contadorSpriteCarroEletrico++;
    }  
    else if(contadorSpriteCarroEletrico == 6){
     spriteCarroEletrico05.style.display = "none"
     spriteCarroEletrico06.style.display = "block";
     contadorSpriteCarroEletrico++;
    }
    else if(contadorSpriteCarroEletrico == 7){
     spriteCarroEletrico06.style.display = "none"
     spriteCarroEletrico07.style.display = "block";
     contadorSpriteCarroEletrico = 0;
    }
 }
}

export { spritesPowerUpCarroEletrico, carroEletrico, playerTemCarroEletrico, timeoutFimPowerUpCarroEletrico, timeoutAnimacaoPowerUpCarroEletrico, removeEstilosCarroEletrico }