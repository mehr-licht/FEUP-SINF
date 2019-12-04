import React, { useState } from 'react';
import logo from '../../chip.svg';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink, Collapse, Modal, Button } from 'reactstrap';
import '../../styles/utils/Sidebar.css';
import Login from "./Login/Login";
const Appbar = (props) => {
  const [collapsed] = useState(true);

  const styles = {  position: 'absolute', zIndex:'1',backgroundColor: '#0B0C10', width: props.width, align: 'left', paddingBottom: '0.3em', right: props.right};
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <Navbar style={styles} light>
      <NavbarBrand style ={{color:"#45A29E"}} href='/'>
      <object style={{height:'25px'}} data={logo} title="machip logo" type="image/svg+xml"></object>
        <b>MaChip</b>
      </NavbarBrand>

      <Button style={{ position: 'relative' }} color="success" onClick={toggle}>Login</Button>
      <Modal className = "ModalContainer" isOpen={modal} toggle={toggle}>
      <Login />

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