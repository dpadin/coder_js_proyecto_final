function presenta_cotizacion(t) {
    // guarda la cotizacion en el localstorage 
    localStorage.setItem("cotizacion", JSON.stringify(t))

    // carga la pagina con la cotizacion total
    open("../pages/presenta_cotizacion.html")
}


function Prende_Apaga(elemento, visible) {
    // Esta funcion cambia la clase para ocultar/visibilizar 
    //Un componente
    if (visible) {
        elemento.classList.add("visible")
        elemento.classList.remove("invisible")
    } else {
        elemento.classList.add("invisible")
        elemento.classList.remove("visible")
    }
}
function buscar_datos_guardados() {
    //carga los usuarion guardados en el local storage
    usuarios_guardados = JSON.parse(localStorage.getItem("usuarios"))
    let mensaje = document.querySelector("h2")

    if (usuarios_guardados == null) {
        // No hay usuario en localstorage, limpia el form y pide data
        mensaje.innerText = "No hay usuarios Guardados localmente, por favor cargar nuevos datos"
        limpia_formulario()
    } else {
        // hay datos en localstorage

        Swal.fire({
            title: "Se encontro un usuario guardado",
            showDenyButton: true,
            confirmButtonText: "S!",

            denyButtonText: `No, cargo otro`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {

                let formulario = document.querySelector("form")
                formulario[0].value = usuarios_guardados.nombre
                formulario[1].value = usuarios_guardados.apellido
                formulario[2].value = usuarios_guardados.email

                mensaje.innerText = "Datos recuperados del local Storage"

                //Swal.fire("Saved!", "", "success");

            } else if (result.isDenied) {
                limpia_formulario()
                Swal.fire("Perfecto, cargue nuevos datos", "", "info");
            }

        })
    }
}


function limpia_formulario() {
    let formulario = document.querySelector("form")
    formulario[0].value = ""
    formulario[1].value = ""
    formulario[2].value = ""

}


class tabique {
    constructor(nombre, ancho, alto) {
        //esta clase se usa para crear un tabique
        //cantidad_placas,cantidad_soleras, cantidad_montantes, cantidad_tornillos_t1, cantidad_tornillos_t2, metros_cinta, kilos_masilla) {

        this.nombre = nombre
        this.ancho = ancho
        this.alto = alto
        //el resto de los parametros se calcula:
        let p = calcula_placas(ancho, alto)
        this.cantidad_placas = p

        this.cantidad_soleras = calcula_soleras(ancho, alto)
        this.cantidad_montantes = p * MONTANTE_POR_PLACA
        this.cantidad_tornillos_t1 = p * T1_POR_PLACA
        this.cantidad_tornillos_t2 = p * T2_POR_PLACA
        this.metros_cinta = Math.ceil(p * CINTA_POR_PLACA)
        this.kilos_masilla = p * MASILLA_POR_PLACA
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

function calcula_placas(f_ancho, f_alto) {
    // esta funcion calcula la cantidad de placas necesarias
    let superficie = f_ancho * f_alto

    return Math.ceil(superficie / M2_POR_PLACA)

}
function calcula_soleras(f_ancho, f_alto) {
    let perimetro = f_ancho * f_alto
    return Math.ceil(perimetro / LARGO_SOLERA)

}

function carga_tabla_tabiques(t) {
    // recibe un parametro "objeto" en "t" 
    // hay que inicializar la tabla

    let tabla_tabiques = document.querySelectorAll("tr")
    // me traigo todas las lineas de la tabla
    for (let i = 1; i <= tabla_tabiques.length - 1; i++) {
        //borro las lineas con datos.
        tabla_tabiques[i].remove()

    }


    t.forEach(tabique => {
        // por cada tabique, agrega una linea en la tabla
        tabla_tabiques = document.querySelector("table").appendChild(document.createElement("tr"))    //agrega una linea
        tabla_tabiques.classList.add("columna")
        tabla_tabiques.setAttribute("id", t.nombre)
        tabla_tabiques.appendChild(document.createElement("td")).appendChild(document.createTextNode(tabique.nombre))
        tabla_tabiques.appendChild(document.createElement("td")).appendChild(document.createTextNode(tabique.ancho))
        tabla_tabiques.appendChild(document.createElement("td")).appendChild(document.createTextNode(tabique.alto))

        const boton_eliminar = document.createElement("button")

        boton_eliminar.name = tabique.nombre   //le da el nombre del tabique para identificar
        boton_eliminar.innerText = "Eliminar"
        boton_eliminar.style.background = "red"
        boton_eliminar.style.color = "white"
        boton_eliminar.classList.add("btn-delete")

        tabla_tabiques.appendChild(document.createElement("td")).appendChild(boton_eliminar)


    })
    if (t.length == 0) {
        //tabla esta vacia, se borraron todos los elementos
        prende_apaga(boton_cotizar, false)
    }


}


function verifica_nombre_duplicado(tabiques, nombre) {
    //busca en el array que no se duplique el nombre del array
    let duplicado = false
    tabiques.forEach(tabique => {
        if (tabique.nombre == nombre) {
            duplicado = true
        }
    })
    return duplicado
}


