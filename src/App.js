import {Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from 'react';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {getAllMovies, getAllCinemas} from './api';
import searchIcon from './images/search.svg';
import MovieService from './service/MovieService';
import CinemaService from './service/CinemaService';
import 'react-toastify/dist/ReactToastify.css';

export default function App () {

    const[movies, setMovies] = useState([]);
    const[cinemas, setCinemas] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {

        MovieService.getMovies().then((response) => {
            setMovies(response.data);
        });

        CinemaService.getCinemas().then((response) => {
            setCinemas(response.data);
        });
        
        if(location.state){
            toast(location.state.message);
            location.state = null
        }


    }, [location]);

    return (
        <div>
            <ToastContainer />
            <Outlet />
            <Header />

            <div className="container">

                <section>

                    <div className="desktop-banners-cinemas-partners-block">
                        <div className="cinemas-and-partners-block">
                            <div className="left-side">

                                <div className="d-flex align-center space-between mb-24">
                                    <Link className="title link" to={"/cinemas"}>Кинотеатры</Link>
                                </div>

                                <div>
                                    <div className="cinemas-and-partners-list-wrap">
                                        <ul className="cinemas-and-partners-list">
                                            {
                                                cinemas.map((c) => {
                                                    return(
                                                        <Link to={'/cinema/'+c.id} className='text-dark'>
                                                            <li className="card-main-container">
                                                                <div className="card-container">
                                                                    <div className="card-content">
                                                                        <div className="card-img"></div>
                                                                        <div className="card-info">
                                                                            <h1 className="m-0">{c.name}</h1>
                                                                            <p className="m-0">{c.address}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </Link>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <section className="seances seances-desktop mb-12">
                        <div className="seances__header">
                            <h3 className="seances__header-title">Кино</h3>
                        </div>
                    </section>

                    <div className="desktop-banners-event-sub-type-badges">
                        <section className="badges">
                            <div className="type-list__tab-group pl-16 pr-16">
                                <div className="type-list__tab-overlay fluid">
                                    <label>
                                        <button type="button" className="tab-item tab-item-checked" value="today">
                                            <div className="tab-item__body tab-body">
                                                <span className="body-3 type-list__tab-item text-no-wrap">Сейчас</span>
                                            </div>
                                        </button>
                                        <input className="tab-group" type="radio" autocomplete="off" name="type-tabs" value="today" checked="" />
                                    </label>
                                    {/* <label>
                                        <button type="button" className="tab-item" value="soon">
                                            <div className="tab-item__body tab-body">
                                                <span className="body-3 type-list__tab-item text-no-wrap">Скоро</span>
                                            </div>
                                        </button>
                                        <input className="tab-group" type="radio" autocomplete="off" name="type-tabs" value="soon" />
                                    </label>
                                    <label>
                                        <button type="button" className="tab-item" value="kids">
                                            <div className="tab-item__body tab-body">
                                                <span className="body-3 type-list__tab-item text-no-wrap">Детям</span>
                                            </div>
                                        </button>
                                        <input className="tab-group" type="radio" autocomplete="off" name="type-tabs" value="kids" />
                                    </label> */}
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="desktop-Banners-filters">
                        <div className="search-and-filter">
                            <div className="input-base">
                                <img className="input-base__icon" alt="input-icon" src={searchIcon} />
                                <input className="input-base__input" placeholder="Фильмы, кинотеатры, новости" value="" />
                            </div>

                            {/* <div className="search-and-filter_filter">
                                <button className="header-mobile__menu__item__button">
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_824_8281)">
                                            <path d="M23.6651 6.15058H11.1712C10.8277 5.13039 9.86272 4.39331 8.72817 4.39331C7.59363 4.39331 6.62866 5.13039 6.28517 6.15058H4.33496C3.88193 6.15058 3.51465 6.51787 3.51465 6.9709C3.51465 7.42393 3.88193 7.79121 4.33496 7.79121H6.28523C6.62872 8.8114 7.59368 9.54848 8.72823 9.54848C9.86277 9.54848 10.8277 8.8114 11.1712 7.79121H23.6652C24.1182 7.79121 24.4855 7.42393 24.4855 6.9709C24.4855 6.51787 24.1182 6.15058 23.6651 6.15058ZM8.72817 7.90786C8.21154 7.90786 7.79121 7.48753 7.79121 6.9709C7.79121 6.45426 8.21154 6.03394 8.72817 6.03394C9.24481 6.03394 9.66513 6.45426 9.66513 6.9709C9.66513 7.48753 9.24481 7.90786 8.72817 7.90786Z" fill="#161620"></path>
                                            <path d="M23.6651 13.1798H21.7149C21.3714 12.1596 20.4064 11.4225 19.2719 11.4225C18.1374 11.4225 17.1724 12.1596 16.8289 13.1798H4.33496C3.88193 13.1798 3.51465 13.547 3.51465 14.0001C3.51465 14.4531 3.88193 14.8204 4.33496 14.8204H16.8289C17.1724 15.8406 18.1374 16.5777 19.2719 16.5777C20.4064 16.5777 21.3714 15.8406 21.7149 14.8204H23.6652C24.1182 14.8204 24.4855 14.4531 24.4855 14.0001C24.4855 13.547 24.1182 13.1798 23.6651 13.1798ZM19.2719 14.937C18.7553 14.937 18.335 14.5167 18.335 14.0001C18.335 13.4834 18.7553 13.0631 19.2719 13.0631C19.7886 13.0631 20.2089 13.4834 20.2089 14.0001C20.2089 14.5167 19.7886 14.937 19.2719 14.937Z" fill="#161620"></path>
                                            <path d="M23.6651 20.2089H14.6858C14.3423 19.1887 13.3773 18.4517 12.2428 18.4517C11.1082 18.4517 10.1433 19.1887 9.79977 20.2089H4.33496C3.88193 20.2089 3.51465 20.5762 3.51465 21.0292C3.51465 21.4823 3.88193 21.8496 4.33496 21.8496H9.79977C10.1433 22.8698 11.1082 23.6068 12.2428 23.6068C13.3773 23.6068 14.3423 22.8698 14.6858 21.8496H23.6652C24.1182 21.8496 24.4855 21.4823 24.4855 21.0292C24.4855 20.5762 24.1182 20.2089 23.6651 20.2089ZM12.2428 21.9663C11.7261 21.9663 11.3058 21.5459 11.3058 21.0293C11.3058 20.5127 11.7261 20.0923 12.2428 20.0923C12.7594 20.0923 13.1797 20.5126 13.1797 21.0292C13.1797 21.5459 12.7594 21.9663 12.2428 21.9663Z" fill="#161620"></path>
                                        </g>
                                        <defs>
                                            <filter id="filter0_ddd_824_8281" x="-3" y="-14" width="48" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                                                <feMorphology radius="4" operator="erode" in="SourceAlpha" result="effect1_dropShadow_824_8281"></feMorphology>
                                                <feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur>
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"></feColorMatrix>
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_824_8281"></feBlend>
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                                                <feMorphology radius="16" operator="erode" in="SourceAlpha" result="effect2_dropShadow_824_8281"></feMorphology>
                                                <feOffset dy="24"></feOffset><feGaussianBlur stdDeviation="12"></feGaussianBlur>
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"></feColorMatrix>
                                                <feBlend mode="normal" in2="effect1_dropShadow_824_8281" result="effect2_dropShadow_824_8281"></feBlend>
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                                                <feMorphology radius="4" operator="erode" in="SourceAlpha" result="effect3_dropShadow_824_8281"></feMorphology>
                                                <feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="12"></feGaussianBlur>
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"></feColorMatrix>
                                                <feBlend mode="normal" in2="effect2_dropShadow_824_8281" result="effect3_dropShadow_824_8281"></feBlend>
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_824_8281" result="shape"></feBlend>
                                            </filter>
                                            <clipPath id="clip0_824_8281"><rect width="28" height="28" fill="white"></rect></clipPath>
                                        </defs>
                                    </svg>Фильтры
                                </button>
                            </div> */}

                        </div>
                    </div>

                    <div className="desktop-banners-seances-list-grid mt-20">
                        <section className="seances-list">

                        {
                            movies.map((m) => {
                                return(
                                    <Link to={"/movie/" + m.id}>
                                        <article id="10691">
                                            <div className="poster-image">
                                                <div className="rate green">
                                                    <svg width="8" height="8" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.12231 11.0146L3.19504 16.4146C3.15322 16.6608 3.25508 16.9114 3.45719 17.0584C3.65877 17.205 3.92877 17.2246 4.14982 17.1085L9.00006 14.5584L13.8503 17.1085C13.9459 17.1588 14.0508 17.1837 14.1557 17.1837C14.292 17.1837 14.4284 17.1413 14.5429 17.0584C14.7451 16.9114 14.8464 16.6608 14.8044 16.4146L13.8776 11.0143L17.8021 7.18995C17.9802 7.01536 18.0451 6.7534 17.9681 6.5159C17.8912 6.27824 17.6839 6.10346 17.4371 6.06808L12.0149 5.27967L9.59013 0.366353C9.47933 0.142268 9.24988 0 9.00006 0C8.75025 0 8.52044 0.142268 8.41001 0.366353L5.98541 5.28003L0.5628 6.06808C0.315844 6.10346 0.108898 6.27824 0.0320669 6.5159C-0.0451372 6.7534 0.0197336 7.01536 0.198615 7.18995L4.12231 11.0146Z" fill="white"></path>
                                                    </svg>{m.rating}
                                                </div>
                                                <div className="seance__age absolute">
                                                    <span className="age group3">{m.age_restriction}+</span>
                                                </div>
                                            </div>
                                            <section>
                                                <h3>{m.name}</h3>
                                                <div className="info">
                                                    <span>{m.category}</span>
                                                </div>
                                            </section>
                                        </article>
                                    </Link>
                                )
                            })
                        }
                                
                            
                        </section>
                        <div className="my-30"></div>
                    </div>

                </section>
            </div>

            <Footer />
            
        </div>
    );
}