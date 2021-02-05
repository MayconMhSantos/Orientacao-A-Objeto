function criaCachorro(raca,pata,cor){
    let cachorro = Object.create({}); // criado um cachoro e criando um objeto vazio
    cachorro.raca = raca;
    cachorro.pata = pata;
    cachorro.cor = cor;
    cachorro.latir = function(){
        console.log("Au Au Au")
    }
    return cachorro;
}

let doberman = criaCachorro("Doberman", 4,"preto");
console.log(doberman)

doberman.latir();