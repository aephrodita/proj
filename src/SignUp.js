import React, { useState } from "react";
import { Link } from "react-router-dom";
import x from './images/cross.png';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { signUp } from "./api";

export default function SignUp() {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('');
    const [validationErrors, setValidationErrors] = useState({});

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const { success, data } = await signUp(username, email, password);
        if(success){
            navigate('/sign-in', {state: {message: data}})
        }else{
            if(data && data.errors){
                const errors = {};
                data.errors.forEach((error) => {
                    errors[error.field] = error.defaultMessage;
                });
                setValidationErrors(errors);
            }else {
                setErrorMessage(data.message);
                console.log(errorMessage)
                navigate('/sign-up', {state: {message: errorMessage}})
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
                                <Link to={'/sign-in'} className='styles_button__Fc2Cf rd-tab-btn styles_text__G8SlT styles_textColor__iJRPu'>
                                    Войти
                                </Link>
                                <Link className='styles_button__Fc2Cf rd-tab-btn styles_text__G8SlT styles_textColor__iJRPu active'>
                                    Регистрация
                                </Link>
                                <div className="rd-underline"></div>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <div className="input-field">
                                        <div className="input" style={{height: "56px"}}>
                                            <input type="username" name="username" value={username} onChange={(e) => setUsername(e.target.value) } placeholder="Введите имя" />
                                        </div>
                                        {
                                            validationErrors.username && (
                                                <p style={{ color: 'red' }}>{validationErrors.username}</p>
                                            )
                                        }
                                    </div>
                                    <div className="input-field" style={{paddingTop: "10px"}}>
                                        <div className="input" style={{height: "56px"}}>
                                            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value) } placeholder="Введите почту" />
                                        </div>
                                        {
                                            validationErrors.email && (
                                                <p style={{ color: 'red' }}>{validationErrors.email}</p>
                                            )
                                        }
                                    </div>
                                    <div className="input-field" style={{paddingTop: "10px"}}>
                                        <div className="input" style={{height: "56px"}}>
                                            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value) } placeholder="Введите пароль" />
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
