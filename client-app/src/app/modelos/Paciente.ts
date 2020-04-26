import IEntidadeResponsavel from "../modelos/EntidadeResponsavel";

export interface IPaciente {
  nome: string;
  sexo: string;
  peso: string;
  idade: string;
  tipoSanguineo: string;
  altura: string;
  quadroClinico: string;
  observações: string;
  entidadeResponsavel: IEntidadeResponsavel;
}
