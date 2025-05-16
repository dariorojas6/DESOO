//15/05/2025

class Usuario {
    //atributos privados
    #email
    #password

    constructor(email, password){
        this.#email = email,
        this.#password = password
    }

    actualizarEmail(email){
        if(!this.validarEmail(email) || email !== this.#email)
            return 'El email es invalido o es identico';

        this.#email = email;

        return 'Email actualizado con exito';


    }

    cambiarPassword(password){
    if(password !== this.#password && password.length >= 8 ){

        

        this.#password = password
        return "Su password fue actualizada con exito";

    }else{
        return "Vuelva a intentar"
    }
}

    validarEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }

}

const Usuario1 = new Usuario("Dario@dj.com", "soygay123");
console.log(Usuario1.actualizarEmail("Dariodj@gmail.com"));

console.log(Usuario1.cambiarPassword("soygay134"));