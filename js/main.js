// e-commerce de juguetes para mascotas

//Variables

let username = "laura"

let password = "123"

let juguetes = [
    { id: 1, nombre: "Pelota premio", categoria: "pelotas", stock: 12, precio: 65000 },
    { id: 2, nombre: "Osito", categoria: "peluches", stock: 20, precio: 35000 },
    { id: 3, nombre: "Lazo fuerza", categoria: "cuerdas", stock: 7, precio: 15000 },
    { id: 4, nombre: "Bowl sabores interactivos", categoria: "jueguetes interactivos", stock: 6, precio: 70000 },
    { id: 5, nombre: "Laberinto de premios", categoria: "jueguetes interactivos", stock: 4, precio: 80000 },
    { id: 6, nombre: "Pavo cantante", categoria: "juguetes en latex", stock: 5, precio: 12000 },
    { id: 7, nombre: "Pelota gira-sola", categoria: "pelotas", stock: 16, precio: 38000 },
    { id: 8, nombre: "Elefante", categoria: "juguetes en latex", stock: 4, precio: 15000 },
  ]

let carrito = []

// Funciones

function menuInicio () {

    let opciones = `¿Qué te gustaría hacer hoy?
    1. Ver juguetes 
    2. Filtrar productos por categoría
    3. Ver juguetes de menor a mayor precio
    4. Agregar juguetes al carrito por ID
    5. Ver total a pagar del carrito
    0. Cerrar sesión`

let option = prompt(opciones)


switch (option) {
    case "1":
        let listaJuguetes= ""
        juguetes.forEach(function(juguete, indice) {
            listaJuguetes += juguete.nombre + "\n"
        });

        listaJuguetes += "\n* Oprime 0 para volver al menú"

        let regresarMenu = prompt (listaJuguetes)

        if (regresarMenu == 0) {
            menuInicio()
        }

        break

    case "2":

        let categorias = `¿Por cuál categoría te gustaría filtrar?
        1. Cuerdas 
        2. Juguetes en latex
        3. Juguetes interactivos
        4. Pelotas
        5. Peluches
        0. Regresar al menú principal`

        let verCategorias = prompt (categorias)

        switch (verCategorias) {
            case "1":
                filtroCategoria("cuerdas")
                break
            
            case "2":
                filtroCategoria("juguetes en latex")
                break
            
            case "3":
                filtroCategoria("juguetes interactivos")
                break
            
            case "4":
                filtroCategoria("pelotas")
                break
            
            case "5":
                filtroCategoria("peluches")
                break
        
            case "0":
                menuInicio()
                break
            }

        break

    case "3":

        let menorPrecio = juguetes.sort ((a, b) => {
            if (a.precio > b.precio) {
                return 1
            }
            if (a.precio < b.precio) {
                return -1
            }
            return 0
        })

        let verMenor= ""
                menorPrecio.forEach(function(juguete) {
                    verMenor += "-" + juguete.nombre + " " + juguete.precio + "\n"
                });

                verMenor += "\n* Oprime 0 para volver al menú"

                let jugueteMenor = prompt (verMenor)

                if (jugueteMenor == 0) {
                    menuInicio()
                }
        break
    
    case "4":
        let listaCarrito= ""
        juguetes.forEach(function(juguete) {
            listaCarrito += "ID: " + juguete.id + " - " + juguete.nombre + "\n"
        });

        listaCarrito += "\n* Ingresa el ID del producto que deseas agregar al carrito o 0 para volver al menú principal"

        let productoSeleccionado = prompt (listaCarrito)

        if (productoSeleccionado == 0) {
            menuInicio()
        }

        let productoAgregar= juguetes.find((juguete) => juguete.id == productoSeleccionado)

        let carritoLleno=""
        carrito.push(productoAgregar)

        alert("Has agregado a tu carrito: " + productoAgregar.nombre) 

        menuInicio()

        break
    
    case "5":
        let totalCarrito= ""
        
        let totalPago= 0

        carrito.forEach(function(juguete) {
            totalCarrito += "ID: " + juguete.id + " Producto: " + juguete.nombre + " Precio: " + juguete.precio + "\n"
            totalPago= totalPago + juguete.precio
        });

        totalCarrito += "total a pagar: " + totalPago + "\n* Oprime 1 para comprar o 0 para volver al menú principal"

        let cierreCarrito = prompt (totalCarrito)

        if (cierreCarrito == 0) {
            menuInicio()
        } 

        if (cierreCarrito == 1) {
            alert("¡Gracias por tu compra! Te redireccionaremos al inicio :) ")
            
            carrito=[]

            menuInicio()
        }
        break

    // Saludo
    case "0":
        alert(`Gracias ${username}, hasta pronto :)`)
        break
}

}


function filtroCategoria (nombreCategoria) {
    let categoriaFiltradas= juguetes.filter(juguete =>juguete.categoria.includes (nombreCategoria) )

                let listaCategoria= ""
                categoriaFiltradas.forEach(function(juguete, indice) {
                    listaCategoria += "-" + juguete.nombre + "\n"
                });

                listaCategoria += "\n* Oprime 0 para volver al menú"

                let regresarMenu = prompt (listaCategoria)

                if (regresarMenu == 0) {
                    menuInicio()
                }
}

// login

let inputUsername = prompt('Ingresa tu usuario o presiona 0 para salir')


// check username
while (inputUsername !== username && inputUsername != 0) {
    inputUsername = prompt('Usuario incorrecto, por favor ingresa nuevamente tu usuario o presiona 0 para salir')
}

if (inputUsername == 0) {
    alert('Hasta pronto')
} else {

    let inputPassword = prompt('Ingresa tu contraseña o presiona 0 para salir')

    // check password
    while (inputPassword !== password && inputPassword != 0) {
        inputPassword = prompt('Contraseña incorrecta, por favor ingresa nuevamente tu contraseña o presiona 0 para salir')
    }

    if (inputPassword == 0) {
        alert('Hasta pronto')
    } else {

        //flujo usuario logueado
        
        alert(`Bienvenido ${username}`)

        menuInicio()
       

    }

}
