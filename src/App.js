import React, { useState } from 'react';
import { Routes, Route, Link, NavLink, Outlet, IndexRouteObject } from "react-router-dom";

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import AboutArif from './pages/AboutArif';
import SharedNavbar from './pages/SharedNavbar';

import "./App.css";


const App = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={<SharedNavbar />} >
                    <Route index element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='about/aboutArif' element={<AboutArif />} />
                    <Route path='contacts' element={<Contacts />} />
                </Route>
            </Routes>
        </>
    )
}

export default App;