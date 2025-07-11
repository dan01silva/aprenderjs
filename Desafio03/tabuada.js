function getTabuada() {
    let res = window.document.getElementById('res')
    let numeroInput = window.document.getElementById('numero').value

    if (numeroInput == '') {
        res.innerHTML = 'Digite um número para gerar a tabuada'
    } else {
        let num = Number(numeroInput)
        // Limpar tabuada anterior
        res.innerHTML = `<strong>Tabuada do ${num}:</strong><br>`

        // Cria o select dinamicamente
        let select = document.createElement('select')
        select.name = 'tab'
        select.id = 'tab'
        select.size = 11

        for (var i = 0; i <= 10; i++) {
            let x = num * i
            let option = document.createElement('option')
            option.text = `${num} x ${i} = ${x}`
            select.appendChild(option)

        }
        res.appendChild(select)
    }
}
