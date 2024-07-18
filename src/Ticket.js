import {Link, Outlet, useLoaderData, useLocation, useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { jwtDecode } from 'jwt-decode';
import { buyTicket } from "./api";

export default function Ticket () {

    const ticket = useLoaderData();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {



    }, [])

    const handleClick = async (ticketId) => {
        const user = JSON.parse(localStorage.getItem("user"));
        if(user){
            const decodedToken = jwtDecode(JSON.parse(localStorage.getItem("user")).token);
            const response = await buyTicket(ticketId, decodedToken.id);
            navigate(`/seance/${ticket.data.seance.id}`, {state: {message: "Билет сатып алынды"}})
            window.location.reload();
        }else{
            navigate('/sign-in', {state: {message: "Сначала региструйтесь"}})
        }
    }

    return (
        <section class="styles_container__1Z4_C">
            <div class="styles_selected_places__wrapper__23Nhc">
                <div class="styles_selected_places__1K2FX">
                    <div class="styles_selected_place__2HKIx" style={{width: "100%"}}>
                        <div class="styles_selected_place__inner__3DG-x">
                            <div class="styles_selected_place__content__1NaCL">
                                <div class="styles_selected_place__desc__3BWef">
                                    <span class="styles_selected_place__desc_position__24L3o">{ticket.data.row} ряд, {ticket.data.seat} место</span>
                                    <span class="styles_selected_place__desc_type__fUHBj">Взрослый</span>
                                    <span class="styles_selected_place__desc_price__BsZ0i">1000 ₸</span>
                                    </div>
                                    <Link to={`/seance/${ticket.data.seance.id}`} class="styles_selected_place__remove__1R-L5">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_15175_4766)">
                                                <g filter="url(#filter0_b_15175_4766)">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.69006 16.759C13.1464 16.759 16.759 13.1464 16.759 8.69006C16.759 4.23369 13.1464 0.621094 8.69006 0.621094C4.23369 0.621094 0.621094 4.23369 0.621094 8.69006C0.621094 13.1464 4.23369 16.759 8.69006 16.759Z" fill="#F1F1F1"></path>
                                                </g>
                                                <path d="M6.00098 5.99959L11.3803 11.3789" stroke="#161620" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M6.00098 11.3793L11.3803 6" stroke="#161620" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </g>
                                            <defs>
                                                <filter id="filter0_b_15175_4766" x="-12.9703" y="-12.9703" width="43.3205" height="43.3205" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="6.7957"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_15175_4766"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_15175_4766" result="shape"></feBlend></filter>
                                                <clipPath id="clip0_15175_4766"><rect width="18" height="18" fill="white"></rect></clipPath>
                                            </defs>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div class="styles_book_places__7ZThP">
                <h4>1 билет: 1000 ₸</h4>
                <button onClick={() => handleClick(ticket.data.id)} class="styles_button__3trND styles_fluid__2GDlf styles_primary__1Sltu">Далее</button>
            </div>
        </section>
    );
}