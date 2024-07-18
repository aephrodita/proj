import React from 'react';
import {useLoaderData, useNavigate, Outlet, Link} from 'react-router-dom';
import { useEffect} from 'react';


export default function User () {

    const users = useLoaderData();
    const navigate = useNavigate();

    useEffect(() => {
        if(users.success == false){
            navigate('/', {state: {message: users.data}})
        }
    }, [])

    return (
        <div style={{width: "100%", display: "flex", flexDirection: "column"}} className='mt-2'>
            <div style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <div style={{padding: "5px 10px"}}>
                    <h2>Users</h2>
                </div>
            </div>
            <div style={{padding: "1px", margin: "0px 4px", backgroundColor: "gray"}}>
                <div style={{width: "100%", display: "flex", alignItems: "center", padding: "10px 20px"}}>
                    <div style={{width: "5%", display: "flex", justifyContent: "center"}}>ID</div>
                    <div style={{width: "30%", display: "flex", justifyContent: "center"}}>Email</div>
                    <div style={{width: "60%", display: "flex", justifyContent: "center"}}>Password</div>
                    <div style={{width: "5%", display: "flex", justifyContent: "center"}}>Role</div>
                </div>
                {
                    users.data.map((u) => {
                        return(
                            <div style={{width: "100%", display: "flex", alignItems: "center", padding: "10px 20px", backgroundColor: "white", fontSize: "12px", borderTop: "1px solid gray"}}>
                                <div style={{width: "5%", padding: "1px", display: "flex", justifyContent: "center"}}>{u.id}</div>
                                <div style={{width: "30%", padding: "1px", display: "flex", justifyContent: "center"}}>{u.email}</div>
                                <div style={{width: "60%", padding: "1px", display: "flex", justifyContent: "center"}}>{u.password}</div>
                                <div style={{width: "5%", padding: "1px", display: "flex", justifyContent: "center"}}>{u.role}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}