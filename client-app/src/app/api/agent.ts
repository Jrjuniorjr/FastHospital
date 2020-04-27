import axios, { AxiosResponse } from "axios";
import { IPaciente } from "../modelos/Paciente";
import IVaga from "../modelos/Vaga";

axios.defaults.baseURL = "http://localhost:8080/fast-hospital";

const responseBody = (responseBody: AxiosResponse) => responseBody.data;

const sleep = (ms: number) => (response: AxiosResponse) =>
  new Promise<AxiosResponse>((resolve) =>
    setTimeout(() => resolve(response), ms)
  );

const requestsResgateStore = {
  get: (url: string, body: {}) =>
    axios.get(url, body).then(sleep(1000)).then(responseBody),
};

const requestsHospitalStore = {
  get: (url: string) => axios.get(url).then(sleep(1000)).then(responseBody),
  post: (url: string, body: {}) =>
    axios.post(url, body).then(sleep(1000)).then(responseBody),
  del: (url: string) => axios.delete(url).then(sleep(1000)).then(responseBody),
};

const Paciente = {
  create: (paciente: IPaciente) =>
    requestsResgateStore.get("/encontrar-vaga", paciente),
  list: (): Promise<IPaciente[]> => requestsHospitalStore.get("/pacientes"),
  delete: (id: string) => requestsHospitalStore.del(`activities/${id}`),
};

const Vaga = {
  create: (vaga: IVaga) => requestsHospitalStore.post("/cadastrar-vaga", vaga),
};

export default {
  Paciente,
  Vaga,
};
