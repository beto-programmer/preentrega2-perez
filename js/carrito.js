const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));
const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar")
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-comprado");

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
        contenedorCarritoComprado.classList.remove("disabled")
    }

    actualizarBotonesEliminar();
    actualizarTotal();

}

cargarProductosCarrito();

function actualizarBotonesEliminar (){
    botonesEliminar = document.querySelectorAll('.carrito-producto-eliminar');
    botonesEliminar.forEach (boton =>{
        boton.addEventListener("click", eliminarDelCarrito)
    })
}

function eliminarDelCarrito(e) {
    Toastify({
        text: "Producto eliminado",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
          borderRadius: "1rem",
        },
        offset: {
            x: '1.5rem',
            y: '1.5rem'
          },
        onClick: function(){}
      }).showToast();

    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(listaAutos => listaAutos.id === idBoton);
    
    productosEnCarrito.splice(index, 1);
    cargarProductosCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

}

botonComprar.addEventListener("click", comprarAccion)
function comprarAccion(){
    Swal.fire({
        title: 'Estas seguro que quieres efectuar la compra?',
        text: "Si confirmas no hay vuelta atras!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Comprar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Genial!',
            'Tu compra ha sido efectuada correctamente.',
            'success'
          )
        }
      })
}

botonVaciar.addEventListener("click", vaciarCarrito);
function vaciarCarrito() {

    Swal.fire({
        title: '¿Estás seguro?',
        icon: 'question',
        html: `Se van a borrar ${productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0)} productos.`,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            productosEnCarrito.length = 0;
            localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
            cargarProductosCarrito();
        }
      })
}


function actualizarTotal() {
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `$${totalCalculado}`;
}

vaciarCarrito();
comprarAccion();
eliminarDelCarrito();