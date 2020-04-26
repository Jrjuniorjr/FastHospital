import React, { useContext, useState, useEffect } from "react";
import { Segment, Item, Button, Label, ItemExtra } from "semantic-ui-react";
import HospitalStore from "../../app/stores/hospitalStore";
import { observer } from "mobx-react-lite";
const ListaPaciente = () => {
  const hospitalStore = useContext(HospitalStore);

  const { pacientes,/*  recebeuPaciente, */ target, submitting } = hospitalStore;

  return (
    <Segment clearing>
      <Item.Group divided>
        {Array.from(pacientes.values()).map((paciente) => (
          <Item key={paciente.id}>
            <Item.Content>
              <Item.Header>{paciente.nome}</Item.Header>
              <Item.Meta>
                Idade: {paciente.idade}, Sexo: {paciente.sexo}{" "}
              </Item.Meta>
              <Item.Description>
                Quadro Clinico:
                <div>{paciente.quadroClinico}</div>
              </Item.Description>
              <Item.Description>
                Observações:
                <div>{paciente.observacoes}</div>
              </Item.Description>
              <Label basic content={`Peso: ${paciente.peso}`} />
              <Label basic content={`Altura: ${paciente.altura}`} />
              <Label
                basic
                content={`Tipo Sanguineo: ${paciente.tipoSanguineo}`}
              />
              <ItemExtra>
                <Label
                  basic
                  content={`Nome da Entidade Responsavel: ${paciente.entidadeResponsavel.nome}`}
                />
                <Label
                  basic
                  content={`Nome do Profissional Responsavel: ${paciente.entidadeResponsavel.profissionalResponsavel}`}
                />
              </ItemExtra>

              <Item.Extra>
               {/* <Button
                  name={paciente.id}
                  loading={target === paciente.id && submitting}
                  onClick={(event) => recebeuPaciente(event, paciente.id)}
                  floated="right"
                  content="RECEBEU O PACIENTE"
                  positive
               />*/}
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};

export default observer(ListaPaciente);
