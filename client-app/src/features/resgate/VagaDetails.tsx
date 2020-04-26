import React, { useContext } from "react";
import { Card, Button } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import ResgateStore from "../../app/stores/resgateStore";
import { RouteComponentProps } from "react-router-dom";
import LoadingComponent from "../../app/layout/LoadingComponent";

const VagaDetails: React.FC<RouteComponentProps> = ({history}) => {
  const resgateStore = useContext(ResgateStore);
  const { vaga, limparVaga } = resgateStore;

  if (resgateStore.loadingInitial) {
    return <LoadingComponent content="Carregando vaga..." />;
  }
  
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>Nome do Hospital: {vaga!.nomeDoHospital}</Card.Header>
        <Card.Meta>
          <span>Endereço: {vaga!.endereco}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Button
          onClick={() => {
            limparVaga()
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
