export enum Color{
    rojo, negro, azul, verde
}

export interface Heroe {
    nombre: string;
    nombreSuper: string;
    poder: string;
    vuela: boolean
    color: Color;
}