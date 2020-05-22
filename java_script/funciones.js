let getRandomNumber = size => {
    return Math.floor (Math.random() * size);
}

let getDistancia = (e, objetivo) => {
    let diffX = e.offsetX - objetivo.x;
    let diffY = e.offsetY - objetivo.y;
    return Math.sqrt((diffX*diffX) + (diffY+diffY));
}

let getDistanciaPista = distancia => {
    if (distancia < 30 ){
        return "Estas muy cerca!!!";
    }else if(distancia < 40){
        return "Estas casi cerca...";
    }else if(distancia < 60){
        return "Medio que te estas acercando...";
    }else if(distancia < 100){
        return "Mas o menos";
    }else if(distancia < 180){
        return "Estas Friiiioo";
    }else if(distancia < 360){
        return "Estas Muy Alejado";
    }else{
        return "Estas demasiado alejado!";
    }
}