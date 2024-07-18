import React, { useEffect } from "react";
import { useState } from 'react';
import {useNavigate, Link, useParams, useLoaderData} from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import { updateCinema, getOneCinema } from "../../api";


export default function EditCinema () {

    const navigate = useNavigate();
    const cinemaa = useLoaderData();
    const params = useParams();
    console.log(params)

    const [cinema, setCinema] = useState({
        id: params.cinemaId,
        name: '',
        address: '',
        city_name: ''
    });

    useEffect(() => {
        if(cinemaa.success == false){
            navigate('/', {state: {message: cinemaa.data}})
        }else{
            fun(cinemaa.data.id)
        }

    }, [])

    const fun = async (cinemaId) => {
        const response = await getOneCinema(cinemaId)
        setCinema(response.data)
    }


    const handleName = (event) => {setCinema({...cinema, name: event.target.value})}
    const handleAddress = (event) => { setCinema({...cinema, address: event.target.value}) }
    const handleCityName = (event) => { setCinema({...cinema, city_name: event.target.value}) }

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const {success, data} = await updateCinema(cinema);
        if(success){
            navigate('/admin/cinema', {state: {message: data}});
            navigate('/admin/cinema');
        }else{
            toast(data)
        }
    }


    return (
        <div>
            <div className='main-form'>
                <div className='main-container-form'>
                    <div className='d-flex justify-content-center'>
                        <div style={{width: "40%",border: "1px solid black", borderRadius: "20px"}} id='bc' className='text-light mt-5'>
                            <div className="ms-4 me-4 mt-4 mb-3">
                                <div className='mb-5 text-center'>
                                    <h2>
                                        Edit the Cinema
                                    </h2>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div class="form-group mb-2">
                                        <label>Name the cinema: </label>
                                        <input type="text" class="form-control" placeholder="Enter name" value={cinema.name} onChange={handleName}/>
                                    </div>
                                    <div class="form-group mb-2">
                                        <label>Category: </label>
                                        <input type="text" class="form-control" placeholder="Enter Address" value={cinema.address} onChange={handleAddress}/>
                                    </div>
                                    <div class="form-group mb-2">
                                        <label>City Name: </label>
                                        <input type="text" class="form-control" placeholder="Enter City Name" value={cinema.city_name} onChange={handleCityName}/>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <Link to={'/admin/cinema'}>
                                            <button className='btn btn-danger' >
                                                Exit
                                            </button>
                                        </Link>
                                        <button className='btn btn-danger' type="submit" >
                                            Edited
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}