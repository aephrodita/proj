import React, { useEffect } from "react";
import { useState } from 'react';
import {useNavigate, Link, useParams, useLoaderData} from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import { updateMovie, getOneMovie } from "../../api";

export default function EditMovie(){
    
    const navigate = useNavigate();
    const moviee = useLoaderData();
    const params = useParams();
    console.log(params)

    const [movie, setMovie] = useState({
        id: params.movieId,
        name: '',
        category: '',
        production: '',
        age_restriction: 0,
        rating: 0
    });

    useEffect(() => {
        if(moviee.success == false){
            navigate('/', {state: {message: moviee.data}})
        }else{
            fun(moviee.data.id)
        }

    }, [])

    const fun = async (movieId) => {
        const response = await getOneMovie(movieId)
        setMovie(response.data)
    }


    const handleName = (event) => {setMovie({...movie, name: event.target.value})}
    const handleCategory = (event) => { setMovie({...movie, category: event.target.value}) }
    const handleProduction = (event) => { setMovie({...movie, production: event.target.value}) }
    const handleAgeRestrition = (event) => { setMovie({...movie, age_restriction: parseInt(event.target.value)}) }
    const handleRating = (event) => { setMovie({...movie, rating: parseInt(event.target.value)}) }

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const {success, data} = await updateMovie(movie);
        if(success){
            navigate('/admin/movie', {state: {message: data}});
            navigate('/admin/movie');
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
                                        Edit the Movie
                                    </h2>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div class="form-group mb-2">
                                        <label>Name the movie: </label>
                                        <input type="text" class="form-control" placeholder="Enter name" value={movie.name} onChange={handleName}/>
                                    </div>
                                    <div class="form-group mb-2">
                                        <label>Category: </label>
                                        <input type="text" class="form-control" placeholder="Enter Category" value={movie.category} onChange={handleCategory}/>
                                    </div>
                                    <div class="form-group mb-2">
                                        <label>Production: </label>
                                        <input type="text" class="form-control" placeholder="Enter Production" value={movie.production} onChange={handleProduction}/>
                                    </div>
                                    <div class="form-group mb-2">
                                        <label>Age restrition: </label>
                                        <input type="text" class="form-control" placeholder="Enter Age restrition" value={movie.age_restriction} onChange={handleAgeRestrition}/>
                                    </div>
                                    <div class="form-group mb-4">
                                        <label>Rating: </label>
                                        <input type="text" class="form-control" placeholder="Enter Rating" value={movie.rating} onChange={handleRating}/>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <Link to={'/admin/movie'}>
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