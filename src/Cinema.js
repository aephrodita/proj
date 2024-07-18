import Header from './Header';
import Footer from './Footer';
import {useLoaderData, useNavigate} from 'react-router-dom';
import { useEffect} from 'react';

export default function Cinema(){

    const cinema = useLoaderData();
    const navigate = useNavigate();

    useEffect(() => {
        if(cinema.success == false){
            navigate('/', {state: {message: cinema.data}})
        }
    }, [])

    return (
        <div>

            <Header />

            <div class="modal-container full hidden centered"></div>
            <div class="d-flex justify-center"></div>
            <div class="about-movie container mt-32">
                <div class="about-partner-top">
                    <div class="about-partner-group">
                        <div class="about-partner-poster">
                            <div class="poster-image" style={{}}></div>
                        </div>
                    </div>
                    <div class="about-partner-data">
                        <div class="about-partner-title">{cinema.data.name}</div>
                        <div class="d-flex align-center mb-24">
                            <div>
                                <svg width="24" height="28" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.6666 12.5758C22.6666 21.0606 11.9999 28.3334 11.9999 28.3334C11.9999 28.3334 1.33325 21.0606 1.33325 12.5758C1.33325 9.68251 2.45706 6.90774 4.45745 4.86189C6.45783 2.81603 9.17094 1.66669 11.9999 1.66669C14.8289 1.66669 17.542 2.81603 19.5424 4.86189C21.5428 6.90774 22.6666 9.68251 22.6666 12.5758Z" stroke="#161620" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M12 16.3334C14.2091 16.3334 16 14.5425 16 12.3334C16 10.1242 14.2091 8.33337 12 8.33337C9.79086 8.33337 8 10.1242 8 12.3334C8 14.5425 9.79086 16.3334 12 16.3334Z" stroke="#161620" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </div>
                            <div>
                                <div class="about-movie-btn-caption">{cinema.data.city_name}, {cinema.data.address}</div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
            <div class="modal-container full hidden centered location-map-modal"></div>
            {/* <div class="rd-tab-container mb-24 container">
                <button class="btn rd-tab-btn" type="button">Расписание</button>
                <button class="btn rd-tab-btn active" type="button">О кинотеатре</button>
                <div class="rd-underline"></div>
            </div>
            <div class="hall-details container">
                <div class="rd-hall-detail hall-details__wrapper">
                    <div class="hall-details__info hall-info description-raw mt-16">
                        <h3 class="body-3 mb-24">Режим работы</h3>
                        <div class="partner-work-schedule">
                            <div class="partner-work-schedule__item">
                                <span>Пн</span>10:00<br />01:00
                            </div>
                            <div class="partner-work-schedule__item">
                                <span>Вт</span>10:00<br />01:00
                            </div>
                            <div class="partner-work-schedule__item">
                                <span>Ср</span>10:00<br />01:00
                            </div>
                            <div class="partner-work-schedule__item">
                                <span>Чт</span>10:00<br />01:00
                            </div><div class="partner-work-schedule__item active">
                                <span>Пт</span>10:00<br />01:00
                            </div><div class="partner-work-schedule__item">
                                <span>Сб</span>10:00<br />01:00
                            </div>
                            <div class="partner-work-schedule__item">
                                <span>Вс</span>10:00<br />01:00
                            </div>
                        </div>
                        <div class="divider my-24">
                            <div></div>
                        </div>
                        <div class="hall-info__contacts"></div>
                        <div class="hall-details__description description-raw mt-16">
                            
                            <p>{cinema.data.description}</p>

                            <ul>
                                <li>Официальное открытие IMAX зала - 21 декабря.</li>
                                <li>Количество залов - 16,</li>
                                <li>Количество посадочных мест - 2365,</li>
                                <li>Проекторы - IMAX with Laser</li>
                                <li>Звуковая система - Dolby 7.1 (12-канальный).</li>
                            </ul>
                            
                            <p>Вместимость залов:</p>
                            
                            <ul>
                                <li>IMAX Зал 1 - 481 мест,</li>
                                <li>зал 2 - 96 мест,</li>
                                <li>зал 3 - 114 мест,</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}

            <Footer />

        </div>
    );
}