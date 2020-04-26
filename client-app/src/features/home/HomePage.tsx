import React from "react";
import { Container, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Container style={{ marginTop: "7em" }}>
      <h1>Bem vindo ao FastHospital</h1>
      <h3>Selecione uma das opções</h3>
      <Button as={Link} to={"/resgate"} positive content="RESGATE" />
      <Button as={Link} to={"/hospital"} positive content="HOSPITAL" />
    </Container>
  );
};

export default HomePage;
