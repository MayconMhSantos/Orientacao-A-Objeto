class Conta {
    constructor(saldo) {
        this.saldo = saldo; // Vai receber o saldo e Atribuir a ela mesma.
    }

    depositar(valor) { // metodo de inseriro valor na conta.
        this.saldo += valor;
    }

    saque(valor) {
        this.saldo -= valor;
    }
}

let conta = new Conta(1000); // instanciando a CLasse.

conta.depositar(1000); // acrescentando mais 1000 reais a conta
console.log(conta.saldo);

conta.saque(500); // sacando 500 reais da conta 
console.log(conta.saldo); // verificando se foi atualizado o valor para 1500