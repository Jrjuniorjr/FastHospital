import React, { useContext } from "react";
import ResgateStore from "../../app/stores/resgateStore";
import { Form } from "semantic-ui-react";
import { observer } from "mobx-react-lite";

const FormularioEntidadeResponsavel = () => {
  const resgateStore = useContext(ResgateStore);
  const {
    entidadeResponsavel,
    handleInputChangeEntidadeResponsavel,
  } = resgateStore;
  return (
    <Form>
      <Form.Group widths={2}>
        <Form.Field>
          <label>Nome</label>
          <Form.Input
            onChange={(e) => handleInputChangeEntidadeResponsavel(e)}
            name="nome"
            placeholder="Nome"
            value={entidadeResponsavel.nome}
          />
        </Form.Field>
        <Form.Field>
          <label>Sexo</label>
          <Form.Input
            onChange={(e) => handleInputChangeEntidadeResponsavel(e)}
            name="profissionalResponsavel"
            placeholder="Profissional Responsavel"
            value={entidadeResponsavel.profissionalResponsavel}
          />
        </Form.Field>
      </Form.Group>
    </Form>
  );
};

export default observer(FormularioEntidadeResponsavel);