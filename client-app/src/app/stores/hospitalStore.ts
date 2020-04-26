import { observable, action, computed, configure, runInAction } from "mobx";
import { createContext, SyntheticEvent, FormEvent } from "react";
import agent from "../api/agent";
import { IPaciente } from "../modelos/Paciente";

configure({ enforceActions: "always" });

class HospitalStore {
  @observable submitting = false;
  @observable loadingInitial = false;
  @observable pacientes = new Map();
  @observable target = "";
  @observable paciente: IPaciente | undefined;

  @action loadPacientes = () => {
    let quadroClinico = {
      id: "",
      febre: "",
      dorDeCabeca: "",
      calafrios: "",
      cansaço: "",
      dorDeGarganta: "",
      tosse: "",
      anotacoes: "muita dor de barriga, o carinha foi para uma festinha e cagou a noite toda",
    };
    let paciente1 = {
      id: "1",
      nome: "João",
      sexo: "Masculino",
      peso: "50",
      idade: "12",
      tipoSanguineo: "O+",
      altura: "1.53",
      quadroClinico: quadroClinico,
    };
    let paciente2 = {
      id: "2",
      nome: "XX",
      sexo: "XX",
      peso: "XX",
      idade: "XX",
      tipoSanguineo: "B+",
      altura: "XX",
      quadroClinico: quadroClinico,
    };
    this.pacientes.set(paciente1.id, paciente1);
    this.pacientes.set(paciente2.id, paciente2);
  };

  /*
  @action loadPacientes = async () => {
    this.loadingInitial = true;
    try {
      const activities = await agent.Paciente.list();
      runInAction("loading pacientes", () => {
        this.loadingInitial = false;
      });
    } catch (error) {
      runInAction("load pacientes error", () => {
        this.loadingInitial = false;
      });
      console.log(error);
    }
  };
  */

  @action loadPaciente = async (id: string) => {
    let paciente = this.pacientes.get(id);
    if (paciente) {
      this.paciente = paciente;
    } else {
      this.loadingInitial = true;
      try {
        paciente = await agent.Paciente.details(id);
        runInAction("getting activity", () => {
          this.paciente = paciente;
          this.loadingInitial = false;
        });
      } catch (error) {
        runInAction("get activity error", () => {
          this.loadingInitial = false;
        });
        console.log(error);
      }
    }
  };
  @action deletePaciente = async (
    event: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) => {
    this.submitting = true;
    this.target = event.currentTarget.name;
    console.log(this.target);
    try {
      //await agent.Activities.delete(id);
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
  };
}

export default createContext(new HospitalStore());
