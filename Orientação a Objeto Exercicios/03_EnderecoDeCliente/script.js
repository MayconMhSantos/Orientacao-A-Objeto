class Endereco {
    constructor(rua, bairro, cidade, estado){
        this.rua = rua,
        this.bairro = bairro,
        this.cidade = cidade,
        this.estado = estado
    }

    set novaRua(novaRua) {
        this.rua = novaRua;
    }

    set novoBairro(novoBairro) {
        this.bairro = novoBairro;
    }

    set novaCidade(novaCidade) {
        this.cidade = novaCidade;
    }

    set novoEstado(novoEstado) {
        this.estado = novoEstado;
    }
}

// Estanciando a Classe
let endereco = new Endereco('Rua Bororros', 'Santa Cruz', 'Cascavel', 'PR' );
console.log(endereco);

// setando as atualizaçoes feita pelo set...
endereco.novaRua = 'Rua Txicaos';
endereco.novoBairro = 'Paulo Godoy';
endereco.novaCidade = 'Toledo';
endereco.novoEstado = 'MG';
console.log(endereco);
