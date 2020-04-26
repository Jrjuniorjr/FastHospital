import React, { useContext, useState, useEffect } from "react";
import { Segment, Item, Button, Label } from "semantic-ui-react";
import HospitalStore from "../../app/stores/hospitalStore";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
const ListaPaciente = () => {
  const hospitalStore = useContext(HospitalStore);

  const { pacientes, deletePaciente, target, submitting } = hospitalStore;

  return (
    <Segment clearing>
      <Item.Group divided>
        {Array.from(pacientes.values()).map((paciente) => (
          <Item key={paciente.id}>
            <Item.Content>
              <Item.Header>{paciente.nome}</Item.Header>
              <Item.Meta>Idade: {paciente.idade} </Item.Meta>
              <Item.Description>
                Anotações:
                <div>{paciente.quadroClinico.anotacoes}</div>
              </Item.Description>
              <Label basic content={`Peso: ${paciente.peso}`} />
              <Label basic content={`Altura: ${paciente.altura}`} />
              
              <Label
                basic
                content={`Tipo Sanguineo: ${paciente.tipoSanguineo}`}
              />
              <Item.Extra>
                <Button
                  as={Link}
                  to={`/hospital/${paciente.id}`}
                  floated="right"
                  content="View"
                  color="blue"
                />
                <Button
                  name={paciente.id}
                  loading={target === paciente.id && submitting}
                  onClick={(event) => deletePaciente(event, paciente.id)}
                  floated="right"
                  content="Delete"
                  color="red"
                />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};

export default observer(ListaPaciente);
