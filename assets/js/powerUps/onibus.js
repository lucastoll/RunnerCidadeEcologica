import { getRandomInt } from "../auxiliares/getRandomInt.js";
import { player } from "../obstaculos/colisorObstaculos.js";
import { areaJogo } from "../comecarJogo.js";
import { animacaoPowerUp, setPlayerTemPowerUp } from "./animacaoPowerup.js";
import { randomizerPowerups } from "./randomizerPowerups.js";
import { limpaSprites } from "../player/sprites.js";
import { quantidadePowerUp, setPenultimoPowerUpString, setQuantidadePowerUp, setUltimoPowerUpString, ultimoPowerUpString } from "../mensagemPosGameOver.js";
import { arrayMusicas } from "../musica.js";
import { setBottom, setBottomMarginVeiculo } from "../player/movimentacao.js";


const powerUpOnibus = document.querySelector(".powerUp--onibus");
let playerTemOnibus = false;
let timeoutAnimacaoPowerUpOnibus;
let timeoutFimPowerUpOnibus;

function onibus(){
    limpaSprites();
    playerTemOnibus = true;
    setQuantidadePowerUp(quantidadePowerUp + 1);
    setPenultimoPowerUpString(ultimoPowerUpString);
    setUltimoPowerUpString("o ônibus");
    
    animacaoPowerUp("entradaPowerUp");
    addEstilosOnibus();

    timeoutAnimacaoPowerUpOnibus = setTimeout(() => {
        animacaoPowerUp();
    }, 20000);

    timeoutFimPowerUpOnibus = setTimeout(() => {
        player.style = "";
        removeEstilosOnibus();
        setTimeout(randomizerPowerups, getRandomInt(10000, 20000));
        limpaSprites();
    }, 23000);
}

function addEstilosOnibus(){
    powerUpOnibus.style.animation = "none";
    powerUpOnibus.style.right = "-10%";
    player.classList.add("onibus");
    areaJogo.classList.add("areaJogoCidadeLimpa");
    for(let i = 0; i < arrayMusicas.length; i++){
        arrayMusicas[i].pause();
    }
    arrayMusicas[2].play();
    setBottom(8);
    setBottomMarginVeiculo(8);
}

function removeEstilosOnibus(){
    setPlayerTemPowerUp(false);
    playerTemOnibus = false;
    player.classList.remove("onibus");
    areaJogo.classList.remove("areaJogoCidadeLimpa");
    for(let i = 0; i < arrayMusicas.length; i++){
        arrayMusicas[i].pause();
    }
    arrayMusicas[0].play();
    setBottom(8);
    setBottomMarginVeiculo(8);
}

export { onibus, playerTemOnibus, timeoutAnimacaoPowerUpOnibus, timeoutFimPowerUpOnibus, removeEstilosOnibus }