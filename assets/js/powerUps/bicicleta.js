import { getRandomInt } from "../auxiliares/getRandomInt.js";
import { player } from "../obstaculos/colisorObstaculos.js";
import { areaJogo } from "../comecarJogo.js";
import { animacaoPowerUp, setPlayerTemPowerUp } from "./animacaoPowerup.js";
import { randomizerPowerups } from "./randomizerPowerups.js";
import { limpaSprites } from "../player/sprites.js";
import { quantidadePowerUp, setPenultimoPowerUpString, setQuantidadePowerUp, setUltimoPowerUpString, ultimoPowerUpString } from "../mensagemPosGameOver.js";
import { setBottom, setBottomMarginVeiculo } from "../player/movimentacao.js";
import { arrayMusicas } from "../musica.js";

const powerUpBicicleta = document.querySelector(".powerUp--bicicleta");
let playerTemBicicleta;
let timeoutAnimacaoPowerUpBicicleta;
let timeoutFimPowerUpBicicleta;

function bicicleta(){
    limpaSprites();
    playerTemBicicleta = true;
    setQuantidadePowerUp(quantidadePowerUp + 1);
    setPenultimoPowerUpString(ultimoPowerUpString);
    setUltimoPowerUpString("a bicicleta");

    animacaoPowerUp("entradaPowerUp");
    addEstilosBicicleta();
    timeoutAnimacaoPowerUpBicicleta = setTimeout(() => {
        animacaoPowerUp();
    }, 20000);
    
    timeoutFimPowerUpBicicleta = setTimeout(() => {
        player.style = "";
        removeEstilosBicicleta();
        setTimeout(randomizerPowerups, getRandomInt(10000, 20000));
        limpaSprites();
    }, 23000);
}

function addEstilosBicicleta(){
    powerUpBicicleta.style.animation = "none";
    powerUpBicicleta.style.right = "-10%";
    player.classList.add("cicloviaMargin");
    setBottom(3);
    setBottomMarginVeiculo(3);
    for(let i = 0; i < arrayMusicas.length; i++){
        arrayMusicas[i].pause();
    }
    arrayMusicas[3].play();
    areaJogo.classList.add("areaJogoCiclovia");
    document.querySelector("body").style.background = "#009A17";
}

function removeEstilosBicicleta(){
    setPlayerTemPowerUp(false);
    playerTemBicicleta = false;
    for(let i = 0; i < arrayMusicas.length; i++){
        arrayMusicas[i].pause();
    }
    arrayMusicas[0].play();
    setBottom(8);
    setBottomMarginVeiculo(8);
    player.classList.remove("cicloviaMargin");
    areaJogo.classList.remove("areaJogoCiclovia");
    document.querySelector("body").style.background = "#A1AAAA";
}


export { bicicleta, playerTemBicicleta, timeoutFimPowerUpBicicleta, timeoutAnimacaoPowerUpBicicleta, removeEstilosBicicleta }