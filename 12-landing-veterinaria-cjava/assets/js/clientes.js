let contadorCliente = 0;
function validarCliente(){
    let dni = document.getElementById("dni").value;
    let nombrecompleto = document.getElementById("nombrecompleto").value;
    let correo = document.getElementById("correo").value;
    let mensajealerta = document.getElementById("mensajealerta");
    mensajealerta.style.color = "#ff2d2d";
    let respuesta = false;

    if(!(/^[0-9]{8}$/).test(parseInt(dni))){
        console.log("DNI inválido, debe ingresar 8 dígitos numéricos");
        mensajealerta.innerHTML = "DNI inválido, debe ingresar 8 dígitos numéricos";
    }else if(nombrecompleto == ""){
        console.log("Nombre completo inválido, debe completar el campo");
        mensajealerta.innerHTML = "Nombre completo inválido, debe completar el campo";
    }else if(correo == ""){
        console.log("Correo electrónico inválido, debe completar el campo");
        mensajealerta.innerHTML = "Correo electrónico inválido, debe completar el campo";
    }else if(!(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i).test(correo)){
        console.log("Correo electrónico inválido, debe ingresar un correo");
        mensajealerta.innerHTML = "Correo electrónico inválido, debe ingresar un correo";
    }else{
        respuesta = true;
        mensajealerta.innerHTML = "";
    }
    return respuesta;
}
function guardarCliente(){
    if(validarCliente()){
        let dni = document.getElementById("dni").value;
        let nombrecompleto = document.getElementById("nombrecompleto").value;
        let correo = document.getElementById("correo").value;
        let mensajealerta = document.getElementById("mensajealerta");
        mensajealerta.style.color = "#19834e";
        mensajealerta.innerHTML = "Se guardó exitosamente";
        let tablacliente = document.getElementById("tablacliente");
        tablacliente.style.visibility = "visible";
        let fila = tablacliente.insertRow(1);
        let celda1 = fila.insertCell(0);
        let celda2 = fila.insertCell(1);
        let celda3 = fila.insertCell(2);
        let celda4 = fila.insertCell(3);

        let cliente = {
            id: ++contadorCliente,
            dni: parseInt(dni),
            nombrecompleto: nombrecompleto.toUpperCase(),
            correo: correo,
        }
        json = JSON.stringify(cliente);

        celda1.innerHTML = cliente.id;
        celda2.innerHTML = cliente.dni;
        celda3.innerHTML = cliente.nombrecompleto;
        celda4.innerHTML = cliente.correo;
    }
}
function limpiarCliente(){
    document.getElementById("dni").value = "";
    document.getElementById("nombrecompleto").value = "";
    document.getElementById("correo").value = "";
    let mensajealerta = document.getElementById("mensajealerta");
    mensajealerta.style.visibility = "hidden";
}