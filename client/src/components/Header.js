import React from "react";

import {
  Navbar,
  Nav,
  Button,
  Container,
} from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" collapseOnSelect expand="lg">
        <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand href="#">Anı Kutusu</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Nav>
              <LinkContainer to="/create">
                <Nav.Link>
                  <Button variant="outline-info">Bir Anı Paylaş</Button>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
