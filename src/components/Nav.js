import React, { useState } from 'react';
import {
  Button,
  Collapse,
  Media,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar sticky='top' expand='md'>
        <NavbarBrand href='/'>
          <Media width='40vw' height='40vw' src={require('../assets/EWMLogoSolo.png')}/>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='navItems ml-auto' navbar>
            <NavItem>
              <NavLink className='nav-link' href='/'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='nav-link' href='/about'>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='nav-link' href='/portfolio'>Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='nav-link' href='/Contact'>Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;