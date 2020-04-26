import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Form } from "semantic-ui-react";
import HospitalStore from "../../app/stores/hospitalStore";

const FormularioVaga = () => {
    const hospitalStore = useContext(HospitalStore);
    const {vaga, handleInputChangeVaga} = hospitalStore;
  return (
    <Form>
      <Form.Group widths={2}>
        <Form.Field>
          <label>Nome</label>
          <Form.Input
            onChange={(e) => handleInputChangeVaga(e)}
            name="nomeDoHospital"
            placeholder="Nome do Hospital"
            value={vaga.nomeDoHospital}
          />
        </Form.Field>
        <Form.Field>
          <label>Sexo</label>
          <Form.Input
            onChange={(e) => handleInputChangeVaga(e)}
            name="endereco"
            placeholder="Endereço"
            value={vaga.endereco}
          />
        </Form.Field>
      </Form.Group>
    </Form>
  );
};

export default observer(FormularioVaga);
