import Header from './Header';
import Footer from './Footer';
import {useLoaderData, Link, useNavigate} from 'react-router-dom';
import { useEffect, useState} from 'react';
import { getSeanceByMovieId } from './api';

export default function Movie(){

    const movie = useLoaderData();
    const[seances, setSeances] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        const fun = async (movieId) => {
            const response = await getSeanceByMovieId(movieId)
            setSeances(response.data)
            console.log(response)
        }

        if(movie.success == false){
            navigate('/', {state: {message: movie.data}})
        }else{
            fun(movie.data.id)
        }
        
    }, [])

    return (
        <div>

            <Header />

            <div className='container'>
            
                <div className="about-movie mt-32 mb-10">
                    <div className="about-movie-top">
                        <div className="about-movie-group rd-about-group mb-44">
                            <div className="about-movie-video rd-about-video">
                                
                                <div class="poster-image" style={{backgroundColor: ""}}></div>

                            </div>
                        </div>
                        <div className="about-movie-statistics full-width">
                            <div className="d-flex space-between align-top full-width relative">
                                <div className="full-width">
                                    <div className="d-flex space-between">
                                        <div>
                                            <div className="about-movie-hint-text bold mt-8 rd-text-color">{movie.data.name}</div>
                                            <div className="about-movie-hint-text weight-400 mt-8">{movie.data.category}</div>
                                        </div>
                                    </div>
                                    <div className="mt-24 d-flex gap-10">
                                        <div className="seance__age">
                                            <span className="age group4">{movie.data.age_restriction}+</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex absolute rd-rating">
                                    <div className="rd-rating-content">
                                        <span>{movie.data.rating}</span>
                                        <span>Kino.kz</span>
                                    </div>
                                        {/* <div className="rd-rating-content rd-other">
                                            <span>-</span>
                                            <span>IMDB</span>
                                        </div>
                                        <div className="rd-rating-content rd-other">
                                            <span>-</span>
                                            <span>КиноПоиск</span>
                                        </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="rd-tab-container mb-34 mt-32">
                    <button className="styles_button__Fc2Cf rd-tab-btn active styles_text__G8SlT styles_textColor__iJRPu">
                        О фильме
                    </button>
                    <button className="styles_button__Fc2Cf rd-tab-btn styles_text__G8SlT styles_textColor__iJRPu">
                        Отзывы (169)
                    </button>
                </div> */}

                {/* <div className="about-movie-desc tab-item-content">
                    <p>
                        Удивительная историю 35-летнего Адиля, особого человека, умственное развитие которого осталось на уровне 8-летнего ребенка. Адил живет в небольшом селе со своей 75-летней матерью, Райхан апа, которая всегда говорит Адилю, что его Всевышний любит по-особому, и потому он попадет прямиком в Рай.<br />
                        Но Адил не хочет в Рай без своей мамы. Однажды он узнает от другого 8-летнего мальчика, что если отвести маму пешком в священный город Мекку, то мама может попасть в Рай.<br />
                        Это история о силе материнской любви к своему сыну, о том, что только доброта и открытое сердце разных людей всех национальностей помогут человечеству преодолеть все трудности.<br />
                        Фильм позволяет зрителям погрузиться в удивительные пейзажи и культурные особенности регионов, через которые проходит путешествие Адиля и его мамы.
                    </p>
                </div> */}

                {/* <div className="divider my-24"><div></div></div> */}

                {/* <div className="about-movie-bottom tab-item-content">
                    <div className="about-movie-bottom-block">
                        <div className="about-movie-desc">
                            <span>Производство:</span>
                            <strong> Кыргызстан, 2024</strong>
                        </div>
                        <div className="about-movie-desc">
                            <span>Премьера в РК:</span>
                            <strong> 21.03.2024</strong>
                        </div>
                        <div className="about-movie-desc">
                            <span>Возрастной рейтинг:</span>
                            <strong> 14+</strong>
                        </div>
                        <div className="about-movie-desc">
                            <span>Продолжительность:</span>
                            <strong> 130 минут</strong>
                        </div>
                    </div>
                    <div className="about-movie-bottom-block">
                        <div className="about-movie-desc">
                            <span>Режиссер:</span>
                            <strong> Руслан Акун</strong>
                        </div>
                    </div>
                    <div className="about-movie-bottom-block">
                        <div className="about-movie-desc">
                            <span>В ролях:</span>
                        </div>
                        <div className="about-movie-actors">
                            <li className="about-movie-desc">
                                <strong>•Эмиль Эсеналиев</strong>
                            </li>
                            <li className="about-movie-desc">
                                <strong>• Анаркул Назаркулова</strong>
                            </li>
                        </div>
                    </div>
                </div> */}
{/* 
                <div className="divider my-24"><div></div></div> */}

                <div className="about-movie-filters rd-ticket-cinema-container">
                    <div className="links-group">
                        <div className="links-group-item active">
                            <span>По времени</span>
                        </div>
                        {/* <div className="links-group-item">
                            <span>По кинотеатру</span>
                        </div> */}
                    </div>
                </div>

                <div className="cinema-schedule">
                    <div className="cinema-schedule-head">
                        <div className="container">
                            <div className='w-10'>Время</div>
                            <div className='w-20'>Кинотеатр</div>
                            <div className='w-10'>Язык</div>
                            <div className='w-10'>Взрослый</div>
                            <div className='w-10'>Детский</div>
                            <div className='w-10'>Студенческий</div>
                            <div className='w-10'>VIP</div>
                            <div className='w-15'></div>
                        </div>
                    </div>
                    <div className="container cinema-schedule-body">
                        <div className="full-width">
                            {
                                seances.map((s) => {
                                    console.log(s)
                                    return(
                                        <div className="cinema-schedule-row">
                                            <div>
                                                <div className="schedule-time">
                                                    <div>??:??</div>
                                                </div>
                                            </div>
                                            <div className='w-20'>
                                                <div className="cinema-title">
                                                    <a className="link" href="/cinema/59">{s.hall.cinema.name}</a>
                                                </div>
                                                <span className="cinema-subtitle">{s.hall.name}</span>
                                            </div>
                                            <div className="row-divider">
                                                <div className="session-lang-tag active">каз</div>
                                            </div>
                                            <div className="row-divider">-</div>
                                            <div className="row-divider">-</div>
                                            <div className="row-divider">-</div>
                                            <div className="row-divider">-</div>
                                            <div className='w-15'>
                                                <Link to={'/seance/'+s.id}>
                                                    <button className="styles_button__Fc2Cf styles_primary__b7q8r ">Купить билет</button>
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>

            <Footer />

        </div>
    );
}