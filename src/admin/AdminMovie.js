import React from 'react';
import {useLoaderData, useNavigate, Outlet, Link} from 'react-router-dom';
import { useEffect } from 'react';
import { deleteMovie } from '../api';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export default function Movie(){

    const movies = useLoaderData();
    const navigate = useNavigate();

    useEffect(() => {
        if(movies.success == false){
            navigate('/', {state: {message: movies.data}})
        }
    }, [])


    const handleClick = async (movieId) => {
        const response = await deleteMovie(movieId);
        navigate('/admin/movie', {state: {message: response.data}});
    }

    return (
        <div style={{width: "100%", display: "flex", flexDirection: "column"}} className='mt-2'>
            <Outlet />
            <div style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <div style={{padding: "5px 10px"}}>
                    <h2>Movies</h2>
                </div>
                <div style={{padding: "5px 10px"}}>
                    <Link to={'/admin/movie/create'}>
                        <button className='btn btn-primary'>Add Movie</button>
                    </Link>
                </div>
            </div>
            <div style={{padding: "1px", margin: "0px 4px", backgroundColor: "gray"}}>
                <div style={{width: "100%", display: "flex", alignItems: "center", padding: "10px 20px"}}>
                    <div style={{width: "5%", display: "flex", justifyContent: "center"}}>ID</div>
                    <div style={{width: "44%", display: "flex", justifyContent: "center"}}>Name</div>
                    <div style={{width: "20%", display: "flex", justifyContent: "center"}}>Category</div>
                    <div style={{width: "10%", display: "flex", justifyContent: "center"}}>Age restrition</div>
                    <div style={{width: "8%", display: "flex", justifyContent: "center"}}>Rating</div>
                    <div style={{width: "13%", display: "flex", justifyContent: "center"}}>Actions</div>
                </div>
                {
                    movies.data.map((m) => {
                        return(
                            <div style={{width: "100%", display: "flex", alignItems: "center", padding: "10px 20px", backgroundColor: "white", fontSize: "12px", borderTop: "1px solid gray"}}>
                                <div style={{width: "5%", padding: "1px", display: "flex", justifyContent: "center"}}>{m.id}</div>
                                <div style={{width: "44%", padding: "1px", display: "flex", justifyContent: "center"}}>{m.name}</div>
                                <div style={{width: "20%", padding: "1px", display: "flex", justifyContent: "center"}}>{m.category}</div>
                                <div style={{width: "10%", padding: "1px", display: "flex", justifyContent: "center"}}>{m.age_restriction}</div>
                                <div style={{width: "8%", padding: "1px", display: "flex", justifyContent: "center"}}>{m.rating}</div>
                                <div style={{width: "13%", padding: "1px", display: "flex", justifyContent: "space-around"}} className='ps-3'>
                                    <Link to={'/admin/movie/'+m.id+'/edit'}  className='ms-2'>
                                        <button style={{backgroundColor: "blue", border: "none", borderRadius: "8px", color: "white", paddingLeft: "5px", paddingRight: "5px"}}><b>Edit</b></button>
                                    </Link>
                                    <button className='ms-2' onClick={() => handleClick(m.id)} style={{backgroundColor: "red", border: "none", borderRadius: "8px", color: "white", paddingLeft: "5px", paddingRight: "5px"}}><b>Remove</b></button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}



{/* <div>
    <input type='search' style={{width: "100%", height: "40px"}}></input>
</div> */}