import { getRandomInt } from "../auxiliares/getRandomInt.js";
import { player } from "../obstaculos/colisorObstaculos.js";
import { areaJogo } from "../comecarJogo.js";
import { animacaoPowerUp, setPlayerTemPowerUp } from "./animacaoPowerup.js";
import { randomizerPowerups } from "./randomizerPowerups.js";
import { limpaSprites } from "../player/sprites.js";
import { quantidadePowerUp, setPenultimoPowerUpString, setQuantidadePowerUp, setUltimoPowerUpString, ultimoPowerUpString } from "../mensagemPosGameOver.js";

const powerUpCaminhada = document.querySelector(".powerUp--caminhada");
let playerTemCaminhada;
let timeoutAnimacaoPowerUpCaminhada;
let timeoutFimPowerUpCaminhada;

function caminhada(){
    limpaSprites();
    playerTemCaminhada = true;
    setQuantidadePowerUp(quantidadePowerUp + 1);
    setPenultimoPowerUpString(ultimoPowerUpString);
    setUltimoPowerUpString("a caminhada");

    animacaoPowerUp("entradaPowerUp");
    addEstilosCaminhada();
    timeoutAnimacaoPowerUpCaminhada = setTimeout(() => {
        animacaoPowerUp();
    }, 20000);

    timeoutFimPowerUpCaminhada = setTimeout(() => {
        player.style = "";
        removeEstilosCaminhada();
        setTimeout(randomizerPowerups, getRandomInt(20000, 35000));
        limpaSprites();
    }, 23000);
}


function addEstilosCaminhada(){
    powerUpCaminhada.style.animation = "none";
    powerUpCaminhada.style.right = "-10%";
    player.classList.add("cicloviaMargin");
    areaJogo.classList.add("areaJogoCiclovia");
    setBottom(3);
    setBottomMarginVeiculo(3);
    document.querySelector("body").style.background = "#009A17";
}

function removeEstilosCaminhada(){
    setPlayerTemPowerUp(false);
    playerTemCaminhada = false;
    setBottom(8);
    setBottomMarginVeiculo(8);
    player.classList.remove("cicloviaMargin");
    areaJogo.classList.remove("areaJogoCiclovia");
    document.querySelector("body").style.background = "#A1AAAA";
}


export { caminhada, playerTemCaminhada, timeoutFimPowerUpCaminhada, timeoutAnimacaoPowerUpCaminhada, removeEstilosCaminhada }