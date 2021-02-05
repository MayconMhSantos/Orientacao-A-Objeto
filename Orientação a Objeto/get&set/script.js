
class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        // this.pata = 4;
        this.cor = cor;
    }

    // latir() {
    //     console.log("Au  Au");
    // }

    get getCor() {
        return this.cor;
    }

    set setCor(cor) {
        this.cor = cor ;
    }

}

let pastor = new Cachorro('pastor Alemao', 'sem cor');

console.log(pastor)

pastor.setCor = 'marron';

console.log(pastor.getCor);

