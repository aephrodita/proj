import { Link } from "react-router-dom";
import x from './images/cross.png';
import { useState } from "react";
import { Login } from "./api";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { jwtDecode } from 'jwt-decode';

export default function SignIn() {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('');
    const [validationErrors, setValidationErrors] = useState({});

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const { success, data } = await Login(username, password);
        if(success){
            const decodedToken = jwtDecode(JSON.parse(localStorage.getItem("user")).token);
            if(decodedToken.role == "ROLE_ADMIN"){
                navigate('/admin', {state: {message: data}})
            }else{
                navigate('/', {state: {message: data}})
                window.location.reload();
            }
        }else{
            if(data && data.errors){
                const errors = {};
                data.errors.forEach((error) => {
                    errors[error.field] = error.defaultMessage;
                });
                setValidationErrors(errors);
            }else {
                setErrorMessage('Логин или пароль неверный');
                navigate('/sign-in', {state: {message: errorMessage}})
            }
        }
    }

    return (
        <div style={{position: "fixed", zIndex: "1"}}>
            <section className="overlay" >
                <div className="modal-block">
                    <div className="rd-modal-container absolute">
                        <div className="rd-modal-content">
                            <button className="rd-close-modal-btn" style={{backgroundColor: "white"}}>
                                <span>
                                    <Link to={'/'}>
                                        <img src={x} style={{width: "16px", height: "16px"}} alt="Close" />
                                    </Link>
                                </span>
                            </button>
                            <h1>Авторизация</h1>
                            <div className="rd-tab-container mb-22 mt-16">
                                <Link className='styles_button__Fc2Cf rd-tab-btn styles_text__G8SlT styles_textColor__iJRPu active'>
                                    Войти
                                </Link>
                                <Link to={'/sign-up'} className='styles_button__Fc2Cf rd-tab-btn styles_text__G8SlT styles_textColor__iJRPu'>
                                    Регистрация
                                </Link>
                                <div className="rd-underline"></div>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <div className="input-field">
                                        <div className="input" style={{height: "56px"}}>
                                            <input type="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Введите имя" />
                                        </div>
                                        {
                                            validationErrors.username && (
                                                <p style={{ color: 'red' }}>{validationErrors.username}</p>
                                            )
                                        }
                                    </div>
                                    <div className="input-field" style={{paddingTop: "10px"}}>
                                        <div className="input" style={{height: "56px"}}>
                                            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Введите пароль" />
                                        </div>
                                        {
                                            validationErrors.password && (
                                                <p style={{ color: 'red' }}>{validationErrors.password}</p>
                                            )
                                        }
                                    </div>
                                </div>
                                <button className="styles_button__Fc2Cf rd-submit-btn mt-32 styles_primary__b7q8r" type="submit">
                                    Далее
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
