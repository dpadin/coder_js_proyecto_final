//Calculador de materiales para la contruccion en seco
// calcula los materiales necesarios para construir una placa de Durlock 
// se ingresa ancho por alto de la pared y en base a una tabla y calculos
// se genera una lista de materiales necesarios.

//prentrega 1

// Crear un algoritmo con un condicional.
// Crear un algoritmo utilizando un ciclo.
// Armar un simulador interactivo.
// Recuerden que tendrán hasta 7 días para resolver la entrega y subirla

//prentrega 2- 10/03/24

// Objetivos específicos
// Capturar entradas mediante prompt().
// Declarar variables y objetos necesarios para simular el proceso seleccionado.
// Crear funciones y/o métodos para realizar operaciones (suma, resta, concatenación, división, porcentaje, etc).
// Efectuar una salida, que es el resultado de los datos procesados, la cual puede hacerse por alert() o console.log().
// Objetos. -- se creo el objeto "tabique"
// Arrays. -- se crea el array "pizas" para acumular los distintos tabiques
// Métodos de búsqueda y filtrado sobre el Array.-- se usa for each y for on 

//prentrega 3 - 17/10/2024

//se agrega carga de  datos_guardados. 

// Pagina nueva_cotizacion.html

//localstorage para recordar el usuario. 
// se agrega uso del DOM para entrada de datos
//DOM para agregar lineas en una tabla.
// se usan los elementos de bootstrap 
// se usan librerias para alerts y tostaditas de mensajes.
// se capturan eventos para agregar usuarios, tabiques y elementos a la tabla de 
// materiales.
//********IMPORTANTE**************
// desde index.html se redirige a la pagina "nueva_cotizacion.html"
// La presentacion de los calculos con DOM se terminara en la entrega final
// Por favor ignorar los elementos de index.html y main.js por el momento.

//Entrega Final
// correciones de la pre-entrega 3
// se Elimina la clase "usr " que no estaba en uso.
// Se usan objetos para cargar la tabla de materiales.
// Se agrupan las funciones en el archivo "funciones.js" para limpiar el 
//programa principal
//ahora, enlugar de trabajar sobre los textos en la tabla, se modifica el objeto
//en base al objeto "tabiques" se carga la tabla con lso items.

// Deberás entregar el simulador final funcionando, en un archivo HTML con sus archivos JS complementarios.
// Recuerda que cuentas con 10 días (de corrido) para subir tu Proyecto Final. Pasado este plazo, el botón de entrega se inhabilitará.

// Consigna

// Presentarás la página web interactiva en JavaScript que vienes trabajando
// a lo largo del curso. La misma debe simular distintos procesos. 
//Un “simulador” es un programa que soluciona ciertas tareas, y proporciona
// al usuario información de valor, de forma coherente y prolija. 
//Utilizarás AJAX y JSON para obtener datos y diversas herramientas de JS
// como librerías, promises y asincronía para controlar eventos en la 
//interfaz y producir animaciones en respuesta.


// JavaScript. Debe identificar el apellido del alumno/a en el nombre de 
// archivo comprimido por “ProyectoFinal+Apellido”


// Uso de fetach
const cotizaciones = []
let dolar_mep = ""
let label_dolar = document.querySelectorAll("h3")[1]

fetch("https://dolarapi.com/v1/dolares")
    .then(response => response.json())
    .then(data => label_dolar.innerHTML = data[2]["venta"]);






