const botao = document.querySelector('.botao');

botao.onclick = function(){
    const intesidade = document.querySelector('.intesidade').value

    const freq = document.querySelector('input[name="inlineRadioOptions1"]:checked').value


    
    const ifText = freq / 20

    const tempo = document.querySelector('.tempo').value

    const YoN1 = parseInt(document.querySelector('input[name="inlineRadioOptions2"]:checked').value)

    const YoN2 = parseInt(document.querySelector('input[name="inlineRadioOptions3"]:checked').value)

    const YoN3 = parseInt(document.querySelector('input[name="inlineRadioOptions4"]:checked').value)

    const YoN4 = parseInt(document.querySelector('input[name="inlineRadioOptions5"]:checked').value)

    const YoN5 = parseInt(document.querySelector('input[name="inlineRadioOptions6"]:checked').value)
    
    const select = document.getElementById('inlineFormCustomSelectPref')
    var notaSexual = select.options[select.selectedIndex].value

    const notaFinal = ((intesidade * freq) / 100) + ((ifText * tempo) / 4) + (((YoN1 + YoN2 + YoN3 + YoN4 - YoN5) * notaSexual) / 40)

    const resultadoLocal = document.getElementById('resultado')

    if(notaFinal > 0 && notaFinal <= 15){
        resultadoLocal.textContent = "Lance"
    }else if(notaFinal > 15 && notaFinal <= 30){
        resultadoLocal.textContent = "Caso"
    }else if(notaFinal > 30 && notaFinal <= 45){
        resultadoLocal.textContent = "Rolinho"
    }else if(notaFinal > 45 && notaFinal <= 80){
        resultadoLocal.textContent = "Rolo"
    }else if(notaFinal > 80 && YoN1 == 15){
        resultadoLocal.textContent = "Romance"
    }else if(notaFinal > 80){
        resultadoLocal.textContent = "Quase um romance, só precisam ser exclusivos"
    }

    const pontuacao = document.querySelector('p#pontuacao').textContent = notaFinal
    console.log(notaFinal)

    const resposta = document.querySelector('.resposta-overlay').classList.add("active")
}

const voltar = document.querySelector('#voltar')

voltar.onclick = function (){
    const resposta = document.querySelector('.resposta-overlay').classList.remove("active")
    document.location.reload(true)
}