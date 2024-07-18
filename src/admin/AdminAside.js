import React from 'react';
import {Link} from 'react-router-dom';
import user from '../images/man.png';
import cinema from '../images/cinema.png';
import movie from '../images/film-slate.png';
import seance from '../images/movie-3.png';
import more from '../images/other.png';

export default function Aside () {
    return (
        <div class="aside">
            <div class="aside-container">
                <div class="aside-menu">
                    <div class="aside-field-group">
                        <span>
                            <Link to={"/admin"}>
                                <div class="center">
                                    <img src={user} height={32} width={32}/>
                                    <span class="pg-16">User</span>
                                </div>
                            </Link>
                        </span>
                    </div>
                    <div class="aside-field-group">
                        <span>
                            <Link to={"/admin/cinema"}>
                                <div class="center">
                                    <img src={movie} height={32} width={32}/>
                                    <span class="pg-16">Cinema</span>
                                </div>
                            </Link>
                        </span>
                    </div>
                    <div class="aside-field-group">
                        <span>
                            <Link to={"/admin/hall"}>
                                <div class="center">
                                    <img src={movie} height={32} width={32}/>
                                    <span class="pg-16">Hall</span>
                                </div>
                            </Link>
                        </span>
                    </div>
                    <div class="aside-field-group">
                        <span>
                            <Link to={"/admin/movie"}>
                                <div class="center">
                                    <img src={movie} height={32} width={32}/>
                                    <span class="pg-16">Movie</span>
                                </div>
                            </Link>
                        </span>
                    </div>
                    <div class="aside-field-group">
                        <span>
                            <Link to={"/admin/seance"}>
                                <div class="center">
                                    <img src={seance} height={32} width={32}/>
                                    <span class="pg-16">Seance</span>
                                </div>
                            </Link>
                        </span>
                    </div>
                </div>
                <div class="aside-more">
                    <div class="aside-field-group">
                        <span>
                            <Link to={"/"} type="button" onclick="addMore()">
                                <div class="center">
                                    <img src={more} height={32} width={32}/>
                                    <span class="pg-16">Logout</span>
                                </div>
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}