import {Link, Outlet, useLoaderData, useLocation} from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Novigation () {

    const location = useLocation();

    useEffect(() => {

        if(location.state){
            toast(location.state.message);
            location.state = null
        }

    }, [location]);

    return (
        <div>

            <ToastContainer />
            <Header />
            <Outlet />
            <Footer />
            
        </div>
    );
}