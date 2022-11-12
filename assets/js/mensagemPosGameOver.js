let quantidadePowerUp;

function mensagemPosGameOver(){
    let Mensagem;

    if(quantidadePowerUp == 0){
        Mensagem = "Você pode melhorar, procure trocar para um meio de transporte " +
        "sustentável para pontuar mais e ajudar o meio ambiente!!";
    }
    else if(quantidadePowerUp == 1){

    }

    return "";
}

function setQuantidadePowerUp(value){
    quantidadePowerUp = value;
}

export { quantidadePowerUp }