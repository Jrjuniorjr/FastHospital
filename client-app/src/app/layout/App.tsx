import React, {
  Fragment
} from "react";
import { NavBar } from "../../nav/NavBar";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";
import Resgate from "../../features/resgate/Resgate";
import HomePage from "../../features/home/HomePage";

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <Route exact path='/' component={HomePage}/>
        <Route path='/resgate' component={Resgate} />
      </Container>
    </Fragment>
  );
};

export default App;
