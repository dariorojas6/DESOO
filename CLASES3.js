//EJERCICIO 3


class Mascota{
    constructor(n,e,direc){
this.nombre = n;
this.edad = e;
this.direccion = direc
    };

    saludar(){
      return `Hola el nombre de la mascota es ${this.nombre} y su edad es ${this.edad}`
    };
    verDireccion(){
        return `Mi direccion es ${this.direccion}`;
    }
}

let Pachi = new Mascota('Pachi', 4, 'Fray del pozo');

console.log(Pachi.saludar());
console.log(Pachi.verDireccion());


  