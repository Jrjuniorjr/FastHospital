import React, { useContext } from "react";
import { Message, Button } from "semantic-ui-react";
import ResgateStore from "../../app/stores/resgateStore";
import HospitalStore from "../../app/stores/hospitalStore";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

const ErrorMessage = () => {
  const resgateStore = useContext(ResgateStore);
  const {
    limparError: limparErrorResgate,
    erroMessage: messageErrorResgate,
    link: linkResgate,
    erro: erroResgate,
  } = resgateStore;

  const hospitalStore = useContext(HospitalStore);
  const {
    limparError: limparErrorHospital,
    erroMessage: messageErrorHospital,
    link: linkHospital,
    erro: erroHospital,
  } = hospitalStore;
  if (erroHospital) {
    return (
      <Message negative>
        <Message.Header>{messageErrorHospital}</Message.Header>
        <Button
          onClick={limparErrorHospital}
          as={Link}
          to={linkHospital}
          content="Ok"
        ></Button>
      </Message>
    );
  }
  if (erroResgate) {
    return (
      <Message negative>
        <Message.Header>{messageErrorResgate}</Message.Header>
        <Button
          onClick={limparErrorResgate}
          as={Link}
          to={linkResgate}
          content="Ok"
        ></Button>
      </Message>
    );
  }
  return (<div></div>)
};

export default observer(ErrorMessage);
