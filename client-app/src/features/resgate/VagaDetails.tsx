import React, { useContext } from "react";
import { Card, Button } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import ResgateStore from "../../app/stores/resgateStore";
import { RouteComponentProps } from "react-router-dom";
import LoadingComponent from "../../app/layout/LoadingComponent";
import ErrorMessage from "../error/ErrorMessage";

const VagaDetails: React.FC<RouteComponentProps> = ({ history }) => {
  const resgateStore = useContext(ResgateStore);
  const { vaga, limparVaga, erro } = resgateStore;

  if (resgateStore.loadingInitial) {
    return <LoadingComponent content="Carregando vaga..." />;
  }
  if (erro) {
    return <ErrorMessage />;
  }

  return (
    <Card fluid>
      <Card.Content>
        <h2>Vaga Encontrada</h2>
        <br/>
        <Card.Header>
          <span>Nome do Hospital: {vaga!.nomeDoHospital}</span>
        </Card.Header>
        <br/>
        <Card.Header>
          <span>Endereço: {vaga!.endereco}</span>
        </Card.Header>
        <Card.Header>
          <span>Profissional Responsavel: {vaga!.profissionalResponsavel}</span>
        </Card.Header>
        <Card.Header>
          <span>Email do Profissional Responsavel: {vaga!.emailDoProfissional}</span>
        </Card.Header>
      </Card.Content>
      <Card.Content extra>
        <Button
          onClick={() => {
            limparVaga();
            history.push("/resgate");
          }}
          basic
          color="grey"
          content="VOLTAR"
        />
      </Card.Content>
    </Card>
  );
};

export default observer(VagaDetails);
