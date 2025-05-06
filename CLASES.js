class Persona { // UNA CLASE ES UNA PLANTILLA
    constructor(n, a, e,dni) { // CONSTRUCTOR: Define cómo se crea una nueva persona. Recibe los datos como parámetros y los asigna a propiedades del objeto
      this.nombre = n;
      this.apellido = a;
      this.edad = e;
      this.dni = dni
    }
    saludar() {
      return `hola soy ${this.nombre} ${this.apellido} y tengo ${this.edad} a`; //METODOS
    }
    info() {
        return `Nombre: ${this.nombre} Apellido: ${this.apellido} Edad: ${this.edad} DNI: ${this.dni} `
    }
  }
  
  let Agustin = new Persona('agus', 'nata', 18, 43055213); // CREAMOS UNA PERSONA Y LE PASAMOS LOS DATOS POR PARAMETROS
  
  console.log(Agustin.info()); 
  