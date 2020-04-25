import axios, { AxiosResponse } from 'axios';
import { IPaciente } from '../modelos/Paciente';

axios.defaults.baseURL = 'http://localhost:5000/api';

const responseBody = (responseBody: AxiosResponse) => responseBody.data;
 
const sleep = (ms: number) => (response: AxiosResponse) => 
new Promise<AxiosResponse>(resolve => setTimeout(() => resolve(response), ms));

const requests = {
    get: (url: string) => axios.get(url).then(sleep(1000)).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(sleep(1000)).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(sleep(1000)).then(responseBody),
    del: (url: string) => axios.delete(url).then(sleep(1000)).then(responseBody) 
}

const Paciente = {
    create: (paciente: IPaciente) => requests.post('activities', paciente),
}

export default{
    Paciente
}