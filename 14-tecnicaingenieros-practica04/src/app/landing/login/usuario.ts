export class Usuario {
    id ?: number
    nombreUsuario ?: string
    contrasenia ?: string

    constructor(valor1: string, valor2: string){
        this.nombreUsuario = valor1;
        this.contrasenia = valor2;
    }
}
