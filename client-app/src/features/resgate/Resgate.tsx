import React, { useContext } from "react";
import { Grid, Button } from "semantic-ui-react";
import ResgateStore from "../../app/stores/resgateStore";
import { observer } from "mobx-react-lite";
import FormularioQuadroClinico from "./FormularioQuadroClinico";
import FormularioPaciente from "./FormularioPaciente";

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
          <Button
            onClick={limparPaciente}
            color="grey"
            content="Limpar dados do paciente"
          />
          <br />
          <FormularioPaciente />
        </Grid.Column>

        <Grid.Column width={8}>
          <Button
            onClick={limparEntidadeResponsavel}
            color="grey"
            content="Limpar dados do quadro clinico"
          />
          <br />
          <FormularioQuadroClinico />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row centered>
        <Button
          onClick={() => {
            enviarFormulario();
          }}
          positive
          content="Enviar formulario"
          loading={submitting}
        />
      </Grid.Row>
    </Grid>
  );
};

export default observer(Resgate);
