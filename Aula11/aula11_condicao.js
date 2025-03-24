function calculaMulta() {
    var velocidade = window.document.getElementById('velocidade')
    var res = window.document.getElementById('resposta')
    var vel = Number(velocidade.value)
    var limite = 30
    var porcAcima = ((vel / limite) - 1) * 100

    res.innerHTML = vel > limite? `VOCÊ FOI MULTADO PASSOU HÁ <strong>${porcAcima.toFixed(2)}%</strong> ACIMA DE VELOCIDADE LIMITE` : `Velocidade OK, limite ${limite}`

    console.log(vel > limite? `VOCÊ FOI MULTADO PASSOU HÁ ${porcAcima}% ACIMA DE VELOCIDADE LIMITE` : `Velocidade OK, limite ${limite}`)

}