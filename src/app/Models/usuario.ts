class Usuario
{
    constructor(
        public Id: number,
        public Nombre: string,
        public Email: string,
        ){}
    }
    

class UsuarioClave extends Usuario
{
    constructor(
        public Nombre: string,
        public Email: string,
        public Clave:string
    ){
        super(0, Nombre, Email)
    }
}

export {
    Usuario,
    UsuarioClave
}