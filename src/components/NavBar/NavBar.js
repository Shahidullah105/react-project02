import React, { Component, Fragment } from 'react'
import {Container, Nav, Navbar, } from "react-bootstrap";
import logo from '../../asset/images/logo.png'
import '../../asset/css/style.css';

export default class NavBar extends Component {
  render() {
    return (
      <Fragment>
                <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary navmenus">
                    <Container>
                        <Navbar.Brand href="#home"><img src={logo} width={175} height={50}alt="" ></img></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets">HOME</Nav.Link>
                                <Nav.Link href="#deets">SERVICE</Nav.Link>
                                <Nav.Link href="#deets">PORTFOLIO</Nav.Link>
                                <Nav.Link href="#deets">CONTACT</Nav.Link>
                                <Nav.Link href="#deets">BLOG</Nav.Link>
                                <Nav.Link href="#deets">ABOUT US</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
    )
  }
}
