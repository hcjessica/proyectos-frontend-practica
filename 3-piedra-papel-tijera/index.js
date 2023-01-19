function jugar(){
    window.location.href = "./seleccion.html";
}

function seleccion(seleccionUsuario){

    let opciones = ["piedra", "tijera", "papel"];

    let seleccionComputadora = opciones[Math.floor(Math.random() * 3)];
    console.log(seleccionComputadora);

    let computadoraTexto = document.getElementById("computadora");
    computadoraTexto.innerText = "Computadora: " + seleccionComputadora;

    let humanoTexto = document.getElementById("humano");
    humanoTexto.innerText = "Tú: " + seleccionUsuario;

    let resultado = 0;

    if(seleccionComputadora == "piedra"){
        resultado = llamarPiedra(seleccionUsuario);
    }else if(seleccionComputadora == "papel"){
        resultado = llamarPapel(seleccionUsuario);
    }else if(seleccionComputadora == "tijera"){
        resultado = llamarTijeras(seleccionUsuario);
    }

    let resultadoTexto = document.getElementById("resultado");

    switch(resultado){
        case 0://pierde
            resultadoTexto.innerText = "¡Perdiste!";
            resultadoTexto.style["color"] = "red";
            break;
        case 1://empate
            resultadoTexto.innerText = "¡Empataste!";
            resultadoTexto.style["color"] = "rgba(223, 190, 7, 0.822)";
            break;
        case 2://gana
            resultadoTexto.innerText = "¡Ganaste!";
            resultadoTexto.style["color"] = "green";
            break;
    }

    let contenedorA = document.getElementById("container-a");
    let contenedorB = document.getElementById("container-b");
    contenedorA.style["display"] = "none";
    contenedorB.style["display"] = "block";
}

function llamarPiedra(seleccionUsuario){
    let resultado = 0;
    if(seleccionUsuario == "papel"){
        resultado = 2;
    }else if(seleccionUsuario == "piedra"){
        resultado = 1;
    }else{//Tijera
        resultado = 0;
    }
    return resultado;
}

function llamarPapel(seleccionUsuario){
    let resultado = 0;
    if(seleccionUsuario == "papel"){
        resultado = 1;
    }else if(seleccionUsuario == "piedra"){
        resultado = 0;
    }else{//Tijera
        resultado = 2;
    }
    return resultado;
}

function llamarTijeras(seleccionUsuario){
    let resultado = 0;
    if(seleccionUsuario == "papel"){
        resultado = 0;
    }else if(seleccionUsuario == "piedra"){
        resultado = 2;
    }else{//Tijera
        resultado = 1;
    }
    return resultado;
}

function intentarNuevamente(){
    let contenedorA = document.getElementById("container-a");
    let contenedorB = document.getElementById("container-b");
    contenedorA.style["display"] = "block";
    contenedorB.style["display"] = "none";
}