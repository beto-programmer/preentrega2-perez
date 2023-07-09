function solicitarCuenta() {
    alert("Bienvenido a consencionaria Car Luxury! Sigue los pasos para crear tu cuenta")
    let correo = String(prompt("Ingrese su correo electronico para poder empezar a crear su cuenta"))
    let contraseña = String(prompt("Ingrese su contraseña"))
    alert("Listo! Su cuenta ya ha sido creada")
}

const auto1 =  {
    marca: "Chevrolet",
    modelo: "Corsa",
    año: 2014,
    precio: "$2.600.000",
    puertas: 4,
    transmisión: "Manual",
    color: "Negro",
    motor: 1.6,
}
const auto2 =  {
    marca: "Volkswagen",
    modelo: "Polo",
    año: 2021,
    precio: "$5.000.000",
    puertas: 4,
    transmisión: "Manual",
    color: "Blanco",
    motor: 1.6,
}
const auto3 =  {
    marca: "Peugeot",
    modelo: 308,
    año: 2023,
    precio: "$10.500.000",
    puertas: 4,
    transmisión: "Manual",
    color: "Blanco",
    motor: 1.6,
}
const auto4 =  {
    marca: "Volkswagen",
    modelo: "Amarok",
    año: 2023,
    precio: "$23.000.000",
    puertas: 4,
    transmisión: "Automatico",
    color: "Negro",
    motor: "V6",
}
const auto5 =  {
    marca: "Audi",
    modelo: "A3",
    año: 2014,
    precio: "$19.900.000",
    puertas: 3,
    transmisión: "Automatico",
    color: "Gris",
    motor: "1.8T",
}
const auto6 =  {
    marca: "Ford",
    modelo: "Focus",
    año: 2017,
    precio: "$5.800.000",
    puertas: 4,
    transmisión: "Manual",
    color: "Azul",
    motor: "1.6",
}
const listaAutos = [auto1, auto2, auto3, auto4, auto5, auto6]
const moto1 = {
    marca: "Yamaha",
    modelo: "XTZ 150cc",
    año: 2021,
    precio: "$1.794.500",
    color: "Blanco",
}
const moto2 = {
    marca: "Honda",
    modelo: "Xr Tornado 250cc",
    año: 2018,
    precio:"$1.940.000",
    color: "Negro",
}
const moto3 = {
    marca: "Kawasaki",
    modelo: "Ninja ZX-6R 600cc",
    año: 2019,
    precio: "$11.640.000",
    color: "Verde",
}
const moto4 = {
    marca: "Yamaha",
    modelo: "XTZ 250cc",
    año: 2020,
    precio: "$2.500.000",
    color: "Rojo",
}
const listaMotos = [moto1, moto2, moto3, moto4]
function solicitarVehiculo() {
    let vehiculo = Number(prompt("¿Que tipo de vehiculo prefiere? Escriba 1 si busca auto y 2 si busca moto"))
    if (vehiculo === 1) {
        alert ("Genial! Ahora te pasaremos una lista de los autos que tenemos")
        alert ("1.Corsa 2.")
    }
    if (vehiculo === 2){
        alert ("Genial! Ahora te pasaremos una lista de las motocicletas que tenemos")
    }
}
solicitarCuenta()
solicitarVehiculo()