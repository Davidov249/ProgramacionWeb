import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {Navbar, Nav, Container, Button, Form} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'



const navbar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <LinkContainer to="/">
                <Navbar.Brand>Logo</Navbar.Brand>
            </LinkContainer>
            <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav flex" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/service">
                <Nav.Link>Service</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
                </LinkContainer>
                </Nav>
            </Navbar.Collapse>
            <Form inline>
                <Link to="/mread">
                    <Button variant="outline-info">
                        Login
                    </Button>
                </Link>
            </Form>
            </Container>
        </Navbar>
    )
}

export default navbar
