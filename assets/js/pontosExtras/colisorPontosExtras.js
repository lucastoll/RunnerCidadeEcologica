import { player, posicaoPlayerBottom } from "../obstaculos/colisorObstaculos.js";
import { comprimentoPlayer, posicaoPlayerLeft } from "../player/movimentacao.js";
import { estrela } from "./estrela.js";
import { sustentabilidade } from "./sustentabilidade.js";
import { cereja } from "./cereja.js";
import { playerTemPowerUp } from "../powerUps/animacaoPowerup.js";
import { playerTemOnibus } from "../powerUps/onibus.js";
import { playerTemBicicleta } from "../powerUps/bicicleta.js";
import { playerTemCaminhada } from "../powerUps/caminhada.js";
import { playerTemCarroEletrico } from "../powerUps/carroEletrico.js";

/* Define a colisão e condição de parada */

const estrelaPontoExtra = document.querySelector(".estrela");
const sustentabilidadePontoExtra = document.querySelector(".sustentabilidade");
const cerejaPontoExtra = document.querySelector(".cereja");

let arrayPontosExtras = [estrelaPontoExtra, sustentabilidadePontoExtra, cerejaPontoExtra];
let posicaoEstrela, posicaoSustentabilidade, posicaoCereja;
let arrayPosicoesPontosExtras;
let playerEstaColidindoEstrela, playerEstaColidindoSustentabilidade, playerEstaColidindoCereja;


function colisorPontosExtras(){
    posicaoEstrela = arrayPontosExtras[0].offsetLeft;
    posicaoSustentabilidade = arrayPontosExtras[1].offsetLeft;
    posicaoCereja = arrayPontosExtras[2].offsetLeft;

    arrayPosicoesPontosExtras = [posicaoEstrela, posicaoSustentabilidade, posicaoCereja];    

    if(!playerTemPowerUp || playerTemCarroEletrico){
        playerEstaColidindoEstrela = (posicaoEstrela < (posicaoPlayerLeft + comprimentoPlayer) && posicaoEstrela > (posicaoPlayerLeft - 40) && posicaoPlayerBottom > 95);
    }
    else if(playerTemOnibus){
        playerEstaColidindoEstrela = (posicaoEstrela < (posicaoPlayerLeft + comprimentoPlayer) && posicaoEstrela > (posicaoPlayerLeft - 40) && posicaoPlayerBottom > 70);
    }
    else if(playerTemBicicleta){
        playerEstaColidindoEstrela = (posicaoEstrela < (posicaoPlayerLeft + comprimentoPlayer) && posicaoEstrela > (posicaoPlayerLeft - 40) && posicaoPlayerBottom > 80);
    }
    else if(playerTemCaminhada){
        playerEstaColidindoEstrela = (posicaoEstrela < (posicaoPlayerLeft + comprimentoPlayer) && posicaoEstrela > (posicaoPlayerLeft - 40) && posicaoPlayerBottom > 90);
    }
    playerEstaColidindoSustentabilidade = (posicaoSustentabilidade < (posicaoPlayerLeft + comprimentoPlayer) && posicaoSustentabilidade > (posicaoPlayerLeft - 40) && posicaoPlayerBottom < 120 && posicaoPlayerBottom > 30);
    playerEstaColidindoCereja = (posicaoCereja < (posicaoPlayerLeft + comprimentoPlayer) && posicaoCereja > (posicaoPlayerLeft - 40) && posicaoPlayerBottom < 40);

    if(playerEstaColidindoEstrela){
        estrela();
    }
    else if(playerEstaColidindoSustentabilidade){
        sustentabilidade();
    }
    else if(playerEstaColidindoCereja){
        cereja();
    }
}


export { colisorPontosExtras, arrayPontosExtras, arrayPosicoesPontosExtras, estrelaPontoExtra, sustentabilidadePontoExtra, cerejaPontoExtra }

