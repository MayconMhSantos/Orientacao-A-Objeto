class Mamifero {
    constructor(patas) {
        this.patas = patas;
    }
}

let coiote = new Mamifero(4);

console.log(coiote.patas);

class Cachorro extends Mamifero {
    constructor(patas, raca) {
        super(patas, patas);
        this.raca = raca;
    }

    latir() {
        console.log('Au  Au');
    }

}

let pug = new Cachorro(4, 'Pug');
pug.latir();
console.log('o Cachorro tem : ',pug.patas,' patas');
console.log('a raca do cachorro é :',pug.raca);

console.log(new Cachorro instanceof Mamifero); // Verificando se a classe cachorro vem de mamifero... o consolere retornara False ou True nesse caso TRUE.

console.log(coiote instanceof Mamifero); // Aqui estamos verificando a instancia do coiote. sim o coiote e uma instancia de mamifero.


