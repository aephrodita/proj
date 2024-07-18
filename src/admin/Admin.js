import React from 'react';
import {Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AdminAside from './AdminAside';
import '../css/form.css';
import '../css/aside.css';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { checkAdmin } from '../api';
import { jwtDecode } from 'jwt-decode';


export default function Admin() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        
        if (user) {
            const decodedToken = jwtDecode(user.token);
            if(decodedToken.role != "ROLE_ADMIN"){
                navigate('/', {state: {state: "Admin emessin"}})
            }
        }else{
            navigate('/', {state: {state: "token jok"}})
        }
        if (location.state) {
            toast(location.state.message);
            location.state = null;
        }

    }, [location, navigate]);

    return (
        <div>
            <ToastContainer />
            <div style={{ display: "flex", height: "100%", width: "100%" }}>
                <div style={{ width: "295px", height: "100%", zIndex: 2 }}>
                    <AdminAside />
                </div>
                <div style={{ height: "100%", width: "100%", display: "flex" }}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
