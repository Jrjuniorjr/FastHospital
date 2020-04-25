import { IQuadroClinico } from "./QuadroClinico";

export interface IPaciente{
    id: string;
    nome: string;
    sexo: string;
    peso: string;
    idade: string;
    tipoSanguineo: string;
    altura: string;
    quadroClinico: IQuadroClinico;
}