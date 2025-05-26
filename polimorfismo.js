class Figura{
dibujar(){
    console.log("dibujando....")
}
 formula(){
    
    }


}

class Rectangulo extends Figura{
    dibujar(){
        console.log("█")
    }
    formula(base, altura){
   let resultado = base * altura;
   console.log(`El area de un Rectangulo es de ${resultado}`)
    }

}

class Triangulo extends Figura{
    dibujar(){
        console.log("▲");
    }
    formula(base, altura){
    let resultado = base * altura / 2;
   console.log(`El area de un Triangulo es de ${resultado}`)
    }
}

const figuras = [new Figura(), new Rectangulo(), new Triangulo()];

figuras.forEach(figura => {
    figura.dibujar()
    figura.formula(2,5)
     
});