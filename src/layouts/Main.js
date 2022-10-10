import React from 'react';
import { Outlet } from 'react-router-dom';
import MainFooter from '../components/MainFooter';
import Navbar from '../components/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <MainFooter></MainFooter>
        </div>
    );
};

export default Main;