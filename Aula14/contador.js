function contar() {

    let inicio = Number(document.getElementById('inicio').value)
    let intervalo = Number(document.getElementById('intervalo').value)
    let fim = Number(document.getElementById('fim').value)
    let res = document.getElementById('res')
    

    res.innerHTML = 'DADOS INVÁLIDOS: Início e fim não podem ser iguais.'
    if (inicio == 0 || intervalo == 0|| fim == 0) {
        console.log('dados invalidos')
        res.innerHTML = 'DADOS INVÁLIDOS, preencha e tente novamente'


    } else {
        if (inicio < fim) {
            console.log('inicio MENOR fim')
            res.innerHTML = ''
            for (inicio; inicio <= fim; inicio += intervalo) {

                res.innerHTML += `${inicio} \u{1F603}`

            }
            res.innerHTML += `\u{1F3C1}`
        } else if (inicio > fim) {
            res.innerHTML = ''
            console.log('inicio MAIOR fim')
            for (inicio; inicio >= fim; inicio -= intervalo) {

                res.innerHTML += `${inicio} \u{1F603}`

            }
            res.innerHTML += `\u{1F3C1}`
        }
    }

}