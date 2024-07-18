import {Link, Outlet, useLoaderData, useLocation, useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from 'react';
import x from './images/cross.png'
import { getTicketByUserId, returnTicket } from './api';
import { jwtDecode } from 'jwt-decode';

export default function MyTicket () {

    const[tickets, setTickets] = useState([])
    const navigate = useNavigate();

    useEffect(() => {

        const user = JSON.parse(localStorage.getItem('user'));
        
        if (user) {
            const decodedToken = jwtDecode(user.token);
            fun(decodedToken.id)
        }

    }, [])

    const fun = async (userId) => {
        const response = await getTicketByUserId(userId)
        setTickets(response.data)
        console.log(response.data)
    }

    const handleClick = async (ticketId) => {
        const response = await returnTicket(ticketId);
        navigate(`/ticket`, {state: {message: "Билет қайтарылды"}})
        window.location.reload();
    }   

    return (
        <div style={{position: "fixed", zIndex: "1"}}>
            <section className="overlay" >
                <div className="modal-block">
                    <div className="rd-modal-container absolute">
                        <div className="rd-modal-content">
                            <button className="rd-close-modal-btn" style={{backgroundColor: "white"}}>
                                <span>
                                    <Link to={'/'}>
                                        <img src={x} style={{width: "16px", height: "16px"}} alt="Close" />
                                    </Link>
                                </span>
                            </button>
                            <h1>Мои билеты</h1>
                            {
                                tickets.map((t) => {
                                    return(
                                        <div>
                                            <div className="rd-tab-container mb-22 mt-16" style={{display: "flex", flexDirection: "column"}}>
                                                <span>Место: {t.x}</span>
                                                <span>Ряд: {t.y + 1}</span>
                                                <span>Зал: {t.seance.hall.name}</span>
                                                <span>Кинотеатр: {t.seance.hall.cinema.name}</span>
                                                <span>Кино: {t.seance.movie.name}</span>
                                            </div>
                                            <div className="rd-tab-container mb-22 mt-16"><button onClick={() => handleClick(t.id)}>Возврат?</button><div className="rd-underline"></div></div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}