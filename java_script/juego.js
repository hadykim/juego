const WIDTH = 400;
const HEIGH = 400;

let tesoro = {
    x: getRandomNumber(WIDTH),
    y: getRandomNumber(HEIGH)
};

let $mapa = document.getElementById('imagen_mapa');
let $distancia = document.getElementById('distancia');
let clicks = 0;

$mapa.addEventListener('click', function (e) {
    clicks++;
    let distancia = getDistancia(e, tesoro);
    let distanciaPista = getDistanciaPista(distancia);
    $distancia.innerHTML = `<h1>${distanciaPista}</h1>`
    if(distancia < 20 ){
        alert (`FELICIDADES, ENCONTRASTE EL MAPA DE TESORO EN ${clicks} CLICKS`)
        location.reload();
    }
})



