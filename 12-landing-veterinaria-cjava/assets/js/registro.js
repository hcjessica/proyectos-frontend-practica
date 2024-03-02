let contadorInformacion = 0;
function validarInformacion(){
    let nombrecompleto = document.getElementById("nombrecompleto").value;
    let correo = document.getElementById("correo").value;
    let telefono = document.getElementById("telefono").value;

    let nombremascota1 = document.getElementById("nombremascota1").value;
    let razamascota1 = document.getElementById("razamascota1").value;
    let edad1 = document.getElementById("edad1").value;
    let nombremascota2 = document.getElementById("nombremascota2").value;
    let razamascota2 = document.getElementById("razamascota2").value;
    let edad2 = document.getElementById("edad2").value;
    let nombremascota3 = document.getElementById("nombremascota3").value;
    let razamascota3 = document.getElementById("razamascota3").value;
    let edad3 = document.getElementById("edad3").value;

    let mensajealerta = document.getElementById("mensajealerta");
    mensajealerta.style.color = "#ff2d2d";
    let respuesta = false;

    if(nombrecompleto == ""){
        console.log("Nombre completo inválido, debe completar el campo");
        mensajealerta.innerHTML = "Nombre completo inválido, debe completar el campo";
    }else if(correo == ""){
        console.log("Correo electrónico inválido, debe completar el campo");
        mensajealerta.innerHTML = "Correo electrónico inválido, debe completar el campo";
    }else if(!(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i).test(correo)){
        console.log("Correo electrónico inválido, debe ingresar un correo");
        mensajealerta.innerHTML = "Correo electrónico inválido, debe ingresar un correo";
    }else if(!(/^[0-9]{9}$/).test(telefono)){
        console.log("Teléfono inválido, debe ingresar 9 dígitos numéricos");
        mensajealerta.innerHTML = "Teléfono inválido, debe ingresar 9 dígitos numéricos";
    }else if(nombremascota1 == "" && razamascota1 == "" && edad1 == ""){
        console.log("Debe ingresar los datos de al menos 1 mascota");
        mensajealerta.innerHTML = "Debe ingresar los datos de al menos 1 mascota";
        document.getElementById("nombremascota1").focus();
    }else if(edad1 != "" && !(/^[0-9]$/).test(parseInt(edad1))){
        console.log("Edad inválida, la edad de la mascota debe ser un número");
        mensajealerta.innerHTML = "Edad inválida, la edad de la mascota debe ser un número";
        document.getElementById("edad1").focus();
    }else if(edad2 != "" && !(/^[0-9]$/).test(parseInt(edad2))){
        console.log("Edad inválida, la edad de la mascota debe ser un número");
        mensajealerta.innerHTML = "Edad inválida, la edad de la mascota debe ser un número";
        document.getElementById("edad2").focus();
    }else if(edad3 != "" && !(/^[0-9]$/).test(parseInt(edad3))){
        console.log("Edad inválida, la edad de la mascota debe ser un número");
        mensajealerta.innerHTML = "Edad inválida, la edad de la mascota debe ser un número";
        document.getElementById("edad3").focus();
    }else{
        respuesta = true;
        mensajealerta.innerHTML = "";
    }
    return respuesta;
}
function guardarInformacion(){
    if(validarInformacion()){
        let nombrecompleto = document.getElementById("nombrecompleto").value;
        let correo = document.getElementById("correo").value;
        let telefono = document.getElementById("telefono").value;

        let nombremascota1 = document.getElementById("nombremascota1").value;
        let razamascota1 = document.getElementById("razamascota1").value;
        let edad1 = document.getElementById("edad1").value;
        let nombremascota2 = document.getElementById("nombremascota2").value;
        let razamascota2 = document.getElementById("razamascota2").value;
        let edad2 = document.getElementById("edad2").value;
        let nombremascota3 = document.getElementById("nombremascota3").value;
        let razamascota3 = document.getElementById("razamascota3").value;
        let edad3 = document.getElementById("edad3").value;

        let mensajealerta = document.getElementById("mensajealerta");
        mensajealerta.style.color = "#19834e";
        mensajealerta.innerHTML = "Se guardó exitosamente";
        let tablainformacion = document.getElementById("tablainformacion");
        tablainformacion.removeAttribute = "hidden";
        let fila = tablainformacion.insertRow(1);
        let celda1 = fila.insertCell(0);
        let celda2 = fila.insertCell(1);
        let celda3 = fila.insertCell(2);
        let celda4 = fila.insertCell(3);
        let celda5 = fila.insertCell(4);
        let celda6 = fila.insertCell(5);
        let celda7 = fila.insertCell(6);
        let celda8 = fila.insertCell(7);
        let celda9 = fila.insertCell(8);
        let celda10 = fila.insertCell(9);
        let celda11 = fila.insertCell(10);
        let celda12 = fila.insertCell(11);
        let celda13 = fila.insertCell(12);
        let celda14 = fila.insertCell(13);
        let celda15 = fila.insertCell(14);
        let celda16 = fila.insertCell(15);

        let informacion = {
            id: ++contadorInformacion,
            nombrecompleto: nombrecompleto.toUpperCase(),
            correo: correo,
            telefono: telefono,
            mascotas: [
                {
                    id: 1,
                    nombremascota: nombremascota1,
                    razamascota: razamascota1,
                    edad: parseInt(edad1),
                },
                {
                    id: 2,
                    nombremascota: nombremascota2,
                    razamascota: razamascota2,
                    edad: parseInt(edad2),
                },
                {
                    id: 3,
                    nombremascota: nombremascota3,
                    razamascota: razamascota3,
                    edad: parseInt(edad3),
                }
            ]
        }
        json = JSON.stringify(informacion);

        celda1.innerHTML = json.id;
        celda2.innerHTML = json.nombrecompleto;
        celda3.innerHTML = json.correo;
        celda4.innerHTML = json.telefono;
        let mascotas = json.mascotas;
        celda5.innerHTML = mascotas[0].id;
        celda6.innerHTML = mascotas[0].nombremascota;
        celda7.innerHTML = mascotas[0].razamascota;
        celda8.innerHTML = mascotas[0].edad;
        celda9.innerHTML = mascotas[1].id;
        celda10.innerHTML = mascotas[1].nombremascota;
        celda11.innerHTML = mascotas[1].razamascota;
        celda12.innerHTML = mascotas[1].edad;
        celda13.innerHTML = mascotas[2].id;
        celda14.innerHTML = mascotas[2].nombremascota;
        celda15.innerHTML = mascotas[2].razamascota;
        celda16.innerHTML = mascotas[2].edad;
    }
}
function limpiarCliente(){
    document.getElementById("nombrecompleto").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("nombremascota1").value = "";
    document.getElementById("razamascota1").value = "";
    document.getElementById("edad1").value = "";
    document.getElementById("nombremascota2").value = "";
    document.getElementById("razamascota2").value = "";
    document.getElementById("edad2").value = "";
    document.getElementById("nombremascota3").value = "";
    document.getElementById("razamascota3").value = "";
    document.getElementById("edad3").value = "";

    let mensajealerta = document.getElementById("mensajealerta");
    mensajealerta.setAttribute = "hidden";
}