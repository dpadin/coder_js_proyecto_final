
// oculta las secciones de carga hasta que se cargue el usuario
const seccion_carga_tabiques = document.querySelectorAll("div")[8]
const seccion_lista_tabiques = document.querySelectorAll("div")[14]
const boton_cotizar = document.querySelector(".btn_cotizar")
Prende_Apaga(seccion_carga_tabiques, false)
Prende_Apaga(seccion_lista_tabiques, false)
Prende_Apaga(boton_cotizar, false)

//busca datos de un usurario en el localstorage
if (buscar_datos_guardados()) {
    Swal.fire({
        title: "Se encontro un usuario guardado",
        text: "re-usa los daots?",
        icon: "question"
    });

}
class usr {         //  construye el usuario

    constructor(nombre, apellido, email) {
        this.nombre = nombre
        this.apellido = apellido
        this.email = email
    }
}


//pagina de carga de datos de usuario
let formulario = document.querySelector("form")
formulario.addEventListener("submit", (event) => {
    event.preventDefault()
    captura_evento = event.submitter.innerText


    if (captura_evento == "Enviar") {
        //carga nuevos datos
        let nombre = formulario[0].value
        let apellido = formulario[1].value
        let email = formulario[2].value
        if (nombre.length == 0 || apellido.length == 0 || email.length == 0) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Cargue todos los campos!",

            });
        } else {
            //gurada el nuevo usuario en localstorage

            let usuario = new usr(nombre, apellido, email)
            localStorage.setItem("usuarios", JSON.stringify(usuario))

            Toastify({
                text: "Usuario cargado!",
                duration: 3000
            }).showToast();
            // habilita la carga de los tabiques
            Prende_Apaga(seccion_carga_tabiques, true)
        }

    }
})


//carga de tabiqes

let form_tabiques = document.querySelectorAll("form")
let tabiques = []


form_tabiques[1].addEventListener("submit", (event) => {
    event.preventDefault()
    let tabique_nombre = form_tabiques[1].tabique.value
    let tabique_ancho = form_tabiques[1].tabique_ancho.value
    let tabique_alto = form_tabiques[1].tabique_alto.value

    if (tabique_nombre == "" || tabique_alto == 0 || tabique_ancho == 0) {
        Swal.fire("Complete todos los campos")
    } else {
        //datos validos
        //Carga el nuevo tabique al array "tabiques"

        //Verifica que el nobre del tabique no este duplciado
        if (verifica_nombre_duplicado(tabiques, tabique_nombre)) {
            Swal.fire("Ya hay un campo conel nombre " + tabique_nombre)

        } else {
            //Nombre valido Agrega al objeto
            tabiques.push(new tabique(tabique_nombre, tabique_ancho, tabique_alto))
            //llama a la funcion que crea la tabla de materiales, basado en u objeto
            carga_tabla_tabiques(tabiques)
            Prende_Apaga(seccion_lista_tabiques, true)
            Prende_Apaga(boton_cotizar, true)


            Toastify({
                text: "Tabique agregado!",
                duration: 2000,
                gravity: "top",
                position: "center",
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                onClick: function () { } // Callback after click
            }).showToast();

        }

        // limpia el formulario
        form_tabiques[1].tabique.value = ""
        form_tabiques[1].tabique_ancho.value = ""
        form_tabiques[1].tabique_alto.value = ""
    }

});



// calculo de materiales
form_tabiques[2].addEventListener("submit", (event) => {
    event.preventDefault()

    let seleccion = event.submitter.name // toma el nombre del boton clickeado

    if (seleccion == "Cotizar") {
        //llama a la pagina de cotizacion

        presenta_cotizacion(tabiques)

        // Swal.fire("Le enviaremos el listado a su email!", "", "info")
    } else {
        // borra la linea del aray

        for (let i = 0; i <= tabiques.length - 1; i++) {
            if (tabiques[i].nombre == seleccion) {
                //coincide el boton con ela linea!
                // se borra el item del array
                tabiques.splice(i, 1)
                //recarga la tabla
                carga_tabla_tabiques(tabiques)
                Toastify({
                    text: "Tabique Eliminado!",
                    duration: 2000,
                    gravity: "top",
                    position: "center",
                    style: {
                        background: "linear-gradient(to right, red, #96c93d)",
                    },
                    onClick: function () { } // Callback after click
                }).showToast();
            }
        }
    }
}
)






