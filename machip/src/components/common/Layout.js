import React from 'react';
import Appbar from "./Appbar";
import Sidebar from "./Sidebar";

const Layout = ({children}) => {
    return (
        <>
            <Sidebar />
            <Appbar />
            <div>
                {children}
            </div>
        </>
    );
}

export default Layout