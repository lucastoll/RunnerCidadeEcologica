import { popUp, player, posicaoPlayerBottom, arrayObstaculos, arrayPosicoesObstaculos } from "./obstaculos/colisorObstaculos.js";
import { setJogoEmExecucao, intervaloChecarColisaoObstaculo, intervaloChecarColisaoPowerup, intervaloPontuacao, areaJogo, jogoEmExecucao, intervaloChecarColisaoPontosExtras, loopSpritesPomba, loopSpritesCereja, loopSpritesPowerupCarroEletrico, loopSpritesPassarinho, timeoutInicialObstaculos, timeoutInicialPontosExtras, timeoutInicialPowerUp } from "./comecarJogo.js";
import { ponto, setPonto, setTimerObstaculos } from "./pontuacao.js";
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
import { mensagemPosGameOver } from "./mensagemPosGameOver.js";
import { arrayTimeoutsBarraDeTempoPowerUp, powerUpTimeBar } from "./powerUps/animacaoPowerup.js";
import { arrayMusicas } from "./musica.js";


export function encerrarJogo(){
    if(jogoEmExecucao){
        setJogoEmExecucao(false);
        limpaIntervalos();
        setTimerObstaculos(3000);
        // Trava objetos
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
        for(let i=0; i<arrayTimeoutsBarraDeTempoPowerUp.length; i++) {
            clearTimeout(arrayTimeoutsBarraDeTempoPowerUp[i]);
          }
        player.style.animation = "none";
        player.classList.remove("pula");
        player.style.bottom = `${posicaoPlayerBottom}px`;
        let backgroundPosition = window.getComputedStyle(areaJogo).backgroundPosition;
        areaJogo.style.animation = "none";
        areaJogo.style.backgroundPosition = backgroundPosition;
        // PopUp
        popUp.style.display = "flex";
        botaoMostrarPopUpFeedback.style.display = "block";
        document.querySelector(".popUpScorePlaceholder").innerHTML = `Score: ${ponto}`;
        powerUpTimeBar.style.display = "none";
        mensagemPosGameOver();    
        //musica
        document.querySelector(".audioGameOver").play();
        for(let i = 0; i < arrayMusicas.length; i++){
            arrayMusicas[i].pause();
            arrayMusicas[i].currentTime = 0;
        }
        setTimeout(() => {
            document.querySelector(".buttonPopUp").disabled = false;
        }, 2001)
    }
}

function limpaIntervalos(){
    //timeoutsIniciais
    clearTimeout(timeoutInicialObstaculos);
    clearTimeout(timeoutInicialPontosExtras);
    clearTimeout(timeoutInicialPowerUp);
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

// Encerrar jogo caso o player troque de aba / aplicativo dentro do computador.
document.addEventListener("visibilitychange", () => {
    if(document.visibilityState === "hidden" && jogoEmExecucao == true) {
        encerrarJogo();
    } 
});