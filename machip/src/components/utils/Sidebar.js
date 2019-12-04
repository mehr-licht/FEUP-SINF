import React, { useState } from 'react';
import { Collapse, NavLink, ListGroupItem, Nav } from 'reactstrap';
import '../../styles/utils/Sidebar.css';
const Sidebar = (props) => {





    const [isOpen, setIsOpen] = useState(false);

    const [collapse, setCollapse] = useState(false);
    const [status, setStatus] = useState('Closed');


    const onEntering = () => setStatus(1);

    const onEntered = () => setStatus(0);

    const onExiting = () => setStatus(1);

    const onExited = () => setStatus(1);

    const toggle = () => setCollapse(!collapse);

    const styles = { backgroundColor: '#1F2833', width: props.width, align: 'left', position: 'absolute', right: props.right, zIndex: 1, height: '100%' };

    const stylesNav = {backgroundColor: '#0B0C10'};
    const styleMenu = {backgroundColor:'#0B0C10'};

    const navText = {backgroundColor:'#1F2833' ,color: '#c5c6c7', textAlign: 'left' };


    return (
        <div style={styles}>
            <div style ={styleMenu}>
                <NavLink href="#" color="link" onClick={toggle} style={{ fontSize: '1.5rem', padding: '9px', color: '#45A29E', textAlign: 'left' }}>
                    <svg width="1.5rem" height="1.5rem" viewBox="0 0 1.5rem 1.5rem" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 8V6H21V8H3ZM3 13H21V11H3V13ZM3 18H21V16H3V18Z" fill="#45A29E" />
                    </svg>
                    <b>MENU</b>
                </NavLink>
            </div>
            <Collapse isOpen={collapse}
                onEntering={onEntering}
                onEntered={onEntered}
                onExiting={onExiting}
                onExited={onExited}>
                <Nav style={stylesNav} className = "SideLink" vertical>

                    <NavLink style={navText} tag="a" href="#" action>
                        <svg width="1.5rem" height="1.5rem" viewBox="0 0 1.5rem 1.5rem" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 3H11V13H3V3ZM21 3H13V9H21V3ZM9 11V5H5V11H9ZM19 7V5H15V7H19ZM19 13V19H15V13H19ZM9 19V17H5V19H9ZM21 11H13V21H21V11ZM3 15H11V21H3V15Z" fill="#c5c6c7" fill-opacity="0.54" />
                        </svg><b>Overview</b>
                    </NavLink>

                    <NavLink style={navText} href="#">
                        <svg width="1.5rem" height="1.5rem" viewBox="0 0 1.5rem 1.5rem" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.39 10.9C10.12 10.31 9.39 9.7 9.39 8.75C9.39 7.66 10.4 6.9 12.09 6.9C13.87 6.9 14.53 7.75 14.59 9H16.8C16.73 7.28 15.68 5.7 13.59 5.19V3H10.59V5.16C8.65 5.58 7.09 6.84 7.09 8.77C7.09 11.08 9 12.23 11.79 12.9C14.29 13.5 14.79 14.38 14.79 15.31C14.79 16 14.3 17.1 12.09 17.1C10.03 17.1 9.22 16.18 9.11 15H6.91C7.03 17.19 8.67 18.42 10.59 18.83V21H13.59V18.85C15.54 18.48 17.09 17.35 17.09 15.3C17.09 12.46 14.66 11.49 12.39 10.9Z" fill="#c5c6c7" fill-opacity="0.54" />
                        </svg>
                        <b>Sales</b>
                    </NavLink>
                    <NavLink className="SideLink" style={navText} href="#">
                        <svg width="1.5rem" height="1.5rem" viewBox="0 0 1.5rem 1.5rem" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.60001 1.84 9.17999 3H5C3.89999 3 3 3.89999 3 5V21C3 22.1 3.89999 23 5 23H19C20.1 23 21 22.1 21 21V5C21 3.89999 20.1 3 19 3ZM12 3C12.55 3 13 3.45001 13 4C13 4.54999 12.55 5 12 5C11.45 5 11 4.54999 11 4C11 3.45001 11.45 3 12 3ZM5 5V21H19V5H17V8H7V5H5Z" fill="#c5c6c7" fill-opacity="0.54" />
                        </svg>
                        <b>Orders</b>
                    </NavLink>
                    <NavLink style={navText} href="#">
                        <svg width="1.5rem" height="1.5rem" viewBox="0 0 1.5rem 1.5rem" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20 8H17V4H3C1.90002 4 1 4.90002 1 6V17H3C3 18.66 4.34003 20 6 20C7.65997 20 9 18.66 9 17H15C15 18.66 16.34 20 18 20C19.66 20 21 18.66 21 17H23V12L20 8ZM19.5 9.5L21.46 12H17V9.5H19.5ZM5 17C5 17.55 5.45001 18 6 18C6.54999 18 7 17.55 7 17C7 16.45 6.54999 16 6 16C5.45001 16 5 16.45 5 17ZM8.21997 15C7.66998 14.39 6.89001 14 6 14C5.10999 14 4.33002 14.39 3.78003 15H3V6H15V15H8.21997ZM17 17C17 17.55 17.45 18 18 18C18.55 18 19 17.55 19 17C19 16.45 18.55 16 18 16C17.45 16 17 16.45 17 17Z" fill="#c5c6c7" fill-opacity="0.54" />
                        </svg>
                        <b>Picking</b>
                    </NavLink>
                </Nav>

            </Collapse>
        </div>
    );
}

export default Sidebar