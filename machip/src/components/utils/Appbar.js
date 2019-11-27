import React, { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Collapse } from 'reactstrap';

const Appbar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Navbar color='faded' light>
      <NavbarToggler onClick={toggleNavbar} className='mr-2' />
      <NavbarBrand href='/'>MaChip</NavbarBrand>
      <Collapse isOpen={!collapsed} navbar>
        <Nav vertical navbar>
          <NavItem>
            <NavLink href='/components/'>Components</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='https://github.com/reactstrap/reactstrap'>GitHub</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Appbar