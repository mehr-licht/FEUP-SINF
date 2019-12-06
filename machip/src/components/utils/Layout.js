import React from 'react';
import Appbar from "./Appbar";
import Sidebar from "./Sidebar";

const Layout = () => {
    return (
        <div>
            
            <Sidebar />
            <Appbar width="100%">
            </Appbar>
        </div>
    );
}

export default Layout