class CuentaBancaria{
    //privado
    #saldo = 0;
    constructor(titular){
    this.titular = titular;
    }

    getSaldo(){
        return `${this.titular} Su saldo es: $${this.#saldo} `
    }

    depositar(x){
        if(x > 0 && this.#saldo >= 0){
             this.#saldo += x;
        } else{
            this.#saldo = x
        }
    
    }

    retirar(x){
        if(x > 0  && x <= this.#saldo ){
            this.#saldo -= x 
        }else{
            this.#saldo = ' Su saldo es insuficiente'
        }
    }
    
}

Cuenta = new CuentaBancaria('Dario Rojas');

console.log(Cuenta.getSaldo());

Cuenta.depositar(12000)
console.log(Cuenta.getSaldo());

Cuenta.retirar(10000)
console.log(Cuenta.getSaldo());

Cuenta.retirar(2000)
console.log(Cuenta.getSaldo());

Cuenta.retirar(2000)
console.log(Cuenta.getSaldo());

Cuenta.depositar(1200)
console.log(Cuenta.getSaldo());




