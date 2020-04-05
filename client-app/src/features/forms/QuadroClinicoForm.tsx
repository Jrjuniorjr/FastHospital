import React, { useState, FormEvent } from "react";
import { Form } from "semantic-ui-react";
import { IQuadroClinico } from "../../app/models/QuadroClinico";

interface IProps {
  createQuadroClinico: (quadroClinico: IQuadroClinico) => void;
  handleInputChange: (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  quadroClinico: IQuadroClinico;
}

export const QuadroClinicoForm: React.FC<IProps> = ({
  createQuadroClinico,
  handleInputChange,
  quadroClinico
}) => {

  return (
    <Form>
      <Form.Group widths={2}>
        <Form.Field>
          <label>Febre</label>
          <Form.Input
            onChange={(e) => handleInputChange(e)}
            name="febre"
            placeholder="Febre"
            value={quadroClinico.febre}
          />
        </Form.Field>
        <Form.Field>
          <label>Dor de Cabeça</label>
          <Form.Input
            onChange={(e) => handleInputChange(e)}
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
            onChange={(e) => handleInputChange(e)}
            name="calafrios"
            placeholder="Calafrios"
            value={quadroClinico.calafrios}
          />
        </Form.Field>
        <Form.Field>
          <label>Cansaço</label>
          <Form.Input
            onChange={(e) => handleInputChange(e)}
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
            onChange={(e) => handleInputChange(e)}
            name="dorDeGarganta"
            placeholder="Dor de Garganta"
            value={quadroClinico.dorDeGarganta}
          />
        </Form.Field>
        <Form.Field>
          <label>Tosse</label>
          <Form.Input
            onChange={(e) => handleInputChange(e)}
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
            onChange={(e) => handleInputChange(e)}
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
