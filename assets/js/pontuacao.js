const pontuacao=document.querySelector('.pontuacao');
let ponto=0;
let timerObstaculos = Math.floor((-0.1 * ponto + 2.10) * 1000)
function Marcaponto(){
    console.log(timerObstaculos)
    ponto++;
    pontuacao.innerHTML=`Score: ${ponto}`;
}
function ResetaPontos(){
    ponto=0;
    pontuacao.innerHTML=`Score: ${ponto}`;
}
export {Marcaponto, ResetaPontos, timerObstaculos};