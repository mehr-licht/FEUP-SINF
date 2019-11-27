import React, { useState } from 'react';
import { Nav, NavItem } from 'reactstrap';

const Sidebar = () => {

    return (
        <Nav>
            <NavItem>Overview</NavItem>
            <NavItem>Sales</NavItem>
            <NavItem>Orders</NavItem>
            <NavItem>Picking</NavItem>
        </Nav>
    );
}

export default Sidebar