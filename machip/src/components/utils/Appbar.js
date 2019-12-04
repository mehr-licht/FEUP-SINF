import React, { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Collapse, ModalBody,Modal, Button } from 'reactstrap';

import Login from "./Login/Login";
const Appbar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);


  const styles = { backgroundColor: '#282c34', width: props.width, align: 'left', position: 'absolute', paddingBottom: '0.3em', right: props.right };
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <Navbar style={styles} light>
      <NavbarToggler onClick={toggleNavbar} className='mr-2' />
      <NavbarBrand href='/'>MaChip</NavbarBrand>
      <Button style={{ position: 'relative'}} color="success" onClick={toggle}>Login</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody style={{ backgroundColor:'#282c34'}} className='dark'>
          <Login />
        </ModalBody>
      </Modal>
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