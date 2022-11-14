let quantidadePowerUp = 0, ultimoPowerUpString = "a", penultimoPowerUpString = "b";
let MensagemPosGameOver = document.querySelector(".popUpMensagemPosGameOver");

function mensagemPosGameOver(){
    let Mensagem;

    if(ultimoPowerUpString == penultimoPowerUpString){
        quantidadePowerUp = 1;
    }

    if(quantidadePowerUp == 0){
        Mensagem = "Você pode melhorar, procure trocar para um meio de transporte " +
        "sustentável para pontuar mais e ajudar o meio ambiente!!";
    }
    else if(quantidadePowerUp == 1){
        Mensagem = `Bom trabalho, ao utilizar ${ultimoPowerUpString} você conseguiu se locomover pela cidade ecológica` + 
        ` sem causar danos ao meio ambiente e conseguiu uma boa pontuação`
    }
    else if(quantidadePowerUp > 1){
        Mensagem = `Excelente!!, ao utilizar meios de transporte como ${penultimoPowerUpString} e ${ultimoPowerUpString}` +
        ` você se moveu pela cidade ecológica sem poluir o meio ambiente e assim conseguiu uma ótima pontuação `
    }

    MensagemPosGameOver.innerHTML = Mensagem;
}

function setUltimoPowerUpString(value){
    ultimoPowerUpString = value;
}

function setQuantidadePowerUp(value){
    quantidadePowerUp = value;
}

function setPenultimoPowerUpString(value){
    penultimoPowerUpString = value;
}

function resetPowerUpMessage(){
    quantidadePowerUp = 0
    ultimoPowerUpString = "a"
    penultimoPowerUpString = "b"
}

export { mensagemPosGameOver, setQuantidadePowerUp, quantidadePowerUp, setUltimoPowerUpString, ultimoPowerUpString, setPenultimoPowerUpString, resetPowerUpMessage }

