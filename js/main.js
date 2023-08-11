let producto = [];
fetch("../json/productos.json")
    .then(response => response.json())
    .then(data => {    
        listaAutos = data;
        cargarAutos(listaAutos)
    })

const seccionProductos = document.querySelector("#seccion-productos");
let botonesAgregar = document.querySelectorAll('.tarjeta__btn');
const numerito = document.querySelector("#numerito")

function cargarAutos (productoElegido){
    listaAutos.forEach(listaAutos => {
        const div = document.createElement("div");
        div.classList.add("tarjeta")
        div.innerHTML = `
            <img src="${listaAutos.imagen}" alt="${listaAutos.titulo}">
            <h3>${listaAutos.titulo}</h3>
            <p>$${listaAutos.precio}</p>
            <button class="tarjeta__btn" id="${listaAutos.id}">Añadir al carro</button>
        `;
        seccionProductos.append(div);
    })
    actualizarBotonesAgregar();
}

function actualizarBotonesAgregar (){
    botonesAgregar = document.querySelectorAll('.tarjeta__btn');
    botonesAgregar.forEach (boton =>{
        boton.addEventListener("click", agregarAlCarrito)
    })
}

const productosEnCarrito = [];

function agregarAlCarrito (e){
    const idBoton = e.currentTarget.id;
    const productoAgregado = listaAutos.find (listaAutos => listaAutos.id === idBoton);
    Toastify({
        text: "Se ha agredado este producto al carrito",
        className: "info",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
          borderRadius: "1rem"
        }
      }).showToast();
    if(productosEnCarrito.some(listaAutos => listaAutos.id === idBoton)) {
        const index = productosEnCarrito.findIndex (listaAutos => listaAutos.id === idBoton)
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    actualizarNumerito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
}

function actualizarNumerito(){
    let nuevoNumerito = productosEnCarrito.reduce((acc, listaAutos) => acc + listaAutos.cantidad, 0)
    numerito.innerText = nuevoNumerito;
}