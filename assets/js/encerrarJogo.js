import { popUp, player, posicaoPlayerBottom, arrayObstaculos, arrayPosicoesObstaculos } from "./obstaculos/colisorObstaculos.js";
import { setJogoEmExecucao, intervaloChecarColisaoObstaculo, intervaloChecarColisaoPowerup, intervaloPontuacao, areaJogo, jogoEmExecucao, intervaloChecarColisaoPontosExtras, loopSpritesPomba, loopSpritesCereja, loopSpritesPowerupCarroEletrico, loopSpritesPassarinho } from "./comecarJogo.js";
import { ponto } from "./pontuacao.js";
import { timeoutAnimacaoPowerUpBicicleta, timeoutFimPowerUpBicicleta } from "./powerUps/bicicleta.js";
import { timeoutAnimacaoPowerUpCarroEletrico, timeoutFimPowerUpCarroEletrico } from "./powerUps/carroEletrico.js";
import { arrayPowerups, arrayPosicaoPowerups } from "./powerUps/colisorPowerups.js";
import { timeoutAnimacaoPowerUpOnibus, timeoutFimPowerUpOnibus } from "./powerUps/onibus.js";
import { timeoutRecursivoRandomizerPowerups } from "./powerUps/randomizerPowerups.js";
import { timeoutRecursivoRandomizerObstaculos } from "./obstaculos/randomizerObstaculos.js";
import { timeoutAnimacaoPowerUpCaminhada, timeoutFimPowerUpCaminhada } from "./powerUps/caminhada.js";
import { arrayPontosExtras, arrayPosicoesPontosExtras } from "./pontosExtras/colisorPontosExtras.js";
import { timeoutRecursivoRandomizerPontosExtras } from "./pontosExtras/randomizerPontosExtras.js";
import { botaoMostrarPopUpFeedback } from "./formulario/formulario.js";

export function encerrarJogo(){
    if(jogoEmExecucao){
        setJogoEmExecucao(false);
        for(let i = 0; i < arrayObstaculos.length; i++) {
            arrayObstaculos[i].style.animation = "none";
            arrayObstaculos[i].style.left = `${arrayPosicoesObstaculos[i]}px`;
        }
        for(let i = 0; i < arrayPowerups.length; i++) {
            arrayPowerups[i].style.animation = "none";
            arrayPowerups[i].style.left = `${arrayPosicaoPowerups[i]}px`;
        }
        for(let i = 0; i < arrayPontosExtras.length; i++) {
            arrayPontosExtras[i].style.animation = "none";
            arrayPontosExtras[i].style.left = `${arrayPosicoesPontosExtras[i]}px`;
        }
    
        player.style.animation = "none";
        player.classList.remove("pula");
    
        let backgroundPosition = window.getComputedStyle(areaJogo).backgroundPosition;
        
        areaJogo.style.animation = "none";
        areaJogo.style.backgroundPosition = backgroundPosition;
    
        player.style.bottom = `${posicaoPlayerBottom}px`;
        popUp.style.display = "flex";
        botaoMostrarPopUpFeedback.style.display = "block";
        document.querySelector(".popUpScorePlaceholder").innerHTML = `Score: ${ponto}`
    
        setJogoEmExecucao(false);
        limpaIntervalos();
    
        setTimeout(() => {
            document.querySelector(".buttonPopUp").disabled = false;
        }, 2001)
    }
}

function limpaIntervalos(){
    //bicicleta
    clearTimeout(timeoutAnimacaoPowerUpBicicleta);
    clearTimeout(timeoutFimPowerUpBicicleta);
    //onibus
    clearTimeout(timeoutAnimacaoPowerUpOnibus);
    clearTimeout(timeoutFimPowerUpOnibus);
    //carroEletrico
    clearTimeout(timeoutAnimacaoPowerUpCarroEletrico);
    clearTimeout(timeoutFimPowerUpCarroEletrico);
    //caminhada
    clearTimeout(timeoutAnimacaoPowerUpCaminhada);
    clearTimeout(timeoutFimPowerUpCaminhada);
    //randomizers
    clearTimeout(timeoutRecursivoRandomizerObstaculos);
    clearTimeout(timeoutRecursivoRandomizerPowerups);
    clearTimeout(timeoutRecursivoRandomizerPontosExtras);
    //cereja animacao
    clearInterval(loopSpritesCereja);
    //power up carro eletrico animação;
    clearInterval(loopSpritesPowerupCarroEletrico);
    //sprite pomba
    clearInterval(loopSpritesPomba);
    //sprite passarinho
    clearInterval(loopSpritesPassarinho);
    //colisores
    clearInterval(intervaloChecarColisaoObstaculo);
    clearInterval(intervaloChecarColisaoPowerup);
    clearInterval(intervaloChecarColisaoPontosExtras);
    //pontuacao
    clearInterval(intervaloPontuacao);
}

  document.addEventListener("visibilitychange", () => {
    if(document.visibilityState === "hidden" && jogoEmExecucao == true) {
        encerrarJogo();
    } 
  });