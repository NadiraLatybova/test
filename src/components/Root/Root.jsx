import React, {useEffect} from 'react';
import {Outlet} from 'react-router-dom'
import Footer from "../Footer/Footer";
import axios from "axios";
import HeaderTop from "../Header/HeaderTop";
const Root = () => {



    return (
        <>
            <HeaderTop/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default Root;