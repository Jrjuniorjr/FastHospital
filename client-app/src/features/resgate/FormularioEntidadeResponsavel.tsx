import React, { useContext } from "react";
import ResgateStore from "../../app/stores/resgateStore";
import { Form } from "semantic-ui-react";
import { observer } from "mobx-react-lite";

const FormularioEntidadeResponsavel = () => {
  const resgateStore = useContext(ResgateStore);
  const { paciente, handleInputChangePaciente } = resgateStore;
  return (
    <Form>
      <Form.Group widths={2}>
        <Form.Field>
          <label>Nome da Entidade Responsavel</label>
          <Form.Input
            onChange={(e) => handleInputChangePaciente(e)}
            name="nomeDaEntidadeResponsavel"
            placeholder="Nome da Entidade Responsavel"
            value={paciente.nomeDaEntidadeResponsavel}
          />
        </Form.Field>
        <Form.Field>
          <label>Nome do Profissional Responsavel</label>
          <Form.Input
            onChange={(e) => handleInputChangePaciente(e)}
            name="profissionalResponsavel"
            placeholder="Nome do Profissional Responsavel"
            value={paciente.profissionalResponsavel}
          />
        </Form.Field>
      </Form.Group>
    </Form>
  );
};

export default observer(FormularioEntidadeResponsavel);
