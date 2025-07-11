function getTabuada() {
    let num = Number(window.document.getElementById('numero').value)
    let res = window.document.getElementById('res')
    let tab = window.document.getElementById('tab')

    res.innerHTML = 'Tente novamente'

    res.innerHTML = `Tabueida do <strong>${num}</>: <br>`
    for (var i = 0; i <= 10; i++) {
        x = num * i

        res.innerHTML += `${num} x ${i}: ${x} <br>`
    }


}
