import {useEffect, useState} from 'react';
import {useLoaderData, Link, useLocation, useNavigate, Outlet} from 'react-router-dom';
import displayLight from './images/display_light.svg';
import { getTicketBySeanceId } from './api';
import { ToastContainer, toast } from "react-toastify";
import spiderman from './images/spiderman.png';

export default function Seance(){

    const seance = useLoaderData();
    const navigate = useNavigate();
    const[tickets, setTickets] = useState([])
    const location = useLocation()

    useEffect(() => {
        if(seance.success == false){
            navigate('/', {state: {message: seance.data}})
        }else{
            fun(seance.data.id)
        }

        if(location.state){
            toast(location.state.message);
            location.state = null
        }

    }, [])

    const fun = async (seanceId) => {
        const response = await getTicketBySeanceId(seanceId)
        setTickets(response.data)
    }
    

    return (
        <div className="App">
            
            <Outlet />
            <ToastContainer />

            <div class="ticket-widget-modal-close" style={{position: "fixed", top: "20px", right: "20px", zIndex: 1, backgroundColor: "rgba(0,0,0,.3)", borderRadius: "50%", padding: "4px", margin: "0"}}>
                <Link to={`/movie/${seance.data.movie.id}`} >
                    <svg width="24" height="24" viewBox="0 0 24 24">
                        <path fill="4F4F60" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path>
                    </svg>
                </Link>
            </div>
            <header className="header">
                <div className="media">
                    <div class="media__preview">
                        <picture>
                        </picture>
                    </div>
                    <div class="media__content">
                        <div class="media__content-label">{seance.data.movie.name_kaz}</div>
                        <div class="media__content-text">
                            {/* 14 апреля 2024 г. 21:00 •  */}
                        <div style={{display: "inline-block"}}>
                            {/* <span style={{padding: "0px 6px", color: "rgb(255, 255, 255)", background: "rgb(145, 70, 255)", borderRadius: "32px"}}>каз</span> */}
                            </div> • {seance.data.hall.name}
                        </div>
                        <div class="media__content-text--summary">
                            <div>
                                {seance.data.hall.cinema.name}
                                <span class="text-gray"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <svg width="156" height="46" viewBox="0 0 156 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M112.227 28.2471C111.02 28.2471 110.041 29.2303 110.041 30.443C110.041 31.6555 111.02 32.6387 112.227 32.6387C113.434 32.6387 114.413 31.6555 114.413 30.443C114.413 29.2303 113.434 28.2471 112.227 28.2471Z" fill="#161620"></path>
                    <path d="M76.9174 13.3796C75.7099 13.3796 74.7314 14.3628 74.7314 15.5754C74.7314 16.7883 75.7099 17.7715 76.9174 17.7715C78.1245 17.7715 79.1033 16.7883 79.1033 15.5754C79.1033 14.3628 78.1245 13.3796 76.9174 13.3796Z" fill="#161620"></path>
                    <path d="M75.166 32.6387H78.6692V19.2773H75.166V32.6387Z" fill="#161620"></path>
                    <path d="M88.6602 19.0198C87.8627 19.0198 87.1245 19.1843 86.4456 19.5134C85.7671 19.8424 85.1045 20.3885 84.4589 21.1514V19.2773H80.9561V32.6387H84.4589V23.7552C85.0288 23.011 85.5508 22.4796 86.0257 22.16C86.5001 21.8405 87.0083 21.6807 87.5496 21.6807C88.2614 21.6807 88.8242 21.9334 89.2369 22.4389C89.6502 22.9445 89.8566 23.6311 89.8566 24.4991V32.6387H93.3454V24.1412C93.3454 22.6058 92.9206 21.3684 92.0711 20.4289C91.2211 19.4897 90.0844 19.0198 88.6602 19.0198Z" fill="#161620"></path>
                    <path d="M104.907 29.1483C104.252 29.9116 103.355 30.2927 102.215 30.2927C101.123 30.2927 100.252 29.8946 99.6019 29.0983C98.9517 28.3023 98.6264 27.2365 98.6264 25.901C98.6264 24.6136 98.9586 23.5789 99.6234 22.7966C100.288 22.0147 101.152 21.6236 102.215 21.6236C103.345 21.6236 104.24 21.9933 104.9 22.7323C105.56 23.4715 105.889 24.5184 105.889 25.8725C105.889 27.2937 105.562 28.3855 104.907 29.1483ZM106.018 19.8926C104.888 19.3111 103.63 19.02 102.244 19.02C100.876 19.02 99.6327 19.3086 98.5125 19.8854C97.3921 20.4627 96.5187 21.2732 95.8921 22.3173C95.2656 23.3618 94.9521 24.5564 94.9521 25.901C94.9521 27.2841 95.2491 28.4952 95.8423 29.5348C96.4356 30.5743 97.3021 31.3941 98.4415 31.9953C99.5807 32.596 100.848 32.8965 102.244 32.8965C103.63 32.8965 104.9 32.596 106.053 31.9953C107.207 31.3941 108.08 30.5743 108.674 29.5348C109.267 28.4952 109.564 27.2841 109.564 25.901C109.564 24.5757 109.255 23.3881 108.638 22.3388C108.021 21.2899 107.147 20.4745 106.018 19.8926Z" fill="#161620"></path>
                    <path d="M135.748 30.0064L142.67 19.2773H130.451V21.9381H136.859L129.956 32.5901L123.932 25.8724L129.33 19.2773H125.214L119.887 25.6848V13.3799H116.384V32.6387H119.887V26.0534L125.556 32.6387H129.924H142.698V30.0064H135.748Z" fill="#161620"></path>
                    <path d="M73.5739 19.2773H69.458L64.1311 25.6848V13.3799H60.6279V32.6387H64.1311V26.0534L69.7998 32.6387H74.2432L68.1763 25.8724L73.5739 19.2773Z" fill="#161620"></path>
                    <path d="M41.4561 13.3799C36.989 13.3799 33.2358 16.4489 32.172 20.6024C31.1079 16.4489 27.3546 13.3799 22.8878 13.3799C17.5936 13.3799 13.3018 17.6913 13.3018 23.0093C13.3018 28.3276 17.5936 32.6387 22.8878 32.6387C27.3546 32.6387 31.1079 29.5697 32.172 25.4163C33.2358 29.5697 36.989 32.6387 41.4561 32.6387C46.7503 32.6387 51.042 28.3276 51.042 23.0093C51.042 17.6913 46.7503 13.3799 41.4561 13.3799Z" fill="#00F000"></path>
                </svg>
            </header>
            <div class="Schema pt-40">
                <div style={{width: "600px", margin: "10px auto 0px"}}>
                    <div class="Display">
                        <img src={displayLight} />
                    </div>
                </div>
                <div>
                    <div style={{width: `${seance.data.hall.seat * 34 + 8}px`, height: `${seance.data.hall.row * 34}px`, position: "relative", zIndex: 1, margin: "50px auto"}}>

                        {
                            tickets.map((t) => {
                                    if(!t.user){
                                        return(
                                            <a class="place" style={{width: "30px", height: "30px", top: `${t.y * 34}px`, left: `${t.x * 34}px`, position: "absolute"}}>
                                                <div class="rui-popover" tabindex="-1">
                                                    <div class="rui-popover__children">
                                                        <div class="styles_seat_wrapper__3q6iZ" style={{width: "30px", height: "30px"}}>
                                                            <Link to={`/seance/${seance.data.id}/ticket/${t.id}`}>
                                                                <div class="styles_seat__1o2Ny" style={{width: "30px", height: "30px"}}>
                                                                    <svg class="styles_seat__default__1vm_O" width="30" height="26" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M1 2.03714C1 2.03714 2.16071 1 7.5 1C12.2273 1 14 2.03714 14 2.03714V12H1V2.03714Z" fill="#9797A5" fill-opacity="0.2"></path>
                                                                        <path d="M1 1V12H14V1" stroke="#9797A5" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                        <text x="50%" y="50%" alignment-baseline="middle" text-anchor="middle" fill="#000" font-size="7">{t.seat}</text>
                                                                    </svg>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        )
                                    }else if(t.user){
                                        return(
                                            <a class="place" style={{width: "30px", height: "30px", top: `${t.y * 34}px`, left: `${t.x * 34}px`, position: "absolute"}}>
                                                <div class="styles_seat_wrapper__3q6iZ" style={{width: "30px", height: "30px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                                    <div class="styles_seat__1o2Ny styles_seat__disabled__1oyoT" style={{width: "21px", height: "21px"}}>
                                                        <svg class="styles_seat__unavailable__3ExxK" width="21" height="21" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1.45508 1.47945C1.45508 1.47945 1.90962 1.08984 4.00053 1.08984C6.09144 1.08984 6.54599 1.47945 6.54599 1.47945V5.6353H1.45508V1.47945Z" fill="#9797A5" fill-opacity="0.2"></path>
                                                            <path d="M0.727539 1.27344V6.36435H7.27299V1.27344" stroke="#9797A5" stroke-opacity="0.8" stroke-width="1.33519" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path opacity="0.3" d="M4.25653 3.81822L5.03835 3.03822C5.07259 3.00398 5.09182 2.95754 5.09182 2.90912C5.09182 2.86071 5.07259 2.81427 5.03835 2.78003C5.00411 2.7458 4.95768 2.72656 4.90926 2.72656C4.86084 2.72656 4.8144 2.7458 4.78017 2.78003L4.00017 3.56185L3.22017 2.78003C3.18593 2.7458 3.13949 2.72656 3.09108 2.72656C3.04266 2.72656 2.99622 2.7458 2.96198 2.78003C2.92775 2.81427 2.90851 2.86071 2.90851 2.90912C2.90851 2.95754 2.92775 3.00398 2.96198 3.03822L3.7438 3.81822L2.96198 4.59822C2.94494 4.61512 2.93142 4.63523 2.92219 4.65738C2.91296 4.67954 2.9082 4.7033 2.9082 4.72731C2.9082 4.75131 2.91296 4.77507 2.92219 4.79723C2.93142 4.81939 2.94494 4.83949 2.96198 4.8564C2.97889 4.87344 2.999 4.88696 3.02115 4.8962C3.04331 4.90543 3.06707 4.91018 3.09108 4.91018C3.11508 4.91018 3.13884 4.90543 3.161 4.8962C3.18315 4.88696 3.20326 4.87344 3.22017 4.8564L4.00017 4.07458L4.78017 4.8564C4.79707 4.87344 4.81718 4.88696 4.83933 4.8962C4.86149 4.90543 4.88526 4.91018 4.90926 4.91018C4.93326 4.91018 4.95702 4.90543 4.97918 4.8962C5.00134 4.88696 5.02145 4.87344 5.03835 4.8564C5.05539 4.83949 5.06892 4.81939 5.07815 4.79723C5.08738 4.77507 5.09213 4.75131 5.09213 4.72731C5.09213 4.7033 5.08738 4.67954 5.07815 4.65738C5.06892 4.63523 5.05539 4.61512 5.03835 4.59822L4.25653 3.81822Z" fill="#161620" fill-opacity="0.8"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </a>
                                        )
                                    }
                                
                            })
                        }
                        
                        {
                            Array.from({ length: seance.data.hall.row }).map((_, i) => (
                                <div key={i} className="column" style={{top: `${i * 34}px`, left: `${seance.data.hall.seat * 34}px`, width: "30px", height: "30px", lineHeight: "30px", position: "absolute", textAlign: "center"}}>
                                    {i + 1}
                                </div>
                            ))
                        }
                        {
                            Array.from({ length: seance.data.hall.row }).map((_, i) => (
                                <div key={i} className="column" style={{top: `${i * 34}px`, left: "-34px", width: "30px", height: "30px", lineHeight: "30px", position: "absolute", textAlign: "center"}}>
                                    {i + 1}
                                </div>
                            ))
                        }


                    </div>
                    <div class="vertical_liner" style={{height: `${seance.data.hall.row * 34}px`, left: "calc(50% - 7px)", bottom: "20px"}}></div>
                    <div class="centered_liner" style={{left:" calc(50% - 32px)"}}>центр</div>
                </div>
            </div>
        </div>
    );
}