const cachorro = {
    latir: function(){
        console.log("Au Au");
    },
    uivar: function(){
        console.log("Auuuuuuuuuuuuuuuuu")
    },
    setRaca: function(raca){ // pedio o parametro raca
        this.raca = raca;       // this. --> esta raca e igual a raca do parametro.
    },
    getRaca: function(){    
        return "A raca e: " + this.raca; // esta concatenando o raca do parametro com o text console log.
    }
}
cachorro.latir();
cachorro.uivar();


// get e set.
cachorro.setRaca("Pastor Alemao"); // setei o parametro raca.
console.log(cachorro.raca);
console.log(cachorro.getRaca()); // imprimindo o txt+ o parametro raca.

// this : aquele objeto aquela coisa.

