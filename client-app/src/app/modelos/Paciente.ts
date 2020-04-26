import IEntidadeResponsavel from "../modelos/EntidadeResponsavel";

export interface IPaciente {
  id: string;
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
