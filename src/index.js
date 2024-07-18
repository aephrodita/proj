import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {getAllCinema, getAllMovie, getAllSeance, getAllUser, getOneCinema, getOneMovie, getOneSeance, getOneTicket, getAllHall} from './api';
import "./css/10aaa259d52e5e10.css";
import './css/main.a1b621fc.chunk.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Movie from './Movie';
import ErrorPage from './ErrorPage';
import Footer from './Footer';
import Header from './Header';
import Cinema from './Cinema';
import Ticket from './Ticket';
import Hall from './Hall';
import Seance from './Seance';
import HallService from './service/HallService';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Admin from './admin/Admin';
import AdminCinema from './admin/AdminCinema';
import AdminMovie from './admin/AdminMovie';
import AdminSeance from './admin/AdminSeance';
import AdminUser from './admin/AdminUser';
import CreateMovie from './admin/createForm/CreateMovie';
import CreateSeance from './admin/createForm/CreateSeance';
import EditMovie from './admin/editForm/EditMovie';
import CreateCinema from './admin/createForm/CreateCinema';
import MyTicket from './MyTicket';
import EditCinema from './admin/editForm/EditCinema';
import AdminHall from './admin/AdminHall';
import CreateHall from './admin/createForm/CreateHall';


const root = ReactDOM.createRoot(document.getElementById('root'));

const routes = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            errorElement: <div><Header /><ErrorPage /><Footer /></div>,
            children: [
                {
                    path: "/sign-in",
                    element: <SignIn />,
                },
                {
                    path: "/sign-up",
                    element: <SignUp />,
                },
                {
                    path: "/ticket",
                    element: <MyTicket />,
                },
            ]
        },
        {
            path: "/movie/:movieId",
            element: <Movie />,
            errorElement: <div><Header /><ErrorPage /><Footer /></div>,
            loader: async ( {params} ) => {
                console.log(params)
                const id = parseInt(params.movieId)
                return getOneMovie(id)
            }
        },
        {
            path: "/cinema/:cinemaId",
            element: <Cinema />,
            errorElement: <div><Header /><ErrorPage /><Footer /></div>,
            loader: async ( {params} ) => {
                console.log(params)
                const id = parseInt(params.cinemaId)
                return getOneCinema(id)
            }
        },
        {
            path: "/seance/:seanceId",
            element: <Seance />,
            errorElement: <div><Header /><ErrorPage /><Footer /></div>,
            loader: async ( {params} ) => {
                console.log(params)
                const id = parseInt(params.seanceId)
                return getOneSeance(id)
            },
            children: [
                {
                    path: "/seance/:seanceId/ticket/:ticketId",
                    element: <Ticket />,
                    loader: async ( {params} ) => {
                        console.log(params)
                        const id = parseInt(params.ticketId)
                        return getOneTicket(id)
                    }
                },
            ]
        },
        {
            path: "/hall/:hallId",
            element: <Hall />,
            errorElement: <div><Header /><ErrorPage /><Footer /></div>,
            loader: async ( {params} ) => {
                return (await HallService.getHall(params.hallId)).data
            }
        },
        {
            path: "/admin",
            element: <Admin />,
            errorElement: <div><Header /><ErrorPage /><Footer /></div>,
            children: [
                {
                    path: "/admin",
                    element: <AdminUser />,
                    loader: async () => {
                        return (await getAllUser())
                    }
                },
                {
                    path: "/admin/movie",
                    element: <AdminMovie />,
                    loader: async () => {
                        return (await getAllMovie())
                    },
                    children: [
                        {
                            path: "/admin/movie/create",
                            element: <CreateMovie />,
                        },
                        {
                            path: "/admin/movie/:movieId/edit",
                            element: <EditMovie />,
                            loader: async ( {params} ) => {
                                const id = parseInt(params.movieId)
                                return getOneMovie(id)
                            }
                        }
                    ]
                },
                {
                    path: "/admin/seance",
                    element: <AdminSeance />,
                    loader: async () => {
                        return (await getAllSeance())
                    },
                    children: [
                        {
                            path: "/admin/seance/create",
                            element: <CreateSeance />,
                        }
                    ]
                },
                {
                    path: "/admin/hall",
                    element: <AdminHall />,
                    loader: async () => {
                        return (await getAllHall())
                    },
                    children: [
                        {
                            path: "/admin/hall/create",
                            element: <CreateHall />,
                        }
                    ]
                },
                {
                    path: "/admin/cinema",
                    element: <AdminCinema />,
                    loader: async () => {
                        return (await getAllCinema())
                    },
                    children: [
                        {
                            path: "/admin/cinema/create",
                            element: <CreateCinema />,
                        },
                        {
                            path: "/admin/cinema/:cinemaId/edit",
                            element: <EditCinema />,
                            loader: async ( {params} ) => {
                                const id = parseInt(params.cinemaId)
                                return getOneCinema(id)
                            }
                        }
                    ]
                }
            ]
        },
    ]
);

root.render(
    <RouterProvider router={routes} />
)