


//arranca ocultando las secciones de carga
function prende_apaga(elemento,visible){
    if (visible) {
        elemento.classList.add("visible")
        elemento.classList.remove("invisible")
    }else{
        elemento.classList.add("invisible")
        elemento.classList.remove("visible")
    }
}

// oculta las secciones de carga hasta que se cargue el usuario
const seccion_carga_tabiques = document.querySelectorAll("div") [6]
const seccion_lista_tabiques = document.querySelectorAll("div") [12]
const boton_cotizar = document.querySelector(".btn_cotizar")
prende_apaga (seccion_carga_tabiques,false)
prende_apaga (seccion_lista_tabiques,false)
prende_apaga (boton_cotizar,false)

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

        //busca datos en localstorage

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
            prende_apaga (seccion_carga_tabiques,true)
        }

    }
})

// esta seccion del programa habilita el campo apelldio
const user_name = document.getElementById("nombre")
user_name.addEventListener("input", function (e) {
    const user_last_name = document.getElementById("apellido")
    const user_email = document.getElementById("email")

    if (e.target.value.length > 1) {
        //al rellenar el campo nombre, se habilita appellido    

        user_last_name.setAttribute("enabled", "")
        user_last_name.removeAttribute("disabled", "")

    } else {
        //al vaciarse el campo nombre, se deshabilita appellido    
        user_last_name.value = ""
        user_last_name.setAttribute("disabled", "")
        user_last_name.removeAttribute("enabled", "")
    }


})

// esta seccion del programa habilita el campo email
const user_last_name = document.getElementById("apellido")
user_last_name.addEventListener("input", function (e) {

    const user_email = document.getElementById("email")

    if (e.target.value.length > 1) {
        //al rellenar el campo nombre, se habilita appellido    

        user_email.setAttribute("enabled", "")
        user_email.removeAttribute("disabled", "")

    } else {
        //al vaciarse el campo apellido, se deshabilita email    
        user_email.value = ""
        user_email.setAttribute("disabled", "")
        user_email.removeAttribute("enabled", "")
    }


})


//carga de tabiqes

let form_tabiques = document.querySelectorAll("form")

form_tabiques[1].addEventListener("submit", (event) => {
    event.preventDefault()
    let tabique =form_tabiques[1].tabique.value
    let tabique_ancho =form_tabiques[1].tabique_ancho.value
    let tabique_alto =form_tabiques[1].tabique_alto.value

    if (tabique =="" || tabique_alto== 0 || tabique_ancho == 0){
        Swal.fire("Complete todos los campos")
    }else{
        //datos validos
       
        carga_tabla_tabiques (tabique,tabique_ancho, tabique_alto)

        Toastify({
            text: "Tabique agregado!",
            duration: 2000,
            gravity: "top", 
            position: "center",
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    
        // limpia el formulario
        form_tabiques[1].tabique.value=""
        form_tabiques[1].tabique_ancho.value=""
        form_tabiques[1].tabique_alto.value=""
        // habilita la seccion de la lista
        prende_apaga (seccion_lista_tabiques,true)
        prende_apaga (boton_cotizar,true)

    }

})

// calculo de materiales
form_tabiques[2].addEventListener("submit", (event) => {
     event.preventDefault()
     
     let seleccion = event.submitter.name

    
    if (seleccion=="Cotizar"){
            Swal.fire("Le enviaremos el listado a su email!", "", "info")
        }else{
            let linea = document.getElementById(seleccion)
            //console.dir(linea)
            let tabla=document.querySelector("table")
            tabla.removeChild(linea)
            if (tabla.rows.length == 1){
                //se elimino la unica fila, deshabilita el boton "cotizar"
                document.querySelector("table")
                prende_apaga (boton_cotizar,false)
            }

            
            Toastify({
                text: "Tabique Eliminado!",
                duration: 2000,
                gravity: "top", 
                position: "center",
                style: {
                  background: "linear-gradient(to right, red, #96c93d)",
                },
                onClick: function(){} // Callback after click
              }).showToast();

        }

    }
 
 )




function carga_tabla_tabiques (tabique,tabique_ancho, tabique_alto){
    
    let tabla_tabiques = document.querySelector("table").appendChild(document.createElement ("tr"))    //agrega una linea
    tabla_tabiques.classList.add("columna")
    tabla_tabiques.setAttribute("id",tabique)
    tabla_tabiques.appendChild(document.createElement("td")).appendChild (document.createTextNode(tabique))
    tabla_tabiques.appendChild(document.createElement("td")).appendChild (document.createTextNode(tabique_ancho))
    tabla_tabiques.appendChild(document.createElement("td")).appendChild (document.createTextNode(tabique_alto))
    
    const boton_eliminar = document.createElement ("button")
    
    boton_eliminar.name = tabique   //le da el nombre del tabique para identificar
    boton_eliminar.innerText ="Eliminar"
    boton_eliminar.style.background = "red"
    boton_eliminar.style.color = "white"
    boton_eliminar.classList.add ("btn-delete")

    tabla_tabiques.appendChild(document.createElement("td")).appendChild (boton_eliminar)
}

class user {
   
    constructor(nombre, apellido, email) {
        this.nombre = nombre
        this.apellido = apellido
        this.email = email
    }
}


function elimina_linea (event){


         console.log ("evento: " + event) 

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
}}


function limpia_formulario() {
    let formulario = document.querySelector("form")
    formulario[0].value = ""
    formulario[1].value = ""
    formulario[2].value = ""

}