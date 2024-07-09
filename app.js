/*
let titulo = document.querySelector('h1');
titulo.innerHTML = ' Juego del número secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Escoge un número del 1 al 10' 
*/
//let numeroSecreto = generarNumeroSecreto();
let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;  //finalizar las funciones con return; es una buena practica
}   

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); //capturamos el valor que ingresa el usuario en el codigo html (input)
    console.log(intentos);
    if(numeroDeUsuario===numeroSecreto){ //=== debe ser igual en valor y tipo de dato
        asignarTextoElemento('p',`Acertaste en ${intentos} ${(intentos==1 ? 'vez':'veces')}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.querySelector('#intentar').setAttribute('disabled', 'true');
    }else if (numeroDeUsuario > numeroSecreto){
        asignarTextoElemento('p','El número secreto es menor');
    }else{
        asignarTextoElemento('p','El número secreto es mayor');
    }
    intentos++;
    limpiarCaja();
    return;
}

function limpiarCaja(){
   /*
   let valorCaja = document.querySelector('#valorUsuario');
   valorCaja.value = ''
   */
   document.querySelector('#valorUsuario').value = '';
   return;
}

function generarNumeroSecreto() {
    //let numeroSecreto = Math.floor(Math.random()*10)+1;
    //return numeroSecreto;
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //Ver si sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo){
    asignarTextoElemento('p', 'Ya se sortearon todos los números')        

    }else{ 
        //Si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto(); //volvemos a llamar a la misma función generando una recursividad
        }else
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}   

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Escoge un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    document.getElementById('intentar').removeAttribute('disabled');
}
/*
asignarTextoElemento('h1','Juego del número secreto!');
asignarTextoElemento('p','Escoge un número del 1 al 10');
*/

function reiniciarJuego(){
    //Necesitamos limpiar la caja 
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();