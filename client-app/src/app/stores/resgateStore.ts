import { observable, action, computed, configure, runInAction } from "mobx";
import { createContext, SyntheticEvent, FormEvent } from "react";
import agent from "../api/agent";
import { IPaciente } from "../modelos/Paciente";
import { v4 as uuid } from "uuid";
import IEntidadeResponsavel from "../modelos/EntidadeResponsavel";

configure({ enforceActions: "always" });

class ResgateStore {
  @observable formularioPaciente = false;
  @observable submitting = false;
  @observable loadInitial = false;

  @observable entidadeResponsavel: IEntidadeResponsavel = {
    nome: "",
    profissionalResponsavel: "",
  };
  @observable paciente: IPaciente = {
    nome: "",
    sexo: "",
    peso: "",
    idade: "",
    tipoSanguineo: "",
    altura: "",
    quadroClinico: "",
    observações: "",
    entidadeResponsavel: this.entidadeResponsavel,
  };

  @action limparEntidadeResponsavel = () => {
    this.entidadeResponsavel = {
      nome: "",
      profissionalResponsavel: "",
    };
  };

  @action limparPaciente = () => {
    //problema
    this.limparEntidadeResponsavel();
    runInAction("limpando", () => {
      this.paciente = {
        nome: "",
        sexo: "",
        peso: "",
        idade: "",
        tipoSanguineo: "",
        altura: "",
        quadroClinico: "",
        observações: "",
        entidadeResponsavel: this.entidadeResponsavel,
      };
    });
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

    this.entidadeResponsavel = { ...this.entidadeResponsavel, [name]: value };
  };

  @action enviarFormulario = async () => {
    this.submitting = true;
    this.paciente.entidadeResponsavel = this.entidadeResponsavel;
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
