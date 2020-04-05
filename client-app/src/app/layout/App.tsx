import React, {
  useState,
  useEffect,
  Fragment,
  SyntheticEvent,
  FormEvent,
} from "react";
import { Container } from "semantic-ui-react";
import { NavBar } from "../../nav/NavBar";
import { MainForm } from "../../features/forms/MainForm";
import { IPaciente } from "../models/Paciente";
import { IQuadroClinico } from "../models/QuadroClinico";
import { v4 as uuid } from "uuid";

const App = () => {
  const [
    visibilidadeQuadroClinicoForm,
    setVisibilidadeQuadroClinicoForm,
  ] = useState(true);
  const [visibilidadePacienteForm, setVisibilidadePacienteForm] = useState(
    false
  );

  const initializeFormPaciente = () => {
    return {
      id: uuid(),
      nome: "",
      sexo: "",
      peso: "",
      idade: "",
      tipoSanguineo: "",
      altura: "",
    };
  };

  const initializeFormQuadroClinico = () => {
    return {
      id: uuid(),
      febre: "",
      dorDeCabeca: "",
      calafrios: "",
      cansaço: "",
      dorDeGarganta: "",
      tosse: "",
      anotacoes: "",
    };
  };
  const [quadroClinico, setQuadroClinico] = useState<IQuadroClinico>(
    initializeFormQuadroClinico
  );

  const [paciente, setPaciente] = useState<IPaciente>(initializeFormPaciente);

  const handleOpenQuadroClinicoForm = () => {
    setVisibilidadeQuadroClinicoForm(true);
    setVisibilidadePacienteForm(false);
  };
  const handleOpenPacienteForm = () => {
    setVisibilidadePacienteForm(true);
    setVisibilidadeQuadroClinicoForm(false);
  };

  const handleCreateQuadroClinico = (quadroClinico: IQuadroClinico) => {
    setQuadroClinico(quadroClinico);
  };

  const handleCreatePaciente = (paciente: IPaciente) => {
    setPaciente(paciente);
  };

  const handleInputChangeQuadroClinico = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    setQuadroClinico({ ...quadroClinico, [name]: value });
  };

  const handleInputChangePaciente = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    setPaciente({ ...paciente, [name]: value });
  };

  return (
    <Fragment>
      <NavBar />
      <div className="background-main-form">
        <Container style={{ marginTop: "7em" }}>
          <MainForm
            createPaciente={handleCreatePaciente}
            createQuadroClinico={handleCreateQuadroClinico}
            handleOpenPacienteForm={handleOpenPacienteForm}
            visibilidadePacienteForm={visibilidadePacienteForm}
            handleOpenQuadroClinicoForm={handleOpenQuadroClinicoForm}
            visibilidadeQuadroClinicoForm={visibilidadeQuadroClinicoForm}
            handleInputChangeQuadroClinico={handleInputChangeQuadroClinico}
            quadroClinico={quadroClinico}
            handleInputChangePaciente={handleInputChangePaciente}
            paciente={paciente}
          />
        </Container>
      </div>
    </Fragment>
  );
};

export default App;
