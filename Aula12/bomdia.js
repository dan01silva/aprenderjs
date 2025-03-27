const agora = new Date();
const horas = agora.getHours();
const minutos = agora.getMinutes();
const segundos = agora.getSeconds();


const  ano = agora.setFullYear('2024')

console.log(ano)



const utcH = agora.getUTCHours();
const utcMin = agora.getUTCMinutes()
const utcSec = agora.getUTCSeconds()

console.log(`Hora atual: ${horas}:${minutos}:${segundos}`);


console.log(`Hora UTC atual: ${utcH}:${utcMin}:${utcSec}`);

