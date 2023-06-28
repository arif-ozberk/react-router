import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const About = () => {
    return (
        <div>
            This is my about page
            <Link to='/about/aboutArif'>Go to about arif page</Link>
        </div>
    )
}

export default About;