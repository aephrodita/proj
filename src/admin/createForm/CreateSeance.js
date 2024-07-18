import React from "react";
import { useState } from 'react';
import {useNavigate, Link, useParams} from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import { addSeance } from "../../api";

export default function CreateSeance(){

    const navigate = useNavigate();
    const params = useParams();

    const [seance, setSeance] = useState({
        hall: 0,
        movie: 0
    });

    const handleHall = (event) => { setSeance({...seance, hall: parseInt(event.target.value)}) }
    const handleMovie = (event) => { setSeance({...seance, movie: parseInt(event.target.value)}) }

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const {success, data} = await addSeance(seance);
        if(success){
            navigate('/admin/seance', {state: {message: data}});
            navigate('/admin/seance');
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
                                        Add the Movie
                                    </h2>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div class="form-group mb-2">
                                        <label>Hall id: </label>
                                        <input type="text" class="form-control" placeholder="Enter name" value={seance.hall} onChange={handleHall}/>
                                    </div>
                                    <div class="form-group mb-2">
                                        <label>Movie id: </label>
                                        <input type="text" class="form-control" placeholder="Enter name" value={seance.movie} onChange={handleMovie}/>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <Link to={'/admin/seance'}>
                                            <button className='btn btn-danger' >
                                                Exit
                                            </button>
                                        </Link>
                                        <button className='btn btn-danger' type="submit" >
                                            Added
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