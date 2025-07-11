function contar() {

    let inicio = document.getElementById('inicio').value
    let intervalo = document.getElementById('intervalo').value
    let fim = document.getElementById('fim').value
    let res = document.getElementById('res')


       
    
    if (inicio == '' || intervalo == ''|| intervalo == '0' || fim == '') {
        console.log('dados invalidos')
        res.innerHTML = 'DADOS INVÁLIDOS, preencha e tente novamente'

        


    } else {
        let inicioN = Number(inicio)
        let intervaloN = Number(intervalo)
        let fimN = Number(fim)
        if (inicioN < fimN) {
            console.log('inicio MENOR fim')
            res.innerHTML = ''
            for (inicioN; inicioN <= fimN; inicioN += intervaloN) {

                res.innerHTML += `${inicioN} \u{1F603}`

            }
            res.innerHTML += `\u{1F3C1}`
        } else if (inicioN > fimN) {
            res.innerHTML = ''
            console.log('inicio MAIOR fim')
            for (inicioN; inicioN >= fimN; inicioN -= intervaloN) {

                res.innerHTML += `${inicioN} \u{1F603}`

            }
            res.innerHTML += `\u{1F3C1}`
        }
    }

}