import React from "react";
import { useState } from 'react';
import {useNavigate, Link} from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import { addHall } from "../../api";

export default function CreateHall () {

    const navigate = useNavigate();

    const [hall, setHall] = useState({
        name: '',
        cinema: 0,
        row: 0,
        seat: 0
    });

    const handleName = (event) => {setHall({...hall, name: event.target.value})}
    const handleCinemaId = (event) => { setHall({...hall, cinema: parseInt(event.target.value)}) }
    const handleRow = (event) => { setHall({...hall, row: parseInt(event.target.value)}) }
    const handleSeat = (event) => { setHall({...hall, seat: parseInt(event.target.value)}) }

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const {success, data} = await addHall(hall);
        if(success){
            console.log(data)
            navigate('/admin/hall', {state: {message: data}});
            navigate('/admin/hall')
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
                                        Add the Hall
                                    </h2>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div class="form-group mb-2">
                                        <label>Name the hall: </label>
                                        <input type="text" class="form-control" placeholder="Enter name" value={hall.name} onChange={handleName}/>
                                    </div>
                                    <div class="form-group mb-2">
                                        <label>Cinema Id: </label>
                                        <input type="text" class="form-control" placeholder="Enter Cinema Id" value={hall.cinema} onChange={handleCinemaId}/>
                                    </div>
                                    <div class="form-group mb-2">
                                        <label>Row: </label>
                                        <input type="text" class="form-control" placeholder="Enter City Row" value={hall.row} onChange={handleRow}/>
                                    </div>
                                    <div class="form-group mb-2">
                                        <label>Seat: </label>
                                        <input type="text" class="form-control" placeholder="Enter City Seat" value={hall.seat} onChange={handleSeat}/>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <Link to={'/admin/hall'}>
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