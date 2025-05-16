//15/05/2025

class Auto{
//Atributos Privados
#marca
#modelo
#kilometraje 

//Publicos
constructor(marca, modelo = new Date().getFullYear(), kilometraje = 0){
    this.#marca = marca,
    this.#modelo = modelo,
    this.#kilometraje = kilometraje
}
   setKilometraje(k){
    if (k > 0 && k <= this.#kilometraje ){
     this.#kilometraje -= k
    }
   }
   getAuto(){
    return `La marca de del auto es ${this.#marca} el modelo es ${this.#modelo} y su kilometraje es ${this.#kilometraje}`;
   }

}



const Auto1 = new Auto("fitito", 2011, 10000)


console.log(Auto1.getAuto());

Auto1.setKilometraje(2000)

// console.log(Auto1.getAuto());

// const Auto2 = new Auto("fitito")
// console.log(Auto2.getAuto());

