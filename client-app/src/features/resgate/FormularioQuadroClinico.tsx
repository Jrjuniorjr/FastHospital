import React, { useState, FormEvent, useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Form } from "semantic-ui-react";
import ResgateStore from "../../app/stores/resgateStore";

const FormularioQuadroClinico = () => {
  const resgateStore = useContext(ResgateStore);
  const { quadroClinico, handleInputChangeQuadroClinico } = resgateStore;

  return (
    <Form>
      <Form.Group widths={2}>
        <Form.Field>
          <label>Febre</label>
          <Form.Input
            onChange={(e) => handleInputChangeQuadroClinico(e)}
            name="febre"
            placeholder="Febre"
            value={quadroClinico.febre}
          />
        </Form.Field>
        <Form.Field>
          <label>Dor de Cabeça</label>
          <Form.Input
            onChange={(e) => handleInputChangeQuadroClinico(e)}
            name="dorDeCabeca"
            placeholder="Dor de Cabeça"
            value={quadroClinico.dorDeCabeca}
          />
        </Form.Field>
      </Form.Group>

      <Form.Group widths={2}>
        <Form.Field>
          <label>Calafrios</label>
          <Form.Input
            onChange={(e) => handleInputChangeQuadroClinico(e)}
            name="calafrios"
            placeholder="Calafrios"
            value={quadroClinico.calafrios}
          />
        </Form.Field>
        <Form.Field>
          <label>Cansaço</label>
          <Form.Input
            onChange={(e) => handleInputChangeQuadroClinico(e)}
            name="cansaço"
            placeholder="Cansaço"
            value={quadroClinico.cansaço}
          />
        </Form.Field>
      </Form.Group>

      <Form.Group widths={1}>
        <Form.Field>
          <label>Dor de Garganta</label>
          <Form.Input
            onChange={(e) => handleInputChangeQuadroClinico(e)}
            name="dorDeGarganta"
            placeholder="Dor de Garganta"
            value={quadroClinico.dorDeGarganta}
          />
        </Form.Field>
        <Form.Field>
          <label>Tosse</label>
          <Form.Input
            onChange={(e) => handleInputChangeQuadroClinico(e)}
            name="tosse"
            value={quadroClinico.tosse}
            placeholder="Tosse"
          />
        </Form.Field>
      </Form.Group>

      <Form.Group widths={1}>
        <Form.Field>
          <label>Anotações</label>
          <Form.TextArea
            onChange={(e) => handleInputChangeQuadroClinico(e)}
            name="Anotações"
            rows={2}
            placeholder="Anotações"
            value={quadroClinico.anotacoes}
          />
        </Form.Field>
      </Form.Group>
    </Form>
  );
};

export default observer(FormularioQuadroClinico);
