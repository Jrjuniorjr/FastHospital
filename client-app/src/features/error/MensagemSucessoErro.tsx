import React, { useContext } from "react";
import { Message, Button } from "semantic-ui-react";
import ResgateStore from "../../app/stores/resgateStore";
import HospitalStore from "../../app/stores/hospitalStore";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

const MensagemSucessoErro = () => {
  const resgateStore = useContext(ResgateStore);

  const hospitalStore = useContext(HospitalStore);
  
  if (hospitalStore.erroFlag || hospitalStore.sucessFlag) {
    return (
      <Message negative>
        <Message.Header>{hospitalStore.mensagem}</Message.Header>
        <br/>
        <Button
          onClick={hospitalStore.limparButaoOkMensagem}
          as={Link}
          to={hospitalStore.link}
          content="Ok"
        ></Button>
      </Message>
    );
  }
  if (resgateStore.erroFlag) {
    return (
      <Message negative>
        <Message.Header>{resgateStore.mensagem}</Message.Header>
        <br/>
        <Button
          onClick={resgateStore.limparButaoOkMensagem}
          as={Link}
          to={resgateStore.link}
          content="Ok"
        ></Button>
      </Message>
    );
  }
  return (<div></div>)
};

export default observer(MensagemSucessoErro);
