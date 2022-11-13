let quantidadePowerUp = 0, ultimoPowerUpString = "", penultimoPowerUpString = "";
let MensagemPosGameOver = document.querySelector(".popUpMensagemPosGameOver");

function mensagemPosGameOver(){
    let Mensagem;

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

export { mensagemPosGameOver, setQuantidadePowerUp, quantidadePowerUp, setUltimoPowerUpString, ultimoPowerUpString, setPenultimoPowerUpString }


/* Bom trabalho, utilizando ao utilizar ------------ você conseguiu se locomover pela cidade 
sem causar danos ao meio ambiente e conseguiu uma boa pontuação

Excelente!!, ao utilizar meios de transporte como o ------------- e o ----------------
você se moveu pela cidade ecologica sem contribuir com a poluição e assim conseguiu uma ótima pontuação 
*/