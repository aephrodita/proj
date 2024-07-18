import React from 'react';
import {useLoaderData, useNavigate, Outlet, Link} from 'react-router-dom';
import { useEffect} from 'react';


export default function Seance () {

    const seances = useLoaderData();
    const navigate = useNavigate();

    useEffect(() => {
        if(seances.success == false){
            navigate('/', {state: {message: seances.data}})
        }
    }, [])

    return (
        <div style={{width: "100%", display: "flex", flexDirection: "column"}} className='mt-2'>
            <Outlet />
            <div style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <div style={{padding: "5px 10px"}}>
                    <h2>Seances</h2>
                </div>
                <div style={{padding: "5px 10px"}}>
                    <Link to={'/admin/seance/create'}>
                        <button className='btn btn-primary'>Add Seance</button>
                    </Link>
                </div>
            </div>
            <div style={{padding: "1px", margin: "0px 4px", backgroundColor: "gray"}}>
                <div style={{width: "100%", display: "flex", alignItems: "center", padding: "10px 20px"}}>
                    <div style={{width: "5%", display: "flex", justifyContent: "center"}}>ID</div>
                    <div style={{width: "37%", display: "flex", justifyContent: "center"}}>Cinema</div>
                    <div style={{width: "45%", display: "flex", justifyContent: "center"}}>Movie</div>
                    {/* <div style={{width: "13%", display: "flex", justifyContent: "center"}}>Actions</div> */}
                </div>
                {
                    seances.data.map((s) => {
                        return(
                            <div style={{width: "100%", display: "flex", alignItems: "center", padding: "10px 20px", backgroundColor: "white", fontSize: "12px", borderTop: "1px solid gray"}}>
                                <div style={{width: "5%", padding: "1px", display: "flex", justifyContent: "center"}}>{s.id}</div>
                                <div style={{width: "37%", padding: "1px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    {s.hall.cinema.name}
                                    <div style={{border: "1px solid gray", margin: "0 10px", padding: "2px 4px"}}>id={s.hall.cinema.id}</div>
                                </div>
                                <div style={{width: "45%", padding: "1px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    {s.movie.name}
                                    <div style={{border: "1px solid gray", margin: "0 10px", padding: "2px 4px"}}>id={s.movie.id}</div>
                                </div>
                                {/* <div style={{width: "13%", padding: "1px", display: "flex", justifyContent: "space-around"}}>
                                    <Link to={''}>
                                        <button style={{backgroundColor: "green", border: "none", borderRadius: "8px", color: "white"}}><b>More</b></button>
                                    </Link>
                                </div> */}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}