class Cachorro{
    constructor(raca,cor) {
        this.raca = raca;
        // this.pata = 4;
        this.cor = cor;
    }
}

Cachorro.prototype.raca = "SRD";
Cachorro.prototype.pata = 4;

let labrador = new Cachorro("Labrador", "amarelo");
console.log(labrador.pata);