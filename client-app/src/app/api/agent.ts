import axios, { AxiosResponse } from "axios";
import { IPaciente } from "../modelos/Paciente";
import IVaga from "../modelos/Vaga";

axios.defaults.baseURL = "https://fast-hospital.herokuapp.com/fast-hospital";

const responseBody = (responseBody: AxiosResponse) => responseBody.data;

const sleep = (ms: number) => (response: AxiosResponse) =>
  new Promise<AxiosResponse>((resolve) =>
    setTimeout(() => resolve(response), ms)
  );

const requestsResgateStore = {
  //get: (url: string, body: {}) =>
  // axios.get(url, body).then(sleep(1000)).then(responseBody),
};

const requests = {
  /* get: (url: string, body: {}) =>
    axios.get(url, body).then(sleep(1000)).then(responseBody), */
  post: (url: string, body: {}) =>
    axios.post(url, body).then(sleep(1000)).then(responseBody),
};

const Paciente = {
  //create: (paciente: IPaciente) =>
  //      requestsResgateStore.post("/encontrar-vaga", paciente),

  create: (paciente: IPaciente) =>
    requests.post("/encontrar-vaga", paciente).then((result) => {
      return result;
    }),
};

const Vaga = {
  create: (vaga: IVaga) =>
    requests.post("/cadastrar-vaga", vaga).then((result) => {
      return result;
    }),
  //create: (vaga: IVaga) => requestsHospitalStore.post("/cadastrar-vaga", vaga).then(result => {return result}),
};

export default {
  Paciente,
  Vaga,
};
