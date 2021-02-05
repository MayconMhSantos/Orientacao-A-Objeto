let cachorro = {
    patas : 4,
    raca : "indefinido",
    latir : function(){
        console.log("Au Au")
    }  
}

let labrador = Object.create(cachorro); // Labrador recebeu os parametros do objeto cachorro
labrador.latir(); // 

labrador.raca = "labrador";//Objeto labrador recebe raca = labrador.
console.log(labrador.raca);// imprimir a function atravez do Object Labrador

console.log(cachorro.raca); // imprimir a function do Object cachorro.