class Conta {
    constructor(saldoC, saldoP, jurosP) {
        this.saldoC = saldoC,
        this.saldoP = saldoP,
        this.jurosP = jurosP
    }

    deposito(valor){
        this.saldoC += valor;
    }

    saque(valor) {
        this.saldoC -= valor;
    }

    transferenciaP(valor) {
        this.saldoC -= valor;
        this.saldoP += valor;
    }

    transferenciaC(valor) {
        this.saldoP -= valor;
        this.saldoC += valor;
    }

    juros() {
        let juros = (this.saldoP * this.jurosP / 100);
        this.saldoP += juros;
    }
}

let conta = new Conta(1000, 5000, 1);
console.log(conta);

conta.saque(500);
console.log(conta)

conta.deposito(5000);
console.log(conta)

conta.transferenciaP(3000);
console.log(conta);


class ContaEspecial extends Conta {  // Ultiluizando o Extends para puxar erdar as propriedades da mesma.
    constructor(saldoC, saldoP, jurosP) {
        super(saldoC, saldoP, jurosP*2) // ultilizando o SUPER para puxar as propriedasdes da Classe CONTA.

    }
}

let contaEspecial = new ContaEspecial(10000, 50000, 1);
console.log(contaEspecial);

contaEspecial.saque(5000); // como foi erdada as propriedades da Classe Conta e possivel ultilizar os metodos da mesma nesta outra classe por ela foi extendida com a classe pai que no casso a CONTA.
console.log(contaEspecial);
