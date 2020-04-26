import React, { useContext } from "react";
import { Grid, Button, Label } from "semantic-ui-react";
import ResgateStore from "../../app/stores/resgateStore";
import { observer } from "mobx-react-lite";
import FormularioPaciente from "./FormularioPaciente";
import { FormularioEntidadeResponsavel } from "./FormularioEntidadeResponsavel";

const Resgate = () => {
  const resgateStore = useContext(ResgateStore);
  const {
    limparPaciente,
    limparEntidadeResponsavel,
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
            content="LIMPAR DADOS DO PACIENTE"
          />
          <br />
          <FormularioPaciente />
        </Grid.Column>

        <Grid.Column width={8}>
          <h2>Entidade Responsavel</h2>
          <Button
            onClick={limparEntidadeResponsavel}
            color="grey"
            content="LIMPAR DADOS DA ENTIDADE RESPONSAVEL"
          />
          <br />
          <FormularioEntidadeResponsavel />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row centered>
        <Button
          onClick={() => {
            enviarFormulario();
          }}
          positive
          content="ENVIAR FORMULARIO"
          loading={submitting}
        />
      </Grid.Row>
    </Grid>
  );
};

export default observer(Resgate);
