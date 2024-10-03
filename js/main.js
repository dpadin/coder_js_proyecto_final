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




// inicializa variables
let salir = false               // variable de salida del ciclo
let ancho =0    
let alto = 0
let cantidad_placas = 0
let cantidad_soleras = 0
let cantidad_montantes = 0
let cantidad_tornillos_t1 = 0
let cantidad_tornillos_t2 = 0
let metros_cinta = 0
let kilos_masilla = 0
let cantidad_tabiques = 0
let nombre_tabique =""      // se usa para poner un nombre descriptivo al tabique
let piezas = []     //este es un array de objetos clase tabique. se usa para hacer una lista de materiales de varias paredes.


// la clase tabique se usa para crear un nuevo tabique con todos sus componentes
class tabique {
constructor(nombre, cantidad_placas,cantidad_soleras, cantidad_montantes, cantidad_tornillos_t1, cantidad_tornillos_t2, metros_cinta, kilos_masilla) {
    
    this.nombre = nombre
    this.cantidad_placas = cantidad_placas
    this.cantidad_soleras =cantidad_soleras
    this.cantidad_montantes =cantidad_montantes
    this.cantidad_tornillos_t1= cantidad_tornillos_t1
    this.cantidad_tornillos_t2=cantidad_tornillos_t2
    this.metros_cinta=metros_cinta
    this.kilos_masilla=kilos_masilla
 
}
}
// inicializa constantes
const MONTANTE_POR_PLACA = 3
const M2_POR_PLACA = 2.88
const T2_POR_PLACA = 24
const T1_POR_PLACA = 10
const CINTA_POR_PLACA = 9.2
const MASILLA_POR_PLACA = 0.5
const LARGO_SOLERA = 2.6


while (!salir){                                                     //Algoritmo con un ciclo
        
    cantidad_tabiques = Number(prompt("Ingrese la cantidad de tabiques a cotizar"))
    //Ingreso de datos del usuario

    for (let j=1;j<=cantidad_tabiques;j++){            // recorre la cantidad de tabiques pedidos
            nombre_tabique =prompt ("Ingrese un nombre descriptivo para el tabique #" + j) 
            ancho = Number(prompt("Ingrese Ancho de la Pared  #: " + j + " (en metros)"))
            alto = Number(prompt("Ingrese Alto de la Pared   #: " + j + "  (en metros)"))

    if  (nombre_tabique!= "" && ancho!=0 && alto!= 0 && !isNaN (ancho) && !isNaN(alto)  ){     // algoritmo con condicional
        
               
        // hace el calculo
                cantidad_placas = calcula_placas(ancho,alto)
                cantidad_soleras = calcula_soleras(ancho,alto)
                cantidad_montantes = cantidad_placas * MONTANTE_POR_PLACA
                cantidad_tornillos_t2 = cantidad_placas * T2_POR_PLACA
                cantidad_tornillos_t1 = cantidad_placas * T1_POR_PLACA
                metros_cinta = Math.ceil(cantidad_placas * CINTA_POR_PLACA)
                kilos_masilla = cantidad_placas * MASILLA_POR_PLACA
        // crea un objeto tabique nuevo
                let t = new tabique(nombre_tabique, cantidad_placas,cantidad_soleras,cantidad_montantes, cantidad_tornillos_t1, cantidad_tornillos_t2, metros_cinta,kilos_masilla)
                piezas.push(t)

}else{
    alert ("por favor ingrese datos validos!")
}
}
console.log(mustra_piezas  (piezas)) //  muestra el array de objetos creados

salir = confirm ("resultados enviados a la consola....Desea salir?")

}


console.log("Fin del programa")


function calcula_placas (f_ancho,f_alto){
    // esta funcion calcula la cantidad de placas necesarias
    let superficie = f_ancho * f_alto

    return Math.ceil(superficie / M2_POR_PLACA)

}
function calcula_soleras (f_ancho,f_alto){
    let perimetro = f_ancho * f_alto
    return Math.ceil(perimetro/LARGO_SOLERA)

}

function mustra_piezas(array_piezas){
//esta funcion crea un texto tipo reporte con las cantidades de materiales
//la info viene en un array de objetos y se recorre para ver los valores
// retorna el texto listo para ser expuesto

    let mensaje= ""

    for (let pieza of array_piezas) {
            mensaje =  mensaje + "la pieza :  " + pieza.nombre + "  lleva los siguientes materiales: \n\n"
                        
            for (p in pieza){
                mensaje = mensaje + p + " : " + pieza [p]    + "\n"
            }
                mensaje = mensaje + "\n"

    }
            
return mensaje

    }

 