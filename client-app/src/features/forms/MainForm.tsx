import React, { FormEvent } from "react";
import { Button, Grid } from "semantic-ui-react";
import { PacienteForm } from "./PacienteForm";
import { IPaciente } from "../../app/models/Paciente";
import { QuadroClinicoForm } from "./QuadroClinicoForm";
import { IQuadroClinico } from "../../app/models/QuadroClinico";

interface IProps {
  createPaciente: (paciente: IPaciente) => void;
  createQuadroClinico: (quadroClinico: IQuadroClinico) => void;
  handleOpenQuadroClinicoForm: () => void;
  visibilidadeQuadroClinicoForm: boolean;
  handleOpenPacienteForm: () => void;
  visibilidadePacienteForm: boolean;
  handleInputChangeQuadroClinico: (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  quadroClinico: IQuadroClinico;
  handleInputChangePaciente: (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  paciente: IPaciente;
}

export const MainForm: React.FC<IProps> = ({
  createPaciente,
  handleOpenQuadroClinicoForm,
  visibilidadeQuadroClinicoForm,
  handleOpenPacienteForm,
  visibilidadePacienteForm,
  createQuadroClinico,
  handleInputChangeQuadroClinico,
  quadroClinico,
  handleInputChangePaciente,
  paciente,
}) => {
  return (
    <Grid>
      <Grid.Row>
        <Button
          onClick={handleOpenQuadroClinicoForm}
          positive
          content="Quadro Clínico"
        />
      </Grid.Row>
      <Grid.Row>
        {visibilidadeQuadroClinicoForm && (
          <QuadroClinicoForm
            createQuadroClinico={createQuadroClinico}
            handleInputChange={handleInputChangeQuadroClinico}
            quadroClinico={quadroClinico}
          />
        )}
      </Grid.Row>
      <Grid.Row>
        <Button onClick={handleOpenPacienteForm} positive content="Paciente" />
      </Grid.Row>
      <Grid.Row>
        {visibilidadePacienteForm && (
          <PacienteForm
            createPaciente={createPaciente}
            handleInputChange={handleInputChangePaciente}
            paciente={paciente}
          />
        )}
      </Grid.Row>
    </Grid>
  );
};
