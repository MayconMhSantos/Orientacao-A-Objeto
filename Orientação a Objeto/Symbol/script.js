class Cachorro{
    constructor(raca,cor) {
        this.raca = raca;
        // this.pata = 4;
        this.cor = cor;
    }
}

Cachorro.prototype.raca = "SRD";

let patas =Symbol();

Cachorro.prototype[patas] = 4;

let labrador = new Cachorro("Labrador", "amarelo");
console.log(labrador.pata);
console.log(Cachorro.prototype[patas]);

