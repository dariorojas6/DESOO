// FECHA 08/05/2025 
//EJERCICIO 2

class Libro { 
    constructor(titulo, autor) { 
      this.titulo = titulo ;
      this.autor = autor;
      
    }
    describir() {
      return `El titulo es  ${this.titulo} y el autor es ${this.autor} `; 
    }

  }
  
  let LibroAgus = new Libro('EL SECRETO DE LA TIMBA', 'AGUSTIN NATALICCHIO');  
  
  console.log(LibroAgus.describir()); 
  