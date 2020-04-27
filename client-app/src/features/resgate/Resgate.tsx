import React, { useContext } from "react";
import { Grid, Button, Label } from "semantic-ui-react";
import ResgateStore from "../../app/stores/resgateStore";
import { observer } from "mobx-react-lite";
import FormularioPaciente from "./FormularioPaciente";
import FormularioEntidadeResponsavel from "./FormularioEntidadeResponsavel";
import { Link } from "react-router-dom";

const Resgate = () => {
  const resgateStore = useContext(ResgateStore);
  const {
    limparPaciente,
    enviarFormulario,
    submitting,
  } = resgateStore;

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={8}>
          <h2>Paciente</h2>
          <Button
            onClick={limparPaciente}
            color="grey"
            content="LIMPAR DADOS"
          />
          <br />
          <br />
          <FormularioPaciente />
        </Grid.Column>

        <Grid.Column width={8}>
          <h2>Entidade Responsavel</h2>
          <br />
          <br />
          <FormularioEntidadeResponsavel />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row centered>
        <Button
          onClick={() => {
            enviarFormulario();
          }}
          as={Link}
          to="/resgate/vagaEncontrada"
          positive
          content="ENVIAR FORMULARIO"
          /* loading={submitting} */
        />
      </Grid.Row>
    </Grid>
  );
};

export default observer(Resgate);
