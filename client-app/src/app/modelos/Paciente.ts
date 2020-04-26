import { IEntidadeResponsavel } from "./EntidadeResponsavel";

export interface IPaciente {
  id: string;
  nome: string;
  sexo: string;
  peso: string;
  idade: string;
  tipoSanguineo: string;
  altura: string;
  quadroClinico: string;
  observacoes: string;
  entidadeResponsavel: IEntidadeResponsavel;
}
