// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~ Ejemplo 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// // Declaramos una variable global
// // Sabemos que es global porque no esta dentro de ningun par de llaves
// let global = 'Soy una variable global y estoy en todos lados'


// {
//     console.log('%c\n\nEntrando a las llaves (local scope)\n\n', 'color:#F1EB90')
    
//     // Declaramos una variable local, sabemos que es local porque esta dentro de un par de llaves
//     let local = 'Soy una variable local, si me sacas de las llaves no existo 😞'
    
//     console.log(global)
//     console.log(local)
    
//     console.log('%c\n\nSaliendo a las llaves (local scope)\n\n', 'color:#F1EB90')
// }

// // Comprobamos si se pueden usar las variables fuera del scope anterior
// console.log(global)
// console.log(local)


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~ Ejemplo 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// // Que pasa con una funcion cuando usamos el mismo nombre de una variable global en un parametro?
// let saludo = 'Hola Rulo19, como va la vida?'
// saludar('Hola Rulo19, como esta el mejor usuario de github?')

// // Declaramos una funcion pero que tiene como parametro el mismo nombre que una variable global
// function saludar(saludo) {
//     console.log(saludo)
// }

// // Podemos comprobar que fuera de la funcion sigue siendo la misma variable
// console.log(saludo)



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~ Ejemplo 3 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// // ¿Que pasa si DECLARO una variable con el mismo nombre que una variable global dentro del scope?
// let global = 'Soy global muajaja'

// {
//     console.log('%c\n\nEntrando a las llaves (local scope)\n\n', 'color:#F1EB90')
    
//     let global = 'No soy global, pero la variable se llama global'
//     // Que mensaje aparece si hago un console.log de global?
//     console.log(global)


//     console.log('%c\n\nSaliendo a las llaves (local scope)\n\n', 'color:#F1EB90')
// }

// // Y que mensaje sale por fuera?
// console.log(global)


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~ Ejemplo 4 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// let base = 10
// let altura = 20
// let area

// function areaRectangulo(base, altura) {
//     let area = base*altura
//     console.log('El area del rectangulo de \nAltura:' + altura + '\nBase: ' + base + '\nEs -->' + area)
    
//     // Evaluar lo de abajo 👇👇👇👇
//     // area = area 
// }

// areaRectangulo()