let nombres =  ["Cucaracha", "Lechuga","Jamon"]
let tipos = ["Insecto","Vegetales","Animal"]
let niveles = [200,300,500,290]



let alimentos=[]

for(let i = 0 ; i<50; i++){
    let alimento={  }

    alimento.nombres = nombres[ Math.floor(Math.random()*nombres.length)]
    alimento.tipos = tipos[ Math.floor(Math.random()*tipos.length)]
    alimento.niveles = niveles[ Math.floor(Math.random()*niveles.length)]
    
    alimentos.push(alimento)


}
console.log(alimentos)

function entrenamiento(alimentos,callback){
    setTimeout(function(){ 

        let tipos = alimentos.filter(function(alimento){

            return (alimento.tipo == "vegetal" && alimento.niveles > 200);

        })

        callback(tipos);

    }, 5000)
}

entrenamiento(alimentos,function (tipos){

    let resultado = 0;

    tipos.forEach(function(tipo) {
        resultado += tipo.niveles; 
    });

    console.log(tipos);
    console.log("La suma de energias de la dieta de grogu es de: " +resultado);
})