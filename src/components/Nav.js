import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar sticky="top" expand="md" className="">
        <div className="container">
        <NavbarBrand href="/">EW Logo</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <div className="">
          <Nav className="navItems ml-4" navbar>
            <NavItem>
              <NavLink className="nav-link" href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" href="/portfolio">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" href="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
          </div>
        </Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default Navigation;