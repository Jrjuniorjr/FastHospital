import React, { useContext } from "react";
import { Grid, Button } from "semantic-ui-react";
import ResgateStore from "../../app/stores/resgateStore";
import { observer } from "mobx-react-lite";
import FormularioQuadroClinico from "./FormularioQuadroClinico";
import FormularioPaciente from "./FormularioPaciente";

const Resgate = () => {
  const resgateStore = useContext(ResgateStore);
  const {
    formularioQuadroClinico,
    abrirFecharFormularioQuadroClinico,
    formularioPaciente,
    abrirFecharFormularioPaciente,
    limparPaciente,
    limparQuadroClinico,
    enviarFormulario,
    submitting
  } = resgateStore;

  return (
    <Grid>
      <Grid.Row>
        <Button
          onClick={abrirFecharFormularioQuadroClinico}
          positive
          content="Quadro Clínico"
        />
        <Button
          onClick={limparQuadroClinico}
          color="grey"
          content="Limpar dados do quadro clinico"
        />
      </Grid.Row>
      <Grid.Row>
        {formularioQuadroClinico && <FormularioQuadroClinico />}
      </Grid.Row>
      <Grid.Row>
        <Button
          onClick={abrirFecharFormularioPaciente}
          positive
          content="Paciente"
        />
        <Button
          onClick={limparPaciente}
          color="grey"
          content="Limpar dados do paciente"
        />
      </Grid.Row>
      <Grid.Row>{formularioPaciente && <FormularioPaciente />}</Grid.Row>
      <Grid.Row>
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
