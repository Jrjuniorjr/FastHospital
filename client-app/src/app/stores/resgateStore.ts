import { observable, action, configure, runInAction } from "mobx";
import { createContext, FormEvent } from "react";
import agent from "../api/agent";
import { IPaciente } from "../modelos/Paciente";
import IVaga from "../modelos/Vaga";

configure({ enforceActions: "always" });

class ResgateStore {
  @observable formularioPaciente = false;
  @observable submitting = false;
  @observable mensagem = "";
  @observable link = "";
  @observable loadingInitial = false;
  @observable erroFlag = false;
  @observable vaga: IVaga = {
    nomeDoHospital: "",
    endereco: "",
    codigo: "",
    profissionalResponsavel: "",
    emailDoProfissional: "",
  };

  @observable paciente: IPaciente = {
    nome: "",
    sexo: "",
    peso: "",
    idade: "",
    tipoSanguineo: "",
    altura: "",
    quadroClinico: "",
    observacoes: "",
    nomeDaEntidadeResponsavel: "",
    profissionalResponsavel: "",
  };

  @action limparVaga = () => {
    this.vaga = {
      nomeDoHospital: "",
      endereco: "",
      codigo: "",
      profissionalResponsavel: "",
      emailDoProfissional: "",
    };
  };

  @action limparPaciente = () => {
    runInAction("limpando", () => {
      this.paciente = {
        nome: "",
        sexo: "",
        peso: "",
        idade: "",
        tipoSanguineo: "",
        altura: "",
        quadroClinico: "",
        observacoes: "",
        nomeDaEntidadeResponsavel: "",
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
    try {
      let vaga = await agent.Paciente.create(this.paciente);
      runInAction("enviando formulario", () => {
        /* this.submitting = false; */
        this.vaga = vaga;
        this.loadingInitial = false;
        this.limparPaciente();
      });
    } catch (error) {
      runInAction("erro de envio de formulario", () => {
        this.loadingInitial = false;
        this.erroFlag = true;
        this.link = "/resgate";
        if (error.message === "Request failed with status code 404") {
          this.mensagem = "Não há vagas disponiveis no momento";
        } else {
          this.mensagem = error.message;
        }
        /* this.submitting = false; */
      });
      console.log(error);
    }
  };

  @action limparButaoOkMensagem = () => {
    this.erroFlag = false;
    this.mensagem = "";
    this.link = "";
  };
}

export default createContext(new ResgateStore());
