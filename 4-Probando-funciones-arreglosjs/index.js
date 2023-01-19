let arregloa =  [2, 9, 8, 7, 10, 5];    
let arreglob =  [20, 11, 6, 3, 4, 12];    

function push(){
    let valor =  document.getElementById("txt-valorpush").value;
    if(valor != ""){
        arregloa.push(isNaN(parseInt(valor)) ? valor: parseInt(valor));
        document.getElementById("txt-valorpush").value = "";
        let resultado =  document.getElementById("resultado-push");
        resultado.innerText = "El arreglo tiene ahora los siguientes elementos: " + arregloa;
    }else{
        alert("Debe brindar un valor");
    }
}

function pop(){ 
    arregloa.pop();
    let resultado =  document.getElementById("resultado-pop");
    resultado.innerText = "El arreglo tiene ahora los siguientes elementos: " + arregloa;
}

function unshift(){
    let valor =  document.getElementById("txt-valorunshift").value;
    if(valor != ""){
        arreglob.unshift(isNaN(parseInt(valor)) ? valor: parseInt(valor));
        document.getElementById("txt-valorunshift").value = "";
        let resultado =  document.getElementById("resultado-unshift");
        resultado.innerText = "El arreglo tiene ahora los siguientes elementos: " + arreglob;
    }else{
        alert("Debe brindar un valor");
    }
}

function shift(){ 
    arreglob.shift();
    let resultado =  document.getElementById("resultado-shift");
    resultado.innerText = "El arreglo tiene ahora los siguientes elementos: " + arreglob;
}

function indexof(){
    let valor =  document.getElementById("txt-valorindexof").value;
    if(valor != ""){
        let posicion = arreglob.indexOf(isNaN(parseInt(valor)) ? valor: parseInt(valor));
        document.getElementById("txt-valorindexof").value = "";
        let resultado =  document.getElementById("resultado-indexof");
        resultado.innerText = "El elemento está en la posición: " + posicion;
    }else{
        alert("Debe brindar un valor");
    }
}

function lastindexof(){
    let valor =  document.getElementById("txt-valorlastindexof").value;
    if(valor != ""){
        let posicion = arreglob.lastIndexOf(isNaN(parseInt(valor)) ? valor: parseInt(valor));
        document.getElementById("txt-valorlastindexof").value = "";
        let resultado =  document.getElementById("resultado-lastindexof");
        resultado.innerText = "El elemento está en la posición: " + posicion;
    }else{
        alert("Debe brindar un valor");
    }
}

function sort(){ 
    arregloa.sort();
    let resultado =  document.getElementById("resultado-sort");
    resultado.innerText = "El arreglo ordenado con sort: " + arregloa;
}

function reverse(){ 
    arregloa.reverse();
    let resultado =  document.getElementById("resultado-reverse");
    resultado.innerText = "El arreglo ordenado con reverse: " + arregloa;
}

function concat(){ 
    let arregloc = arregloa.concat(arreglob);
    let resultado =  document.getElementById("resultado-concat");
    resultado.innerText = "El nuevo arreglo concatenado es: " + arregloc;
}

function slice(){
    let valor1 =  document.getElementById("txt-valorslice1").value;
    let valor2 =  document.getElementById("txt-valorslice2").value;

    isNaN(parseInt(valor1)) ? alert("Ingrese un número entero"): '';
    isNaN(parseInt(valor2)) ? alert("Ingrese un número entero"): '';

    if(valor1 != "" && valor2 != ""){
        let elementosSeleccionados = arreglob.slice(parseInt(valor1), parseInt(valor2));
        document.getElementById("txt-valorslice1").value = "";
        document.getElementById("txt-valorslice2").value = "";
        let resultado =  document.getElementById("resultado-slice");
        resultado.innerText = "Los elementos seleccionados del arreglo B son: " + elementosSeleccionados;
    }else{
        alert("Debe brindar los valores");
    }    

}

function join(){ 
    let valor =  document.getElementById("txt-valorjoin").value;
    if(valor != ""){
        let cadena = arreglob.join(valor);
        document.getElementById("txt-valorjoin").value = "";
        let resultado =  document.getElementById("resultado-join");
        resultado.innerText = "El arreglo concatenado es: " + cadena;
    }else{
        alert("Debe brindar un valor");
    }
}

function spliceEliminar(){
    let valor1 =  document.getElementById("txt-valorsplice1").value;
    let valor2 =  document.getElementById("txt-valorsplice2").value;

    isNaN(parseInt(valor1)) ? alert("Ingrese un número entero"): '';
    isNaN(parseInt(valor2)) ? alert("Ingrese un número entero"): '';

    if(valor1 != "" && valor2 != ""){
        arregloa.splice(parseInt(valor1), parseInt(valor2));
        document.getElementById("txt-valorsplice1").value = "";
        document.getElementById("txt-valorsplice2").value = "";
        let resultado =  document.getElementById("resultado-splice1");
        resultado.innerText = "El arreglo A ahora tiene los siguientes elementos: " + arregloa;
    }else{
        alert("Debe brindar los valores");
    }    
}

function spliceEditar(){
    let valor1 =  document.getElementById("txt-valorsplice4").value;
    let valor2 =  document.getElementById("txt-valorsplice5").value;
    let valor3 =  document.getElementById("txt-valorsplice6").value;

    isNaN(parseInt(valor1)) ? alert("Ingrese un número entero"): '';
    isNaN(parseInt(valor2)) ? alert("Ingrese un número entero"): '';

    if(valor1 != "" && valor2 != "" && valor3 != ""){
        arregloa.splice(parseInt(valor1), parseInt(valor2), isNaN(parseInt(valor3)) ? valor3: parseInt(valor3));
        document.getElementById("txt-valorsplice4").value = "";
        document.getElementById("txt-valorsplice5").value = "";
        document.getElementById("txt-valorsplice6").value = "";
        let resultado =  document.getElementById("resultado-splice2");
        resultado.innerText = "El arreglo A ahora tiene los siguientes elementos: " + arregloa;
    }else{
        alert("Debe brindar los valores");
    }    
}

