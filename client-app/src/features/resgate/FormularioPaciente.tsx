import React, { useState, FormEvent, useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Form } from "semantic-ui-react";
import ResgateStore from "../../app/stores/resgateStore";

const FormularioPaciente = () => {
  const resgateStore = useContext(ResgateStore);
  const { paciente, handleInputChangePaciente } = resgateStore;

  return (
    <Form>
      <Form.Group widths={2}>
        <Form.Field>
          <label>Nome</label>
          <Form.Input
            onChange={(e) => handleInputChangePaciente(e)}
            name="nome"
            placeholder="Nome"
            value={paciente.nome}
          />
        </Form.Field>
        <Form.Field>
          <label>Sexo</label>
          <Form.Input
            onChange={(e) => handleInputChangePaciente(e)}
            name="sexo"
            placeholder="Sexo"
            value={paciente.sexo}
          />
        </Form.Field>
      </Form.Group>

      <Form.Group widths={2}>
        <Form.Field>
          <label>Peso</label>
          <Form.Input
            onChange={(e) => handleInputChangePaciente(e)}
            name="peso"
            placeholder="Peso"
            value={paciente.peso}
          />
        </Form.Field>
        <Form.Field>
          <label>Idade</label>
          <Form.Input
            onChange={(e) => handleInputChangePaciente(e)}
            name="idade"
            icon="age"
            placeholder="Idade"
            value={paciente.idade}
          />
        </Form.Field>
      </Form.Group>

      <Form.Group widths={2}>
        <Form.Field>
          <label>Tipo Sanguineo</label>
          <Form.Input
            onChange={(e) => handleInputChangePaciente(e)}
            name="tipoSanguineo"
            placeholder="Tipo Sanguineo"
            value={paciente.tipoSanguineo}
          />
        </Form.Field>
        <Form.Field>
          <label>Altura</label>
          <Form.Input
            onChange={(e) => handleInputChangePaciente(e)}
            name="altura"
            value={paciente.altura}
            placeholder="Altura"
          />
        </Form.Field>
      </Form.Group>
      <Form.Group widths={2}>
        <Form.Field>
          <label>Quadro Clinico</label>
          <Form.TextArea
            onChange={(e) => handleInputChangePaciente(e)}
            name="quadroClinico"
            rows={2}
            placeholder="Quadro Clininico"
            value={paciente.quadroClinico}
          />
        </Form.Field>
        <Form.Field>
          <label>Observações</label>
          <Form.TextArea
            onChange={(e) => handleInputChangePaciente(e)}
            name="observacoes"
            rows={2}
            placeholder="Observações"
            value={paciente.observacoes}
          />
        </Form.Field>
      </Form.Group>
    </Form>
  );
};

export default observer(FormularioPaciente);
