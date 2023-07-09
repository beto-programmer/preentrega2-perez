function solicitarCuenta() {
    alert("Bienvenido a consencionaria Car Luxury! Sigue los pasos para crear tu cuenta")
    let correo = String(prompt("Ingrese su correo electronico para poder empezar a crear su cuenta"))
    let contraseña = String(prompt("Ingrese su contraseña"))
    alert("Listo! Su cuenta ya ha sido creada")
}

function solicitarVehiculo() {
    let vehiculo = String(prompt("¿Que tipo de vehiculo prefiere? 1. Autos 2. Motos"))
    if ("1") {
        alert ("Genial! Ahora te pasaremos una lista de los autos que tenemos")
    }
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
solicitarCuenta()
solicitarVehiculo()