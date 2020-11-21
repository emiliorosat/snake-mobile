export class Consulta
{
    constructor(
        public PacienteId: number,
        public Fecha: Date,
        public Motivo: string,
        public Seguro: string,
        public MontoPagado: number,
        public Diagnostico: string,
        public Notas: string,
        public Archivo: string
    ){

    }
}