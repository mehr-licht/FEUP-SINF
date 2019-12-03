import React, { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Collapse } from 'reactstrap';

const Appbar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  
  const styles = { backgroundColor: '#282c34',width: props.width ,align:'left', position: 'absolute',paddingBottom:'0.3em', right:props.right};

  return (
    <Navbar style = {styles} light>
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