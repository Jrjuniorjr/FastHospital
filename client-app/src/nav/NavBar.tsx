import React from "react";
import { Menu, Container, Button, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as={NavLink} exact to="/" header>
        <Icon  name='home' />
         
        </Menu.Item>
        <Menu.Item as={NavLink} to="/resgate" header>
        <Icon  name='ambulance' />
      
        </Menu.Item>
        <Menu.Item as={NavLink} to="/hospital" header>
        <Icon  name='hospital' />
    
        </Menu.Item>
      </Container>
    </Menu>
  );
};
