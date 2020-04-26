import React, {
  Fragment
} from "react";
import { NavBar } from "../../nav/NavBar";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";
import Resgate from "../../features/resgate/Resgate";
import HomePage from "../../features/home/HomePage";
import Hospital from "../../features/hospital/Hospital";
import VagaPage from "../../features/hospital/VagaPage";
import VagaDetails from "../../features/resgate/VagaDetails";

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/resgate' component={Resgate} />
        <Route exact path='/resgate/vagaEncontrada' component={VagaDetails} />
        <Route exact path='/hospital' component={Hospital}/>
        <Route exact path='/hospital/novaVaga' component={VagaPage}/>
      </Container>
    </Fragment>
  );
};

export default App;
