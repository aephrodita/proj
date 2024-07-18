import React from 'react';
import {useLoaderData, useNavigate, Outlet, Link} from 'react-router-dom';
import { useEffect} from 'react';
import { deleteCinema } from '../api';


export default function Cinema () {

    const cinemas = useLoaderData();
    const navigate = useNavigate();

    useEffect(() => {
        if(cinemas.success == false){
            navigate('/', {state: {message: cinemas.data}})
        }
    }, [])


    const handleClick = async (cinemaId) => {
        const response = await deleteCinema(cinemaId);
        navigate('/admin/cinema', {state: {message: response.data}});
    }

    return (
        <div style={{width: "100%", display: "flex", flexDirection: "column"}} className='mt-2'>
            <Outlet />
            <div style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <div style={{padding: "5px 10px"}}>
                    <h2>Cinemas</h2>
                </div>
                <div style={{padding: "5px 10px"}}>
                    <Link to={'/admin/cinema/create'}>
                        <button className='btn btn-primary'>Add Cinema</button>
                    </Link>
                </div>
            </div>
            <div style={{padding: "1px", margin: "0px 4px", backgroundColor: "gray"}}>
                <div style={{width: "100%", display: "flex", alignItems: "center", padding: "10px 20px"}}>
                    <div style={{width: "5%", display: "flex", justifyContent: "center"}}>ID</div>
                    <div style={{width: "35%", display: "flex", justifyContent: "center"}}>Name</div>
                    <div style={{width: "40%", display: "flex", justifyContent: "center"}}>Address</div>
                    <div style={{width: "10%", display: "flex", justifyContent: "center"}}>City name</div>
                    <div style={{width: "10%", display: "flex", justifyContent: "center"}}>Actions</div>
                </div>
                {
                    cinemas.data.map((c) => {
                        return(
                            <div style={{width: "100%", display: "flex", alignItems: "center", padding: "10px 20px", backgroundColor: "white", fontSize: "12px", borderTop: "1px solid gray"}}>
                                <div style={{width: "5%", padding: "1px", display: "flex", justifyContent: "center"}}>{c.id}</div>
                                <div style={{width: "35%", padding: "1px", display: "flex", justifyContent: "center"}}>{c.name}</div>
                                <div style={{width: "40%", padding: "1px", display: "flex", justifyContent: "center"}}>{c.address}</div>
                                <div style={{width: "10%", padding: "1px", display: "flex", justifyContent: "center"}}>{c.city_name}</div>
                                <div style={{width: "10%", padding: "1px", display: "flex", justifyContent: "space-around"}}>
                                    <Link to={'/admin/cinema/'+c.id+'/edit'} className='ms-3'>
                                        <button style={{backgroundColor: "blue", border: "none", borderRadius: "8px", color: "white", paddingLeft: "5px", paddingRight: "5px"}}><b>Edit</b></button>
                                    </Link>
                                    <button className='ms-2' onClick={() => handleClick(c.id)} style={{backgroundColor: "red", border: "none", borderRadius: "8px", color: "white", paddingLeft: "5px", paddingRight: "5px"}}><b>Remove</b></button>
                                    
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}