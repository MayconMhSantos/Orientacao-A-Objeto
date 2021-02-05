class Carro {
    constructor(marca, cor, gasolinaRestante, consumo) {
        this.marca = marca,
        this.cor = cor,
        this.gasolinaRes = gasolinaRestante,
        this.consumo = consumo
    }

    dirigir(km) {

        let litrosConsumidos = km / this.consumo;
        this.gasolinaRestante = litrosConsumidos;

    }

    abastecer(l) {
        this.gasolinaRestante += l;
    }


}


let carro = new Carro('MBW', 'Prata', 100, 14);
console.log(carro);

carro.dirigir(100);
console.log(carro);

carro.abastecer(50);
console.log(carro);