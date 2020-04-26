import React, { useContext } from "react";
import { Grid, Button } from "semantic-ui-react";
import FormularioVaga from "./FormularioVaga";
import HospitalStore from "../../app/stores/hospitalStore";
import { observer } from "mobx-react-lite";
import { Link, RouteComponentProps } from "react-router-dom";

const VagaPage: React.FC<RouteComponentProps> = ({ history }) => {
  const hospitalStore = useContext(HospitalStore);
  const { limparVaga, enviarFormulario, submitting } = hospitalStore;

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={8}>
          <h2>Vaga</h2>
          <Button
            onClick={limparVaga}
            color="grey"
            content="LIMPAR DADOS DO PACIENTE"
          />
          <br />
          <FormularioVaga />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row centered>
        <Button
          as={Link}
          to="/hospital"
          onClick={enviarFormulario}
          positive
          content="ENVIAR FORMULARIO"
          /*loading={submitting}*/
        />
      </Grid.Row>
    </Grid>
  );
};

export default observer(VagaPage);
