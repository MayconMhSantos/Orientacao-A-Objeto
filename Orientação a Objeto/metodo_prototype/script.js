function Cachorro(raca, pata,cor){ // Classe  
    this.raca = raca;
    this.pata = pata;
    this.cor = cor;
}

Cachorro.prototype.uivar = function(){
    console.log('Auuuu');
}

Cachorro.prototype.latir = function(){
    console.log('Au Au'); 
}
// atribuindo ao objeto Cachorro um novo Cachorro.
let husky = new Cachorro('Husky', 4, 'preto');

console.log(husky);
husky.uivar();
husky.latir();
