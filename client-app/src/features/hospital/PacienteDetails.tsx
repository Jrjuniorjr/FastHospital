import React, { useContext, useEffect } from "react";
import { Card, Button, ButtonGroup } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import HospitalStore from "../../app/stores/hospitalStore";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { RouteComponentProps } from "react-router-dom";

interface DetailParams {
  id: string;
}

const PacienteDetails: React.FC<RouteComponentProps<DetailParams>> = ({
  match,
  history,
}) => {
  const hospitalStore = useContext(HospitalStore);
  const { paciente, loadingInitial, loadPaciente } = hospitalStore;

  useEffect(() => {
    loadPaciente(match.params.id);
  }, [loadPaciente]);

  if (loadingInitial || !paciente)
    return <LoadingComponent content="Loading activity..." />;

  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>{paciente!.nome}</Card.Header>
        <Card.Meta>
          <span>Idade: {paciente!.idade}</span>
        </Card.Meta>

        <Card.Meta>
          <span>Peso: {paciente!.peso}</span>
        </Card.Meta>

        <Card.Meta>
          <span>Altura: {paciente!.altura}</span>
        </Card.Meta>

        <Card.Meta>
          <span>Sexo: {paciente!.sexo}</span>
        </Card.Meta>

        <Card.Meta>
          <span>Tipo Sanguíneo: {paciente!.tipoSanguineo}</span>
        </Card.Meta>

        <Card.Meta>
          <span>Tosse: {paciente!.quadroClinico.tosse}</span>
        </Card.Meta>

        <Card.Meta>
          <span>Febre: {paciente!.quadroClinico.febre}</span>
        </Card.Meta>

        <Card.Meta>
          <span>Dor de Garganta: {paciente!.quadroClinico.dorDeGarganta}</span>
        </Card.Meta>

        <Card.Meta>
          <span>Dor de Cabeça: {paciente!.quadroClinico.dorDeCabeca}</span>
        </Card.Meta>

        <Card.Meta>
          <span>Cansaço: {paciente!.quadroClinico.cansaço}</span>
        </Card.Meta>

        <Card.Meta>
          <span>Calafrios: {paciente!.quadroClinico.calafrios}</span>
        </Card.Meta>  

        <Card.Description>{paciente!.quadroClinico.anotacoes}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <ButtonGroup widths={2}>
          <Button positive content="Aceitar" />
          <Button
            onClick={() => history.push("/hospital")}
            basic
            color="grey"
            content="Cancel"
          />
        </ButtonGroup>
      </Card.Content>
    </Card>
  );
};

export default observer(PacienteDetails);
