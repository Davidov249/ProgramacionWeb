import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {Navbar, Nav, Container, Button, Form} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'



const navbar = () => {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand><Link to="/">Logo</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav flex" />
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/service">
                <Nav.Link>Service</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
            </Nav>
            <Form inline>
                <Link to="/mread">
                  <Button variant="outline-info">Login</Button>
                </Link>
              </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default navbar
