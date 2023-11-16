'use strict'

console.log('Empieza el programa')

// ------------------- VARIABLES GLOBALES ------------------------

// capturamos el formulario de introduccion de socios - Ejercicio 1
const formulario = document.querySelector('#formNombre')
// capturamos el contenedor donde escribiremos los socios - Ejercicio 2
const contenedorEscribirSocios = document.getElementById('contenedorPintarSocios')

// Variable para el array de socios
var arraySocios = []

// ------------------- MAIN ------------------------

// TODO: añadimos los socios iniciales cuando empieza el programa
// TODO: array para añadir los socios
cargarSociosJSON()

// ------------------- FUNCIONES ------------------------

//  EJERCICIO 1  //

/*
  funcion para leer del JSON
*/
function cargarSociosJSON () {
  let path = '../model/datosSocios.json'

  let request = new Request(path, {headers: new Headers({'Content-Type': 'text/json'}),method: 'GET'})

  fetch(request).then(response => {
    response.json().then(data => 
      {
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
  
  for(let i=0; i <= data.length; i++){
    var nombre = data[i].nombre
    var apellido = data[i].apellido
    crearSocio(nombre,apellido)
  }
}

/* 
TODO: 
    Metodo para crear un socio pasandole el nombre y el apellido
    y añadirlo al array
 */
function crearSocio (nombre, apellido) {
  // TODO: crear objeto socio
  // TODO: añadir el objeto al array
  var nuevaId = crearID()

  var socio = {
    id: nuevaId,
    nombre: nombre,
    apellido: apellido,
  };
  
  arraySocios.push(socio)
  
}
    
/*
TODO: 
    Metodo para crear el ID del socio en funcion del ultimo
    ID que hay en el array de socios
*/
function crearID () {
  // TODO: mirar el id del ultimo socio del array y sumarle uno
  return arraySocios.length + 1
}

/*
    TODO: Meotodo para capturar los datos del socio introducido en el formulario

*/
function capturarDatosSocio () {
  // TODO: recoger el nombre y apellido del HTML
  // TODO: crear el socio y añadirlo al array
  var nombreFormulario = formulario.querySelector('#fnombre').value
  var apellidoFormulario = formulario.querySelector('#fapellido').value
  //   Mejora que alerta de no recoger dato vacio   //
  if(nombreFormulario != "" & apellidoFormulario != ""){                         
    crearSocio(nombreFormulario, apellidoFormulario)
  } else {
    alert("Introduzca Nombre y Apellido del socio")
  }
}

//  EJERCICIO 2 //

/*
  TODO: metodo que elimina la lista previamente pintada en el contenedor asignado 
  para pintar socios, recorre el array con un bucle y pinta los socios 
*/
function pintarListaSocios () {
  //TODO: borramos todo lo que hay en el div
  //TODO: bucle para recorrer y pintar el array de socios
  //TODO: debemos añadir los socios a la pagina web
  contenedorEscribirSocios.innerHTML = ""
  var texto2 = ""

  for(let i = 0; i < arraySocios.length; i++){
    var texto = ""
    var num = arraySocios[i].id
    var nom = arraySocios[i].nombre
    var ape = arraySocios[i].apellido
    texto = "</br>Socio numero " + num + ": " + nom + " " +  ape + "</br>"
    texto2 += texto
  }
  contenedorEscribirSocios.innerHTML = texto2
}

console.log('Acaba el programa')