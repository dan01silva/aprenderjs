function verifyIdade() {
    const dataValue = window.document.getElementById('dataNasc').value
    const sexo = document.querySelector('input[name="sexo"]:checked') // pegando o sexo
    //pego a data transformo em Date para comparar com Date Atual (zerando as h:m:s:mili)
    let [y, m, d] = dataValue.split('-')
    var dataNasc = new Date(y, m - 1, d);
    var agora = new Date().setHours(0, 0, 0, 0);

    if (dataValue == '') {
        console.log('ERROR: dataNasc is null')
        window.alert('Data de Nascimento Obrigatório');
    } else if (dataNasc >= agora) {
        console.log('ERROR: dataNasc is null')
        window.alert('Você ainda não nasceu');
    } else if (sexo == null) {
        console.log('SEXO NULL')
        window.alert(`ERROR: sexo is ${sexo}`)
    }
    else (getIdade())

    //console.log(dataNasc)
}

function getIdade() {

    //const dataValue = window.document.getElementById('dataNasc').value
    const hoje = new Date();
    let [y, m, d] = window.document.getElementById('dataNasc').value.split('-')

    var dataNasc = new Date(y, m - 1, d); // pro m começar em zero
    var anos = hoje.getFullYear() - dataNasc.getFullYear();
    var meses = hoje.getMonth() - dataNasc.getMonth();
    var dias = hoje.getDate() - dataNasc.getDate();

    // se dia < 0 subtrai dos dias do mes anterior e diminuit -1 month 
    if (dias < 0) {

        let diasLastMonth = new Date(2025, hoje.getMonth(), 0).getDate();
        console.log(`Dias negativo ${diasLastMonth}`)

        dias += diasLastMonth;
        meses -= 1;
    }

    // Se o mês for negativo, pega 1 ano de meses e tira um ano
    if (meses < 0) {

        meses += 12;
        anos -= 1;
    }

    let mostraIdade = window.document.getElementById('imagem')
    mostraIdade.innerText = `Idade detalhada: ${anos} anos, ${meses} meses e ${dias} dias`
    //console.log(`Sua diade é: ${anos} anos, ${meses} meses e ${dias} dias`);

    const img = window.document.getElementById('img');
    //console.log(img)

    let sexo = document.querySelector('input[name="sexo"]:checked').value

    //console.log(document.querySelector('input[name="sexo"]:checked').value)

    //window.document.getElementById('img').innerHTML = "<img src  = 'noite.jpg'>"


    let faixaEtaria = '';

    if (anos < 12) {
        faixaEtaria = 'crianca';
    } else if (anos < 30) {
        faixaEtaria = 'jovem';
    } else if (anos < 50) {
        faixaEtaria = 'adulto';
    } else {
        faixaEtaria = 'velho';
    }

    let prefixo = (sexo === 'male') ? 'h' : 'm';

    img.innerHTML = `<img src="image/${prefixo}_${faixaEtaria}.jpg" height="300px" width="500px" style="border-radius: 10px;">`;

}
