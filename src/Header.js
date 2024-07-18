import logo from './images/new-logo-desktop.svg';
import { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

export default function Header(){

    const [hasToken, setHasToken] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {

        const user = JSON.parse(localStorage.getItem("user"));
        if(user){
            setHasToken(true);
        }

    }, [])

    const logout = () => {
        localStorage.removeItem("user");
        navigate("/",{state: {message: "Вы вышли из аккаунта"}});
        window.location.reload();
    }

    return (
        <div className="header">
            <div className="container">
                <div className="header-left">
                    <Link to="/">
                        <span>
                            <img src={logo} alt="" />
                        </span>
                    </Link>
                    <div className="dropdown-wrapper">
                        <span className="title">
                            Алматы
                            <svg className="dropdown-icon large" width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.77552 5.41257C5.8995 5.52914 6.1005 5.52914 6.22448 5.41257L10.907 1.00958C11.031 0.89301 11.031 0.704005 10.907 0.587431C10.783 0.470856 10.582 0.470856 10.4581 0.587431L6 4.78808L1.54194 0.587431C1.41796 0.470856 1.21696 0.470856 1.09298 0.587431C0.969006 0.704005 0.969006 0.89301 1.09298 1.00958L5.77552 5.41257Z" fill="currentColor" stroke="currentColor"></path>
                            </svg>
                        </span>
                    </div>
                </div>
                <div className="header-btns-group justify-end hide-xs">
                    {/* <div className="header-locale-changer mr-50">
                        <div className="header-locale-changer__label">
                            <span>Рус</span>
                            <svg className="dropdown-icon large" width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.77552 5.41257C5.8995 5.52914 6.1005 5.52914 6.22448 5.41257L10.907 1.00958C11.031 0.89301 11.031 0.704005 10.907 0.587431C10.783 0.470856 10.582 0.470856 10.4581 0.587431L6 4.78808L1.54194 0.587431C1.41796 0.470856 1.21696 0.470856 1.09298 0.587431C0.969006 0.704005 0.969006 0.89301 1.09298 1.00958L5.77552 5.41257Z" fill="currentColor" stroke="currentColor"></path>
                            </svg>
                        </div>
                    </div> */}
                    {
                        hasToken ? (
                            <div className="header-auth-menu">
                                <div className="header-auth-menu-icon">
                                    <div className="icon-btn strokes">
                                        <Link class="no-link" to={"/ticket"}>
                                            <div class="icon-btn active strokes btn outlined">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><g clip-path="url(#clip0_14841_2388)"><path d="M5.70086 14.2962C6.02582 14.6213 6.21609 15.057 6.23362 15.5163C6.25115 15.9756 6.09464 16.4246 5.79539 16.7735C5.77064 16.8026 5.75777 16.8399 5.75937 16.878C5.76096 16.9161 5.7769 16.9522 5.80398 16.979L7.52781 18.7048C7.55631 18.7333 7.59494 18.7493 7.63523 18.7493C7.67552 18.7493 7.71416 18.7333 7.74265 18.7048L10.4903 15.9571C10.5917 15.8558 10.6681 15.7322 10.7134 15.5962C10.7585 15.4599 10.8348 15.3359 10.9361 15.2342C11.0375 15.1325 11.1612 15.0558 11.2973 15.0103C11.4334 14.9649 11.5571 14.8885 11.6587 14.7872L18.7052 7.74229C18.7336 7.71379 18.7496 7.67515 18.7496 7.63487C18.7496 7.59458 18.7336 7.55594 18.7052 7.52744L16.9813 5.80362C16.9545 5.77653 16.9184 5.76059 16.8803 5.759C16.8422 5.75741 16.8049 5.77027 16.7759 5.79502C16.427 6.09459 15.9779 6.25136 15.5185 6.23393C15.059 6.21651 14.6231 6.02618 14.2979 5.70106C13.9728 5.37593 13.7825 4.94 13.7651 4.48053C13.7476 4.02106 13.9044 3.57196 14.204 3.22315C14.2287 3.19413 14.2416 3.15683 14.24 3.11873C14.2384 3.08062 14.2225 3.04453 14.1954 3.01768L12.4716 1.29385C12.4431 1.26537 12.4044 1.24937 12.3641 1.24937C12.3239 1.24937 12.2852 1.26537 12.2567 1.29385L5.20984 8.34034C5.1085 8.44187 5.03215 8.56557 4.9868 8.70166C4.94167 8.83798 4.86539 8.96191 4.76402 9.06362C4.66265 9.16533 4.53898 9.24201 4.40281 9.2876C4.26681 9.3329 4.14323 9.40927 4.04187 9.51065L1.29422 12.2583C1.26574 12.2868 1.24974 12.3254 1.24974 12.3657C1.24974 12.406 1.26574 12.4447 1.29422 12.4731L3.01805 14.197C3.04489 14.2241 3.08099 14.24 3.11909 14.2416C3.1572 14.2432 3.1945 14.2303 3.22351 14.2056C3.57192 13.9058 4.02064 13.7486 4.47994 13.7654C4.93925 13.7822 5.37528 13.9718 5.70086 14.2962V14.2962Z" stroke="#9046FF" stroke-width="0.779866" stroke-miterlimit="10"></path><path d="M10.2146 14.5128L10.8595 15.1577M8.49504 12.7933L8.92512 13.2229M6.77551 11.0733L7.2052 11.5034M4.84075 9.13896L5.48567 9.78389" stroke="#9046FF" stroke-width="1.24779" stroke-miterlimit="10" stroke-linecap="round"></path></g><defs><clipPath id="clip0_14841_2388"><rect width="20" height="20" fill="white" transform="matrix(-1 0 0 -1 20 20)"></rect></clipPath></defs></svg>
                                                <span class="">Мои билеты</span>
                                            </div>
                                        </Link>
                                        <button onClick={logout} style={{background: "none", border: "none"}}>
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '70px', width: '70px' }}>
                                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ position: 'absolute' }}>
                                                    <circle cx="20" cy="20" r="19.5" stroke="#303044"></circle>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 24" fill="none" style={{ position: 'absolute' }}>
                                                    <path d="M19.7778 21.9999V19.7777C19.7778 18.599 19.3095 17.4685 18.476 16.635C17.6425 15.8015 16.5121 15.3333 15.3333 15.3333H6.44444C5.2657 15.3333 4.13524 15.8015 3.30175 16.635C2.46825 17.4685 2 18.599 2 19.7777V21.9999" stroke="#303044" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M10.8889 10.8889C13.3435 10.8889 15.3333 8.89904 15.3333 6.44444C15.3333 3.98985 13.3435 2 10.8889 2C8.4343 2 6.44446 3.98985 6.44446 6.44444C6.44446 8.89904 8.4343 10.8889 10.8889 10.8889Z" stroke="#303044" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg> */}
                                                
                                                
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-box-arrow-left" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
                                                    <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
                                                </svg>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Link to={"/sign-in"}><button className="btn new" type="button">Войти</button></Link>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

