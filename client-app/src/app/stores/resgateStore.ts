import { observable, action, configure, runInAction } from "mobx";
import { createContext, FormEvent } from "react";
import agent from "../api/agent";
import { v4 as uuid } from "uuid";
import { IPaciente } from "../modelos/Paciente";
import IVaga from "../modelos/Vaga";
import { Link, RouteComponentProps } from "react-router-dom";

configure({ enforceActions: "always" });

class ResgateStore {
  @observable formularioPaciente = false;
  @observable submitting = false;
  @observable erroMessage = "";
  @observable link = "";
  @observable loadingInitial = false;
  @observable erro = false;
  @observable vaga: IVaga = {
    nomeDoHospital: "",
    endereco: "",
    profissionalResponsavel: "",
    emailDoProfissional: "",
  };

  @observable paciente: IPaciente = {
    id: "",
    nome: "",
    sexo: "",
    peso: "",
    idade: "",
    tipoSanguineo: "",
    altura: "",
    quadroClinico: "",
    observacoes: "",
    nomeEntidadeResponsavel: "",
    profissionalResponsavel: "",
  };

  @action limparVaga = () => {
    this.vaga = {
      nomeDoHospital: "",
      endereco: "",
      profissionalResponsavel: "",
      emailDoProfissional: "",
    };
  };

  @action limparPaciente = () => {
    runInAction("limpando", () => {
      this.paciente = {
        id: "",
        nome: "",
        sexo: "",
        peso: "",
        idade: "",
        tipoSanguineo: "",
        altura: "",
        quadroClinico: "",
        observacoes: "",
        nomeEntidadeResponsavel: "",
        profissionalResponsavel: "",
      };
    });
  };

  @action handleInputChangePaciente = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;

    this.paciente = { ...this.paciente, [name]: value };
  };


  @action enviarFormulario = async () => {
    /* this.submitting = true; */
    this.loadingInitial = true;
    this.paciente.id = uuid();
    try {
      this.vaga = await agent.Paciente.create(this.paciente);
      runInAction("enviando formulario", () => {
        /* this.submitting = false; */
        this.loadingInitial = false;
        this.limparPaciente();
      });
    } catch (error) {
      runInAction("erro de envio de formulario", () => {
        this.loadingInitial = false;
        this.erro = true;
        this.link = "/resgate";
        this.erroMessage = error.message;
        /* this.submitting = false; */
      });
      console.log(error);
    }
  };

  @action limparError = () => {
    this.erro = false;
    this.erroMessage = "";
    this.link = "";
  };
}

export default createContext(new ResgateStore());
