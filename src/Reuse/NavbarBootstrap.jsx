import React, { memo } from 'react'
import { Container, Nav, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'

const NavbarBootstrap = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <NavbarBrand href="#home">React-Bootstrap</NavbarBrand>
          <NavbarToggle aria-controls="basic-navbar-nav" />
          <NavbarCollapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="#home">Home</NavLink>
              <NavLink to="#link">Link</NavLink>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </>
  )
}

export default memo(NavbarBootstrap)
