
function verifyIdade() {

    const dataNasc = window.document.getElementById('dataNasc')
    console.log(dataNasc.value)

}

function alteraFoto() {
    

    const img = window.document.getElementById('imagem');
    console.log(img)

    if (hora >= 0 && hora < 12) {
        img.src = 'manha.jpg';
        console.log(img.src + ' esta img foi executada');
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.jpg';
        console.log(img.src + ' esta img foi executada');
    } else {
        //window.document.getElementById('img').innerHTML = "<img src  = 'noite.jpg'>"
        img.src = 'noite.jpg'
        console.log(img.src + ' esta img foi executada');
    }
}