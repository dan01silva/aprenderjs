
function getMomento() {

    var msg = window.document.getElementById('msg');

    const agora = new Date();
    const hora = agora.getHours();
    const min = agora.getMinutes();
    const sec = agora.getSeconds();
    const miliSec = agora.getMilliseconds();
    msg.innerHTML = `Agora são ${hora}:${min}:${sec}`;


}

function alteraFoto() {
    const agora = new Date(); 
    const hora = agora.getHours();

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




setInterval(() => {
    getMomento()
}, 1000);

//setInterval(alteraFoto(), 1000); // executa a cada 1 se

/*setTimeout(() =>{
    console.log('Timeout Definido')
}, 5000)
*/