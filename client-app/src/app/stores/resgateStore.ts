import { observable, action, computed, configure, runInAction } from "mobx";
import { createContext, SyntheticEvent, FormEvent } from "react";
import agent from "../api/agent";
import { IPaciente } from "../modelos/Paciente";
import { IQuadroClinico } from "../modelos/QuadroClinico";
import { v4 as uuid } from "uuid";

configure({ enforceActions: "always" });

class ResgateStore {
  @observable formularioQuadroClinico = false;
  @observable formularioPaciente = false;
  @observable submitting = false;
  @observable loadInitial = false;

  @observable quadroClinico: IQuadroClinico = {
    id: "",
    febre: "",
    dorDeCabeca: "",
    calafrios: "",
    cansaço: "",
    dorDeGarganta: "",
    tosse: "",
    anotacoes: "",
  };
  @observable paciente: IPaciente = {
    id: "",
    nome: "",
    sexo: "",
    peso: "",
    idade: "",
    tipoSanguineo: "",
    altura: "",
    quadroClinico: this.quadroClinico,
  };

  @action abrirFecharFormularioQuadroClinico = () => {
    this.formularioQuadroClinico = !this.formularioQuadroClinico;
  };

  @action abrirFecharFormularioPaciente = () => {
    this.formularioPaciente = !this.formularioPaciente;
  };

  limparQuadroClinico = () => {
    this.quadroClinico = {
      id: "",
      febre: "",
      dorDeCabeca: "",
      calafrios: "",
      cansaço: "",
      dorDeGarganta: "",
      tosse: "",
      anotacoes: "",
    };
  };

  limparPaciente = () => {
    this.limparQuadroClinico();
    runInAction("limpando", () => {
      this.paciente = {
        id: "",
        nome: "",
        sexo: "",
        peso: "",
        idade: "",
        tipoSanguineo: "",
        altura: "",
        quadroClinico: this.quadroClinico,
      };
    });
  };

  @action setIdPaciente = () => {
    this.paciente = { ...this.paciente, ["id"]: uuid() };
  };

  @action handleInputChangePaciente = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;

    this.paciente = { ...this.paciente, [name]: value };
  };

  @action handleInputChangeQuadroClinico = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;

    this.quadroClinico = { ...this.quadroClinico, [name]: value };
  };

  @action enviarFormulario = async () => {
    this.submitting = true;
    try {
      await agent.Paciente.create(this.paciente);
      runInAction("enviando formulario", () => {
        this.submitting = false;
      });
    } catch (error) {
      runInAction("erro de envio de formulario", () => {
        this.submitting = false;
      });
      console.log(error);
    }
  };
}

export default createContext(new ResgateStore());
