import React, { useEffect, useContext } from "react";
import { Grid } from "semantic-ui-react";
import HospitalStore from "../../app/stores/hospitalStore";
import { observer } from "mobx-react-lite";
import ListaPaciente from "./ListaPaciente";

const HospitalDashBoard = () => {
  const hospitalStore = useContext(HospitalStore);
  useEffect(() => {
    hospitalStore.loadPacientes();
  }, [hospitalStore]);

  return (
    <Grid centered>
      <Grid.Column width={10}>
        <ListaPaciente />
      </Grid.Column>

    </Grid>
  );
};

export default observer(HospitalDashBoard);
