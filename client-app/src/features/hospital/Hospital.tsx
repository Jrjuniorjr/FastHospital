import React, { useContext, useEffect } from "react";
import { Grid, Button } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import ListaPacientes from "./ListaPacientes";
import { Link } from "react-router-dom";
import HospitalStore from "../../app/stores/hospitalStore";
import LoadingComponent from "../../app/layout/LoadingComponent";
import MensagemSucessoErro from "../error/MensagemSucessoErro";

const Hospital = () => {
   const hospitalStore = useContext(HospitalStore);
  /*useEffect(() => {
    hospitalStore.loadPacientes();
  }, [hospitalStore]);
*/
  if (hospitalStore.loadingInitial) {
    return <LoadingComponent content="Enviando vaga..." />;
  }

  
  if (hospitalStore.erroFlag || hospitalStore.sucessFlag) {
    return <MensagemSucessoErro />;
  }
  return (
    <Grid>
      {/* <Grid.Column width={10}>
        <ListaPacientes />
      </Grid.Column>
       */}

      <Grid.Column width={6}>
        <Button
          as={Link}
          to="/hospital/novaVaga"
          positive
          content="CRIAR NOVA VAGA"
        />
      </Grid.Column>
    </Grid>
  );
};

export default observer(Hospital);
