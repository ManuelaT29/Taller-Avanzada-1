let sables = [
    {
        color : "Rosa",
        energia : 20,
        portador : "Juan"
    },

    {
        color : "Morado",
        energia : 50,
        portador : "Obi wan"
    },

    {
        color : "Amarillo",
        energia : 22,
        portador : "Manuela"
    },

    {
        color : "Verde",
        energia : 10,
        portador : "Miguel"
    },

    {
        color : "Azul",
        energia : 50,
        portador : "David"
    },

    {
        color : "Verde-Limon",
        energia : 35,
        portador : "Pablo"
    },

    {
        color : "Dorado",
        energia : 25,
        portador : "Angel"
    },

    {
        color : "Blanco",
        energia : 60,
        portador : "Alaia"
    },

    {
        color : "Negro",
        energia : 21,
        portador : "Carlos"
    },

    {
        color : "Lila",
        energia : 80,
        portador : "Eliana"
    },

    {
        color : "Naranja",
        energia : 150,
        portador : "Dulce"
    },

    {
        color : "Jade",
        energia : 120,
        portador : "Ana"
    },

    {
        color : "Gris",
        energia : 8,
        portador : "Isa"
    },

    {
        color : "Morado",
        energia : 75,
        portador : "Jessica"
    },

    {
        color : "Verde-marino",
        energia : 72,
        portador : "Arley"
    },

    {
        color : "Cafe",
        energia : 20,
        portador : "Alejo"
    },

    {
        color : "Fucsia",
        energia : 100,
        portador : "Daniela"
    },

    {
        color : "Lila",
        energia : 45,
        portador : "Mateo"
    },

    {
        color : "Rosa",
        energia : 30,
        portador : "Maria"
    },

    {
        color : "Plateado",
        energia : 50,
        portador : "Mariana"
    }

]

let filtrar = sables.filter(sable => (sable.energia < 20));

console.log(filtrar);