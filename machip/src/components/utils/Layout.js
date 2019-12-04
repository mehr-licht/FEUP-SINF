
import React from 'react';


import Appbar from "./Appbar";
import Sidebar from "./Sidebar";

const Layout = () => {
    return (
        <div>
            <Appbar width="100%">
            </Appbar>
            <Sidebar />
        </div>
    );
}

export default Layout