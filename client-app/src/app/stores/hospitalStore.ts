import { observable, action, configure, runInAction } from "mobx";
import { createContext, SyntheticEvent, FormEvent } from "react";
import agent from "../api/agent";
import { IPaciente } from "../modelos/Paciente";
import IVaga from "../modelos/Vaga";
import MensagemSucessoErro from "../../features/error/MensagemSucessoErro";

configure({ enforceActions: "always" });

class HospitalStore {
  @observable formularioPaciente = false;
  @observable submitting = false;
  @observable loadingInitial = false;
  @observable pacientes = new Map();
  @observable target = "";
  @observable link = "";
  @observable paciente: IPaciente | undefined;
  @observable mensagem = "";
  @observable erroFlag = false;
  @observable sucessFlag = false;
  

  @observable vaga: IVaga = {
    nomeDoHospital: "",
    endereco: "",
    codigo:"",
    profissionalResponsavel: "",
    emailDoProfissional: "",
  };

  @action limparVaga = () => {
    this.vaga = {
      nomeDoHospital: "",
      endereco: "",
      codigo:"",
      profissionalResponsavel: "",
      emailDoProfissional: "",
    };
  };

  @action handleInputChangeVaga = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;

    this.vaga = { ...this.vaga, [name]: value };
  };

  @action enviarFormulario = async () => {
    this.loadingInitial = true;
    try {
      let messageLocal= await agent.Vaga.create(this.vaga);
      runInAction("enviando formulario", () => {
        this.loadingInitial = false;
        this.sucessFlag = true;
        this.mensagem = messageLocal;
      });
    } catch (error) {
      runInAction("erro de envio de formulario", () => {
        this.loadingInitial = false;
        this.erroFlag = true;
        this.link = "/hospital/novaVaga";
        this.mensagem = error.message;
      });
      console.log(error);
    }
  };
  @action limparButaoOkMensagem = () => {
    this.erroFlag = false;
    this.mensagem = "";
    this.link = "";
    this.sucessFlag = false;
  };

  /*@action loadPacientes = () => {
    let entidadeResponsavel = {
      nome: "XYY",
      profissionalResponsavel: "XXYY",
    };
    let paciente1 = {
      id: "1",
      nome: "João",
      sexo: "Masculino",
      peso: "50",
      idade: "12",
      tipoSanguineo: "O+",
      altura: "1.53",
      quadroClinico: "ola",
      observações: "td bem?",
      entidadeResponsavel: entidadeResponsavel,
    };
    let paciente2 = {
      id: "2",
      nome: "XX",
      sexo: "XX",
      peso: "XX",
      idade: "XX",
      tipoSanguineo: "B+",
      altura: "XX",
      quadroClinico: "ola",
      observações: "td bem?",
      entidadeResponsavel: entidadeResponsavel,
    };
    this.pacientes.set(paciente1.id, paciente1);
    this.pacientes.set(paciente2.id, paciente2);
  }; 

  /* @action loadPacientes = async () => {
    this.loadingInitial = true;
    try {
      const pacientes = await agent.Paciente.list();
      runInAction("loading activities", () => {
        pacientes.forEach((paciente) => {
          this.pacientes.set(paciente.id, paciente);
        });
        this.loadingInitial = false;
      });
    } catch (error) {
      runInAction("load activities error", () => {
        this.loadingInitial = false;
      });
      console.log(error);
    }
  };
 
  @action recebeuPaciente = async (
    event: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) => {
    this.submitting = true;
    this.target = event.currentTarget.name;
    console.log(this.target);
    try {
      //await agent.Paciente.delete(id);
      runInAction("deleting activity", () => {
        this.pacientes.delete(id);
        this.submitting = false;
        this.target = "";
      });
    } catch (error) {
      runInAction("delete activity error", () => {
        this.submitting = false;
        this.target = "";
      });
      console.log(error);
    }
  };*/
}

export default createContext(new HospitalStore());
