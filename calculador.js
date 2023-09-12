
var calcularBotao = document.getElementById('calcular')
var localResult = document.getElementById('resultado')

calcularBotao.addEventListener('click', function Calcular() {
    var pesoTotal = Number(document.getElementById('pesoTotal').value)
    var peso = Number(document.getElementById('peso').value)
    var pesoChapa = Number(document.getElementById('pesoChapa').value)


    var valorSemPerda = (pesoChapa / peso)
    var resultadoValorSemPerda =  1 / valorSemPerda

    var valorComPerda = (pesoChapa / pesoTotal).toFixed(0)
    var resultadoValorComPerda = 1 / valorComPerda

    var resultadoRealPercentual = (((1 / valorComPerda) / resultadoValorSemPerda) - 1) *100

    localResult.innerHTML = `<h2>RESULTADO VALOR SEM PERDA : </h2> 
        <p>Quantidade de peças sem perda = ${valorSemPerda}</p>
        <p>Valor em UND sem perda = ${resultadoValorSemPerda.toFixed(7)}</p>
        <h2>RESULTADO VALOR COM PERDA : </h2> 
        <p>Quantidade de peças com perda = ${valorComPerda}</p>
        <p>Valor em UND com perda = ${resultadoValorComPerda.toFixed(7)}</p>
        
        <h3> Confirmação = ${(1 / resultadoValorComPerda).toFixed(2)}</h3>

        <h4> Valor real de perda = ${resultadoRealPercentual.toFixed(4)}</h4>
        `
    document.getElementById('pesoTotal').value = ``
    document.getElementById('peso').value = ``
    document.getElementById('peso').focus()
})

//25.62866