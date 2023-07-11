function solicitarCuenta() {
    alert("Bienvenido a consencionaria Car Luxury! Sigue los pasos para crear tu cuenta")
    let correo = String(prompt("Ingrese su correo electronico para poder empezar a crear su cuenta"))
    let usuario = String(prompt("Ingrese su nombre"))
    let contraseña = String(prompt("Ingrese su contraseña"))
    alert("Listo! Su cuenta ya ha sido creada")
    alert("Bienvenido " + usuario)
}
const listaAutos = [
 {
    marca: "Chevrolet",
    modelo: "Corsa",
    año: 2014,
    precio: "$2.600.000",
    puertas: 4,
    transmisión: "Manual",
    color: "Negro",
    motor: 1.6,
},
{
    marca: "Volkswagen",
    modelo: "Polo",
    año: 2021,
    precio: "$5.000.000",
    puertas: 4,
    transmisión: "Manual",
    color: "Blanco",
    motor: 1.6,
},
{
    marca: "Peugeot",
    modelo: 308,
    año: 2023,
    precio: "$10.500.000",
    puertas: 4,
    transmisión: "Manual",
    color: "Blanco",
    motor: 1.6,
},
{
    marca: "Volkswagen",
    modelo: "Amarok",
    año: 2023,
    precio: "$23.000.000",
    puertas: 4,
    transmisión: "Automatico",
    color: "Negro",
    motor: "V6",
},
{
    marca: "Audi",
    modelo: "A3",
    año: 2014,
    precio: "$19.900.000",
    puertas: 3,
    transmisión: "Automatico",
    color: "Gris",
    motor: "1.8T",
},
{
    marca: "Ford",
    modelo: "Focus",
    año: 2017,
    precio: "$5.800.000",
    puertas: 4,
    transmisión: "Manual",
    color: "Azul",
    motor: "1.6",
}
];

const listaMotos = [
{
    marca: "Yamaha",
    modelo: "XTZ 150cc",
    año: 2021,
    precio: "$1.794.500",
    color: "Blanco",
},
    
{
    marca: "Honda",
    modelo: "Xr Tornado 250cc",
    año: 2018,
    precio:"$1.940.000",
    color: "Negro",
},
{
    marca: "Kawasaki",
    modelo: "Ninja ZX-6R 600cc",
    año: 2019,
    precio: "$11.640.000",
    color: "Verde",
},
{
    marca: "Yamaha",
    modelo: "XTZ 250cc",
    año: 2020,
    precio: "$2.500.000",
    color: "Rojo",
}
]
function solicitarVehiculo() {
    let vehiculo = Number(prompt("¿Que tipo de vehiculo prefiere? Escriba 1 si busca auto y 2 si busca moto"))
    if (vehiculo === 1) {
        alert ("Genial! Ahora te pasaremos una lista de los autos que tenemos")
        alert ("1.Chevrolet Corsa 2. Volkswagen Polo 3.Peugeot 308 4.Volkswagen Amarok 5.Audi A3 6.Ford Focus")
        let seleccion = prompt("Elige un producto (1-" + listaAutos.length + "):");

        if (seleccion >= 1 && seleccion <= listaAutos.length) {
          let productoElegido = listaAutos[seleccion - 1];
          alert("El precio del producto " + productoElegido.modelo + " es: " + productoElegido.precio);
        } else {
          alert("Selección inválida.");
        }
    }
    if (vehiculo === 2){
        alert ("Genial! Ahora te pasaremos una lista de las motocicletas que tenemos")
        alert("1.XTZ 150cc 2.Honda Xr Tornado 250cc 3.Kawasaki Ninja ZX-6R 600cc 4.Yamaha XTZ 250cc")
        let seleccion = prompt("Elige un producto (1-" + listaMotos.length + "):");

        if (seleccion >= 1 && seleccion <= listaMotos.length) {
          let productoElegido = listaMotos[seleccion - 1];
          alert("El precio del producto " + productoElegido.modelo + " es: " + productoElegido.precio);
        } else {
          alert("Selección inválida.");
        }
    }

}
function solicitarPago(){
    let pago = prompt("¿Cómo quieres realizar el pago? 1.Efectivo 2.Credito 3.Debito, escriba los numeros correspondientes")
    alert ("Muchas gracias por tu compra!")
}
solicitarCuenta()
solicitarVehiculo()
solicitarPago()