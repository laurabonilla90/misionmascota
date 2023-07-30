// Compra de productos para mascotas

/*
    - Login
    - Comprar productos 
    - Saludo

*/

// Funciones

// Función para imprimir productos y procesar la orden

const procesarOrden = (listaProductos) => {

    let seleccionProducto = prompt(listaProductos)
    alert("Estamos procesando tu solicitud")

}


// login

let username = "laura"
let password = "123"


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

        let products = `¿Qué te gustaría comprar?
                        \n 1. Concentrados 
                        \n 2. Galletas
                        \n 3. Juguetes
                        \n 0. Salir`

        let option = prompt(products)

        switch (option) {
            case "1":
                let concentrado = `¿Qué concentrado te gustaría comprar?
                \n 1. Pedigree: $20.000 COP 
                \n 2. ProPlan: $40.000 COP
                \n 3. Taste of The Wild: $80.000 COP
                \n 4. NutraNuggets: $70.000 COP`

                procesarOrden(concentrado)
                break

            case "2":
                let galletas = `¿Qué galletas te gustaría comprar?
                \n 1. Pedigree: $10.000 COP 
                \n 2. ProPlan: $20.000 COP
                \n 3. NutraNuggets: $20.000 COP`

                procesarOrden(galletas)
                break

            case "3":
                let juguetes = `¿Qué juguete te gustaría comprar?
                \n 1. Pelota: $10.000 COP 
                \n 2. Animal sonoro: $20.000 COP
                \n 3. Cuerda de fuerza: $30.000 COP`

                procesarOrden(juguetes)
                break

            // Saludo
            case "0":
                alert(`Gracias ${username}, hasta pronto :)`)
                break
        }

    }

}



