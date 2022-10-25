import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/shared/Header/Header';
import { ScrollRestoration } from "react-router-dom";


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <ScrollRestoration />
        </div>
    );
};

export default Main;