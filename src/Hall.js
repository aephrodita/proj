import {useEffect, useState} from 'react';
import {useLoaderData} from 'react-router-dom';
import displayLight from './images/display_light.svg';
import PlaceService from './service/PlaceService';

export default function Hall(){

    const hall = useLoaderData();

    const[places, setPlaces] = useState([]);

    useEffect(() => {

        PlaceService.getHallPlace(hall.id).then((response) => {
            setPlaces(response.data);
        });

    }, []);

    return (
        <div id="root">
            <div className="App">
                <header className="header">
                    <div className="media">
                        <div class="media__preview">
                            <picture>
                                <img src="" alt="banner" />
                            </picture>
                        </div>
                        <div class="media__content">
                            <div class="media__content-text">
                            <div style={{display: "inline-block"}}>
                                </div> • {hall.name}
                            </div>
                            <div class="media__content-text--summary">
                                <div>
                                    {hall.cinema.name}
                                    <span class="text-gray"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <svg width="156" height="46" viewBox="0 0 156 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M112.227 28.2471C111.02 28.2471 110.041 29.2303 110.041 30.443C110.041 31.6555 111.02 32.6387 112.227 32.6387C113.434 32.6387 114.413 31.6555 114.413 30.443C114.413 29.2303 113.434 28.2471 112.227 28.2471Z" fill="#161620"></path>
                        <path d="M76.9174 13.3796C75.7099 13.3796 74.7314 14.3628 74.7314 15.5754C74.7314 16.7883 75.7099 17.7715 76.9174 17.7715C78.1245 17.7715 79.1033 16.7883 79.1033 15.5754C79.1033 14.3628 78.1245 13.3796 76.9174 13.3796Z" fill="#161620"></path>
                        <path d="M75.166 32.6387H78.6692V19.2773H75.166V32.6387Z" fill="#161620"></path>
                        <path d="M88.6602 19.0198C87.8627 19.0198 87.1245 19.1843 86.4456 19.5134C85.7671 19.8424 85.1045 20.3885 84.4589 21.1514V19.2773H80.9561V32.6387H84.4589V23.7552C85.0288 23.011 85.5508 22.4796 86.0257 22.16C86.5001 21.8405 87.0083 21.6807 87.5496 21.6807C88.2614 21.6807 88.8242 21.9334 89.2369 22.4389C89.6502 22.9445 89.8566 23.6311 89.8566 24.4991V32.6387H93.3454V24.1412C93.3454 22.6058 92.9206 21.3684 92.0711 20.4289C91.2211 19.4897 90.0844 19.0198 88.6602 19.0198Z" fill="#161620"></path>
                        <path d="M104.907 29.1483C104.252 29.9116 103.355 30.2927 102.215 30.2927C101.123 30.2927 100.252 29.8946 99.6019 29.0983C98.9517 28.3023 98.6264 27.2365 98.6264 25.901C98.6264 24.6136 98.9586 23.5789 99.6234 22.7966C100.288 22.0147 101.152 21.6236 102.215 21.6236C103.345 21.6236 104.24 21.9933 104.9 22.7323C105.56 23.4715 105.889 24.5184 105.889 25.8725C105.889 27.2937 105.562 28.3855 104.907 29.1483ZM106.018 19.8926C104.888 19.3111 103.63 19.02 102.244 19.02C100.876 19.02 99.6327 19.3086 98.5125 19.8854C97.3921 20.4627 96.5187 21.2732 95.8921 22.3173C95.2656 23.3618 94.9521 24.5564 94.9521 25.901C94.9521 27.2841 95.2491 28.4952 95.8423 29.5348C96.4356 30.5743 97.3021 31.3941 98.4415 31.9953C99.5807 32.596 100.848 32.8965 102.244 32.8965C103.63 32.8965 104.9 32.596 106.053 31.9953C107.207 31.3941 108.08 30.5743 108.674 29.5348C109.267 28.4952 109.564 27.2841 109.564 25.901C109.564 24.5757 109.255 23.3881 108.638 22.3388C108.021 21.2899 107.147 20.4745 106.018 19.8926Z" fill="#161620"></path>
                        <path d="M135.748 30.0064L142.67 19.2773H130.451V21.9381H136.859L129.956 32.5901L123.932 25.8724L129.33 19.2773H125.214L119.887 25.6848V13.3799H116.384V32.6387H119.887V26.0534L125.556 32.6387H129.924H142.698V30.0064H135.748Z" fill="#161620"></path>
                        <path d="M73.5739 19.2773H69.458L64.1311 25.6848V13.3799H60.6279V32.6387H64.1311V26.0534L69.7998 32.6387H74.2432L68.1763 25.8724L73.5739 19.2773Z" fill="#161620"></path>
                        <path d="M41.4561 13.3799C36.989 13.3799 33.2358 16.4489 32.172 20.6024C31.1079 16.4489 27.3546 13.3799 22.8878 13.3799C17.5936 13.3799 13.3018 17.6913 13.3018 23.0093C13.3018 28.3276 17.5936 32.6387 22.8878 32.6387C27.3546 32.6387 31.1079 29.5697 32.172 25.4163C33.2358 29.5697 36.989 32.6387 41.4561 32.6387C46.7503 32.6387 51.042 28.3276 51.042 23.0093C51.042 17.6913 46.7503 13.3799 41.4561 13.3799Z" fill="#00F000"></path>
                    </svg>
                </header>
                <div class="Schema">
                    <div style={{width: "600px", margin: "10px auto 0px"}}>
                        <div class="Display">
                            <img src={displayLight} />
                        </div>
                    </div>
                    <div>
                        <div style={{width: `${hall.seat * 34 + 8}px`, height: `${hall.row * 34}px`, position: "relative", zIndex: 1, margin: "50px auto"}}>

                            {
                                places.map((p) => {
                                    if(p.z == 1){
                                        return(
                                            <a class="place" style={{width: "30px", height: "30px", top: `${p.y * 34}px`, left: `${p.x * 34}px`, position: "absolute"}}>
                                                <div class="rui-popover" tabindex="-1">
                                                    <div class="rui-popover__children">
                                                        <div class="styles_seat_wrapper__3q6iZ" style={{width: "30px", height: "30px"}}>
                                                            <div class="styles_seat__1o2Ny" style={{width: "30px", height: "30px"}}>
                                                                <svg class="styles_seat__default__1vm_O" width="30" height="26" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M1 2.03714C1 2.03714 2.16071 1 7.5 1C12.2273 1 14 2.03714 14 2.03714V12H1V2.03714Z" fill="#9797A5" fill-opacity="0.2"></path>
                                                                    <path d="M1 1V12H14V1" stroke="#9797A5" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                    <text x="50%" y="50%" alignment-baseline="middle" text-anchor="middle" fill="#000" font-size="7">{p.x+1}</text>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        )
                                    }else if(p.z == 0){
                                        return(
                                            <a class="place" style={{width: "30px", height: "30px", top: `${p.y * 34}px`, left: `${p.x * 34}px`, position: "absolute"}}>
                                                <div class="rui-popover" tabindex="-1">
                                                    <div class="rui-popover__children">
                                                        <div class="styles_seat_wrapper__3q6iZ" style={{width: "30px", height: "30px", opacity: 0.2}}>
                                                            <div class="styles_seat__1o2Ny" style={{width: "30px", height: "30px"}}>
                                                                <svg class="styles_seat__default__1vm_O" width="30" height="26" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M1 2.03714C1 2.03714 2.16071 1 7.5 1C12.2273 1 14 2.03714 14 2.03714V12H1V2.03714Z" fill="#9797A5" fill-opacity="0.2"></path>
                                                                    <path d="M1 1V12H14V1" stroke="#9797A5" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                    <text x="50%" y="50%" alignment-baseline="middle" text-anchor="middle" fill="#000" font-size="7">{p.x+1}</text>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        )
                                    }
                                })
                            }
                            
                            {
                                Array.from({ length: hall.row }).map((_, i) => (
                                    <div key={i} className="column" style={{top: `${i * 34}px`, left: `${hall.seat * 34}px`, width: "30px", height: "30px", lineHeight: "30px", position: "absolute", textAlign: "center"}}>
                                        {i + 1}
                                    </div>
                                ))
                            }
                            {
                                Array.from({ length: hall.row }).map((_, i) => (
                                    <div key={i} className="column" style={{top: `${i * 34}px`, left: "-32px", width: "30px", height: "30px", lineHeight: "30px", position: "absolute", textAlign: "center"}}>
                                        {i + 1}
                                    </div>
                                ))
                            }


                        </div>
                        <div class="vertical_liner" style={{height: `${hall.row * 34}px`, left: "calc(50% - 7px)", bottom: "20px"}}></div>
                        <div class="centered_liner" style={{left:" calc(50% - 32px)"}}>центр</div>
                    </div>
                </div>
            </div>
            <div class="Toastify"></div>
        </div>
    );
}