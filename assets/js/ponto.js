const pontuacao=document.querySelector('.pontuacao');
let ponto=0;
function Marcaponto(){
    ponto++;
    pontuacao.innerHTML=`Score: ${ponto}`;
}
function ResetaPontos(){
    ponto=0;
    pontuacao.innerHTML=`Score: ${ponto}`;
}
export {Marcaponto, ResetaPontos};