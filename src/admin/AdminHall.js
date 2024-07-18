import React from 'react';
import {useLoaderData, useNavigate, Outlet, Link} from 'react-router-dom';
import { useEffect} from 'react';
import { addPlace } from '../api';


export default function Hall () {

    const halls = useLoaderData();
    const navigate = useNavigate();

    useEffect(() => {
        if(halls.success == false){
            navigate('/', {state: {message: halls.data}})
        }
    }, [])

    const handleClick = async (hallId) => {
        const response = await addPlace(hallId);
        navigate('/admin/hall', {state: {message: response.data}});
    }

    return (
        <div style={{width: "100%", display: "flex", flexDirection: "column"}} className='mt-2'>
            <Outlet />
            <div style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <div style={{padding: "5px 10px"}}>
                    <h2>Hall</h2>
                </div>
                <div style={{padding: "5px 10px"}}>
                    <Link to={'/admin/hall/create'}>
                        <button className='btn btn-primary'>Add Hall</button>
                    </Link>
                </div>
            </div>
            <div style={{padding: "1px", margin: "0px 4px", backgroundColor: "gray"}}>
                <div style={{width: "100%", display: "flex", alignItems: "center", padding: "10px 20px"}}>
                    <div style={{width: "8%", display: "flex", justifyContent: "center"}}>ID</div>
                    <div style={{width: "20%", display: "flex", justifyContent: "center"}}>Name</div>
                    <div style={{width: "32%", display: "flex", justifyContent: "center"}}>Cinema</div>
                    <div style={{width: "15%", display: "flex", justifyContent: "center"}}>Row</div>
                    <div style={{width: "15%", display: "flex", justifyContent: "center"}}>Seat</div>
                    <div style={{width: "10%", display: "flex", justifyContent: "center"}}>Actions</div>
                </div>
                {
                    halls.data.map((h) => {
                        return(
                            <div style={{width: "100%", display: "flex", alignItems: "center", padding: "10px 20px", backgroundColor: "white", fontSize: "12px", borderTop: "1px solid gray"}}>
                                <div style={{width: "8%", padding: "1px", display: "flex", justifyContent: "center"}}>{h.id}</div>
                                <div style={{width: "20%", padding: "1px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    {h.name}
                                </div>
                                <div style={{width: "32%", padding: "1px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    {h.cinema.name}
                                    <div style={{border: "1px solid gray", margin: "0 10px", padding: "2px 4px"}}>id={h.cinema.id}</div>
                                </div>
                                <div style={{width: "15%", padding: "1px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    {h.row}
                                </div>
                                <div style={{width: "15%", padding: "1px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    {h.seat}
                                </div>
                                <div style={{width: "10%", padding: "1px", display: "flex", justifyContent: "space-around"}} className='ps-3'>
                                    <button className='ms-2' onClick={() => handleClick(h.id)} style={{backgroundColor: "green", border: "none", borderRadius: "8px", color: "white", paddingLeft: "5px", paddingRight: "5px"}}><b>Add Place</b></button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}