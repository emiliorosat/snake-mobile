export class Paciente
{
    constructor(
        public Id: number,
        public UsuarioId: number,
        public Cedula: string,
        public Foto: string,
        public Nombre: string,
        public Apellido: string,
        public TipoSangre: string,
        public Email: string,
        public Sexo: string,
        public FechaNacimiento: Date,
        public Alergias: any,
        public SignoZodiacal: string
    ){}
}