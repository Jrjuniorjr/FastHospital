import React, { useContext } from 'react'
import ResgateStore from "../../app/stores/resgateStore";
import { Form } from 'semantic-ui-react';

export const FormularioEntidadeResponsavel = () => {
    const resgateStore = useContext(ResgateStore)
    return (
        <Form>
        <Form.Group widths={2}>
          <Form.Field>
            <label>Nome</label>
            <Form.Input
              onChange={(e) => handleInputChangeEntidadeResponsavel(e)}
              name="nome"
              icon="user"
              placeholder="Nome"
              value={paciente.nome}
            />
          </Form.Field>
          <Form.Field>
            <label>Sexo</label>
            <Form.Input
              onChange={(e) => handleInputChangeEntidadeResponsavel(e)}
              name="sexo"
              placeholder="Sexo"
              value={paciente.sexo}
            />
          </Form.Field>
        </Form.Group>
  
        )
}
