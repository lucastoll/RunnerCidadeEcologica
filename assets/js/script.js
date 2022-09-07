console.log("AAAAAAAAAAAAAAAAAAA");
const player = document.querySelector('.player');
const obstaculocarro = document.querySelector('.obstaculocarro');

var aux = 0;
/*Define a ação para qd ele teclar a tecla w*/
const pular = () => {
    player.classList.add('pula');
    setTimeout(()=>{
        player.classList.remove('pula');
        aux=0;
    }, 1000);
}
document.addEventListener('keydown', (event) => {
    var tecla = event.key;
    var evento = event.code;
    
    if(tecla ==='w' && aux===0)
    {
        aux=1;
        pular();
    }
})
/*Define a colisão e condição de parada*/
const intervalo = setInterval(() => {
    const posicaocarro = obstaculocarro.offsetLeft;
    const posicaoplayer = window.getComputedStyle(player).bottom.replace('px','');
    console.log(posicaoplayer);
if(posicaocarro <= 97 && posicaocarro>0 && posicaoplayer < 50)
{
    obstaculocarro.style.animation = 'none';
    obstaculocarro.style.left = `${posicaocarro}px`;
    player.style.animation = 'none';
    player.style.bottom = `${posicaoplayer}`;
}
}, 10);