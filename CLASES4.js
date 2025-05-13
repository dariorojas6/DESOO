class Producto {
    #stock = 0;
    constructor (n, p, s){
        this.nombre = n;
        this.precio = p;

    }

    info(){
        return `El nombre del producto es: ${this.nombre} su precio es: ${this.precio} y el stock: es ${this.#stock}`
        }

        sumarAlStock(prod){
        this.#stock += prod
        }

        restarAlStock(prod){
            this.#stock -= prod
            }

}

let producto1 = new Producto('iphone', '500usd', '20');

console.log(producto1.info())
producto1.restarAlStock(2)
console.log(producto1.info())
producto1.sumarAlStock(400)
console.log(`STOCK ACTUALIZADO: ${producto1.stock}`)
    