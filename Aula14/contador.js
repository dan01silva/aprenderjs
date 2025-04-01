function contar() {

    let inicio = parseInt(document.getElementById('inicio').value)
    let intervalo = parseInt(document.getElementById('intervalo').value)
    let fim = parseInt(document.getElementById('fim').value)


    
    if (fim < inicio) {
        window.alert('Fim não pode ser menor que o inicio')
    } else if (inicio.length == 0 || intervalo.length == 0 || fim.length == 0 ) {
        window.alert('Valores Inválidos, confira os campos e tente novamente')
    } else {
        for (inicio; inicio < fim; inicio += intervalo) {
            console.log(inicio)
            '➡️'
        }
        console.log(fim)
    }
}