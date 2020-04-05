import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";



export const NavBar = () => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
            <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}}/>
            FastHospital
        </Menu.Item>
      </Container>
    </Menu>
  );
};
