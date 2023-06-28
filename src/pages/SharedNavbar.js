import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const SharedNavbar = () => {
    return (
        <div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contacts">Contacts</Link>
            </div>

            <Outlet />
        </div>
    );
}
 
export default SharedNavbar;