const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));
const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar")

function cargarProductosCarrito() {
    if (productosEnCarrito) {
        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
    
        contenedorCarritoProductos.innerHTML = "";
    
        productosEnCarrito.forEach(listaAutos => {
            const div = document.createElement("div");
            div.classList.add ("carrito-producto");
            div.innerHTML = `
            <div class="carrito-producto-titulo">
            <small>Titulo</small>
            <h4>${listaAutos.titulo}</h4>
            </div>
            <div class="carrito-producto-cantidad">
            <small>Cantidad</small>
            <p>${listaAutos.cantidad}</p>
            </div>
            <div class="carrito-producto-precio">
            <small>Precio</small>
            <p>$${listaAutos.precio}</p>
            </div>
            <div class="carrito-producto-subtotal">
            <small>Subtotal</small>
            <p>$${listaAutos.precio * listaAutos.cantidad}</p>
            </div>
            <div>
            <button class="carrito-producto-eliminar" id="${listaAutos.id}">Eliminar</button>
            </div>
            `;
    
            contenedorCarritoProductos.append(div);
    
        })
    
    
    } else {
        contenedorCarritoVacio.classList.remove("disabled")
        contenedorCarritoProductos.classList.add("disabled")
        contenedorCarritoAcciones.classList.add("disabled")
    }

    actualizarBotonesEliminar();

}

cargarProductosCarrito();
actualizarBotonesEliminar();

function actualizarBotonesEliminar (){
    botonesEliminar = document.querySelectorAll('.carrito-producto-eliminar');
    botonesEliminar.forEach (boton =>{
        boton.addEventListener("click", eliminarDelCarrito)
    })
}

function eliminarDelCarrito(e){
    const idBoton = e.currentTarget.id
    const index = productosEnCarrito.findIndex(listaAutos => listaAutos.id === idBoton)
    productosEnCarrito.splice(index, 1)

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
}

eliminarDelCarrito();