//Calculador de materiales para la contruccion en seco
// calcula los materiales necesarios para construir una placa de Durlock 
// se ingresa ancho por alto de la pared y en base a una tabla y calculos
// se genera una lista de materiales necesarios.

//prentrega 1

// Crear un algoritmo con un condicional.
// Crear un algoritmo utilizando un ciclo.
// Armar un simulador interactivo.
// Recuerden que tendrán hasta 7 días para resolver la entrega y subirla


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
// inicializa constantes
const MONTANTE_POR_PLACA = 3
const M2_POR_PLACA = 2.88
const T2_POR_PLACA = 24
const T1_POR_PLACA = 10
const CINTA_POR_PLACA = 9.2
const MASILLA_POR_PLACA = 0.5
const LARGO_SOLERA = 2.6

while (!salir){                                                     //Algoritmo con un ciclo
        //Ingreso de datos del usuario
            ancho = Number(prompt("Ingrese Ancho de la Pared"))
            alto = Number(prompt("Ingrese Alto de la Pared"))

    if  (ancho!=0 && alto!= 0 && !isNaN (ancho) && !isNaN(alto)  ){     // algoritmo con condicional
        // hace el calculo
                cantidad_placas = calcula_placas(ancho,alto)
                cantidad_soleras = calcula_soleras(ancho,alto)
                cantidad_montantes = cantidad_placas * MONTANTE_POR_PLACA
                cantidad_tornillos_t2 = cantidad_placas * T2_POR_PLACA
                cantidad_tornillos_t1 = cantidad_placas * T1_POR_PLACA
                metros_cinta = Math.ceil(cantidad_placas * CINTA_POR_PLACA)
                kilos_masilla = cantidad_placas * MASILLA_POR_PLACA



                let mensaje= "Cantidad de placas necesarias: " + cantidad_placas + "\n"

                mensaje = mensaje + "Soleras necesarias: " + cantidad_soleras + "\n"
                mensaje = mensaje + "Montantes necesarias: " + cantidad_montantes + "\n"
                mensaje = mensaje + "Tornillos T2 necesarios: " + cantidad_tornillos_t2  + "\n"
                mensaje = mensaje + "Tornillos T1 necesarios: " + cantidad_tornillos_t1  + "\n"
                mensaje = mensaje +  "Metros de cinta necesaria: " + metros_cinta   + "\n"
                mensaje = mensaje +  "Kilos de Masilla: " + kilos_masilla + "\n"

                alert (mensaje)


                salir=confirm ("Desea Salir?")

        
}else{
    alert ("por favor ingrese datos validos!")
}
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

