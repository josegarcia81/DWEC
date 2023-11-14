'use strict'

console.log('Empieza el programa')

// ------------------- VARIABLES GLOBALES ------------------------
// Importar clase para objeto Socio
import {Socio} from "../../model/Socio.js"
// capturamos el formulario de introduccion de socios - Ejercicio 1
const formulario = document.querySelector('#formNombre') /*.querySelectorAll*/

// capturamos el contenedor donde escribiremos los socios - Ejercicio 2
const contenedorEscribirSocios = document.getElementById('contenedorPintarSocios')

// Variable para el array de socios
var arraySocios = [] // Registrar en el inicio

// ------------------- MAIN ------------------------

// TODO: añadimos los socios iniciales cuando empieza el programa

// TODO: array para añadir los socios
cargarSociosJSON()
console.log(arraySocios)

// ------------------- FUNCIONES ------------------------

// EJERCICIO 1

/*
  funcion para leer del JSON
*/
function cargarSociosJSON () {
  let path = '../model/datosSocios.json'

  let request = new Request(path, {headers: new Headers({'Content-Type': 'text/json'}),method: 'GET'})

  fetch(request).then(response => {
    response.json().then(data => 
      {
        //console.log('Datos', data)
        /*
        console.log( data[0].id)
        console.log( data[0].nombre)
        console.log( data[0].apellido)
        */
        aniadirSociosInicialesArray(data)
      })
    })
  
  
}

/* 
TODO:  metodo para añadir socios al array 
    cuando arranca la pagina web
*/
function aniadirSociosInicialesArray (data) {
  //  TODO: cargar el fichero JSON, parsearlo a objetos tipo "socio" y añadirlos al array
  //var objetoParseado = JSON.parse(data)
  var datos = data
  var array = []
  console.log(array)
  console.log('Datos', data)
  console.log(data.length)

  for(let i=0; i <= data.length; i++){
    //var nuevaId = crearID()
    
    var id = data[i].id
    var nombre = data[i].nombre
    var apellido = data[i].apellido

    var socio = new Socio(id,nombre,apellido)

    arraySocios.push(socio)
    //console.log(arraySocios)
    /*
    console.log( typeof id)
    console.log( typeof nombre)
    console.log( typeof apellido)
    */
    /*
    var socio = new Socio(id, nombre, apellido)
    console.log( typeof socio)
    arraySocios.push(socio)
    */
  }
  console.log(arraySocios)
}

/*
    TODO: Meotodo para capturar los datos del socio introducido en el formulario

*/
function capturarDatosSocio () {
  // TODO: recoger el nombre y apellido del HTML
  // TODO: crear el socio y añadirlo al array
  var nombre = document.getElementById(id ,'fnombre').value
  var apellido = document.getElementById(id , 'fapellido').value
  crearSocio(nombre, apellido)
  //arraySocios.push(socio)
  
}

/* 
TODO: 
    Metodo para crear un socio pasandole el nombre y el apellido
    y añadirlo al array
 */
function crearSocio (nombre, apellido) { //recibir array para mandar a crearId? Crear classe
  // TODO: crear objeto socio
  // TODO: añadir el objeto al array
  var nuevaId = crearID(arraySocios.length)

  var socio = new Socio(nuevaId, nombre, apellido)
  arraySocios.push(socio)
  console.log(arraySocios)

  //return socio
  
}

/*
TODO: 
    Metodo para crear el ID del socio en funcion del ultimo
    ID que hay en el array de socios
*/
function crearID () {
  // TODO: mirar el id del ultimo socio del array y sumarle uno
  var nuevaId = arraySocios.length + 1
  return nuevaId
}

// EJERCICIO 2

/*
  TODO: metodo que elimina la lista previamente pintada en el contenedor asignado 
  para pintar socios, recorre el array con un bucle y pinta los socios 
*/
function pintarListaSocios () {
  //TODO: borramos todo lo que hay en el div
  //TODO: bucle para recorrer y pintar el array de socios
  //TODO: debemos añadir los socios a la pagina web
}


console.log('Acaba el programa')
