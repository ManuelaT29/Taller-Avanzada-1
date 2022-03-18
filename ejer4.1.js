let color = ["Fucsia","Verde","Morado","Dorado"]
let energia =[50,10,45,10]
let niveles = ["Maria","Juan", "Manuela"]

let sables = []

for (let i = 0; i < 20; i++) {
   
    let sable = {}
   sable.color = color[ Math.floor(Math.random()*color.length)]
   sable.energia = energia[ Math.floor(Math.random()*energia.length)]
   sable.niveles = niveles[ Math.floor(Math.random()*niveles.length)]

   sables.push(sable)
    
}

function consutarSables(sable){
    let filtrar = sable.filter(function(sable){
        return(sable.energia<20)
    })

    console.log(filtrar)
    console.log(`Hay ${filtrar.length} Sables energia < a 20`)
}

consutarSables(sables)