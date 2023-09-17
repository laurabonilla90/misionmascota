// e-commerce de juguetes para mascotas

async function principal() {
    const respuesta = await fetch('/data.json')
    console.log(respuesta)
    const juguetes = await respuesta.json()

    graficarCards(juguetes)

    cargarCarrito()

    let inputBuscador = document.getElementById("buscador")

    function filtrar(juguetes, input) {
        let juguetesFiltrados = juguetes.filter(juguete => juguete.nombre.toLowerCase().includes(input.value.toLowerCase()) || juguete.categoria.toLowerCase().includes(input.value.toLowerCase()))
        graficarCards(juguetesFiltrados)

    }

    inputBuscador.addEventListener("keyup", () => filtrar(juguetes, inputBuscador))

    let juguetesMayorPrecio = document.getElementById("mayor")

    function precioMayor() {
        let juguetesMayorPrecio = juguetes.sort((a, b) => {
            if (a.precio > b.precio) {
                return 1
            }
            if (a.precio < b.precio) {
                return -1
            }
            return 0
        })
        juguetesMayorPrecio = juguetesMayorPrecio.reverse()
        graficarCards(juguetesMayorPrecio)

    }

    juguetesMayorPrecio.addEventListener("click", precioMayor)

    let juguetesMenorPrecio = document.getElementById("menor")

    function precioMenor() {
        let juguetesMenorPrecio = juguetes.sort((a, b) => {
            if (a.precio < b.precio) {
                return 1
            }
            if (a.precio > b.precio) {
                return -1
            }
            return 0
        })
        juguetesMenorPrecio = juguetesMenorPrecio.reverse()
        graficarCards(juguetesMenorPrecio)

    }

    juguetesMenorPrecio.addEventListener("click", precioMenor)
}

function recuperarCarrito() {
    return localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : []
}

function graficarCards(juguetes) {
    let contenedor = document.getElementById("productos")
    contenedor.innerHTML = "";
    juguetes.forEach(juguete => {
        let cardJuguete = document.createElement("div")
        cardJuguete.classList.add("col-md-4")
        cardJuguete.innerHTML = `
        <div class="cardJuguete">
            <img class="img-fluid" src="./images/${juguete.rutaImagen}"></img>
            <h3 class= "nombre-producto">${juguete.nombre}</h3>
            <p class= "categoria-producto"> Categoría: ${juguete.categoria}</p>
            <h4 class= "precio-producto">$ ${juguete.precio}</h4>
            <button class= "btn-agregar-carrito" id=${juguete.id}>Agregar al carrito</button>
            </div>
            `
        contenedor.appendChild(cardJuguete)

        let botonAgregarAlCarrito = document.getElementById(juguete.id)
        botonAgregarAlCarrito.addEventListener("click", (e) => agregarAlCarrito(juguetes, e))
    })

    let vaciarCarrito = document.getElementById("carritoVacio")

    vaciarCarrito.addEventListener("click", () => {
        localStorage.clear()
        cargarCarrito()
    })

    let finalizarCompra = document.getElementById("finalizarCompra")

    finalizarCompra.addEventListener("click", () => {

        function alerta(title, icon) {
            Swal.fire({
                title: title,
                icon,
            })
        }

        let notificacionCompra = document.getElementById("carrito")
        let carrito = recuperarCarrito()
        if (carrito.length > 0) {
            alerta("¡Gracias por tu compra!")
            notificacionCompra.innerHTML = ""
            localStorage.clear()

        } else {
            notificacionCompra.innerHTML = `
    <div class="alert alert-danger" role="alert">
    No has agregado productos al carrito
    </div>
    `
        }

    })
}

function agregarAlCarrito(juguetes, e) {
    let carrito = recuperarCarrito()
    let jugueteParaBuscar = juguetes.find(juguete => juguete.id === Number(e.target.id))
    let productoCarrito = carrito.find(juguete => juguete.id === jugueteParaBuscar.id)

    if (productoCarrito) {
        productoCarrito.unidades++
        productoCarrito.subtotal = productoCarrito.precioUnitario * productoCarrito.unidades
    } else {
        carrito.push({
            id: jugueteParaBuscar.id,
            nombre: jugueteParaBuscar.nombre,
            precioUnitario: jugueteParaBuscar.precio,
            subtotal: jugueteParaBuscar.precio,
            unidades: 1
        })
    }

    localStorage.setItem("carrito", JSON.stringify(carrito))

    cargarCarrito()
}

function cargarCarrito() {
    let contenedor = document.getElementById("carrito")
    contenedor.innerHTML = ""
    let carrito = recuperarCarrito()

    let totalCarrito = 0

    carrito.forEach(juguete => {
        let cardJuguete = document.createElement("div")
        totalCarrito = totalCarrito + juguete.subtotal
        cardJuguete.innerHTML = `
      <div class="d-flex p-2 justify-content-between"> 
            <h5>${juguete.unidades}x ${juguete.nombre}</h5>
            <p>$ ${juguete.subtotal}</p>
       </div>
      `
        contenedor.appendChild(cardJuguete)
    })

    let cardJuguete = document.createElement("div")
    cardJuguete.innerHTML = `
    <div class="d-flex p-2 justify-content-between"> 
          <h5>Total</h5>
          <p>$ ${totalCarrito}</p>
     </div>
    `
    contenedor.appendChild(cardJuguete)

}



principal()
