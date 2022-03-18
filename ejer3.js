let media = [37,30,32,26,23];

let calcularTemperatura = (...media) => {
    let promedio = (Math.max(...media) + Math.min(...media)) / 2;
    return (`El promedio de temperatura de hoy es: ${promedio}`)
}

console.log(calcularTemperatura(...media));