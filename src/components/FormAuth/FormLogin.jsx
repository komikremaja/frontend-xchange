import React, { useState } from 'react'
import { BorderForm, BorderInForm, BorderRegister, BorderSubmit, InputForm, TextForgetPassword, TitleForm } from '../../Styles/FormLogin/FormLoginStyleComponent'
import '../../Styles/FormLogin/FormLoginStyleCss.css';
import { Link, useNavigate } from 'react-router-dom';
import { ErrorMessageCannotEmpty } from '../../Styles/FormRegister/FormSuccessRegisterStyledComponent';
import { AuthService } from '../../Services/RegisterService';

export default function FormLogin(props) {
    const { isHide } = props;
    const [email, setEmail] = useState();
    const [emailEmpty, setEmailEmpty] = useState();
    const [password, setPassword] = useState();
    const [passwordEmpty, setPasswordEmpty] = useState();
    const [passwordError, setPasswordError] = useState();
    const [passwordErrorShow, setPasswordErrorShow] = useState();
    const navigate = useNavigate();

    function emailHandler(e) {
        setEmail(e.target.value);
        setEmailEmpty("");
    }

    function passwordHandler(e) {
        setPassword(e.target.value);
        setPasswordEmpty("");
    }

    function validationEmail() {
        if (email === undefined || email === '') {
            setEmailEmpty("ShowDisplay");
        }
    }

    function validationPassword() {
        if (password === undefined || password === '') {
            setPasswordEmpty("ShowDisplay");
        }
    }

    const login = async () => {
        const data = {
            email,
            password
        }
        const responseLogin = await AuthService(data);
        console.log("Response login: ", responseLogin);
        if (responseLogin.data.status < 400) {
            const token = responseLogin.data.data.accessToken;
            if (responseLogin.data.status === 201 && token) {
                console.log(`Response API Login`, responseLogin);
                const user = responseLogin.data.data;
                localStorage.setItem("user", JSON.stringify(user));
                document.cookie = `user=${JSON.stringify(user)};expires=${new Date(Date.now() + 3600000)};path=/dashboard`;
                console.log(token);
                navigate(`/dashboard`);
            } else {
                console.log(responseLogin.data);
            }
        } else {
            setPasswordErrorShow("ShowDisplay");
            setPasswordError(responseLogin.data.message);
        }
    };


    function submitLogin(e) {
        e.preventDefault();
        validationEmail();
        validationPassword();
        login();
    }

    if (isHide !== 'Login') {
        return (
            <div></div>
        );
    }
    return (
        <BorderForm>
            <TitleForm>
                Login
            </TitleForm>
            <BorderInForm>
                <form action="POST" onSubmit={submitLogin}>
                    <ErrorMessageCannotEmpty className={emailEmpty}>Email tidak boleh kosong</ErrorMessageCannotEmpty>
                    <input type='email' placeholder='Email' className='FormInput' onChange={emailHandler}></input>
                    <ErrorMessageCannotEmpty className={passwordEmpty}>Password tidak boleh kosong</ErrorMessageCannotEmpty>
                    <input type='password' placeholder='Password' className='FormInput' minLength="8" maxLength="20" onChange={passwordHandler}></input>
                    <ErrorMessageCannotEmpty className={passwordErrorShow}>{passwordError}</ErrorMessageCannotEmpty>
                    <BorderSubmit className='ButtonSubmitHover'>
                        <button type='submit' className='ButtonSubmit'>Masuk</button>
                    </BorderSubmit>
                </form>
                <Link to={`/user/forget-pass`}>
                    <TextForgetPassword className='TextForgetPass'>
                        Forget password?
                    </TextForgetPassword>
                </Link>
                <Link to={`/user/forget-pin`}>
                    <TextForgetPassword className='TextForgetPass'>
                        Forget pin?
                    </TextForgetPassword>
                </Link>
                <Link to={`/user/register`}>
                    <BorderRegister className='ButtonDaftarHover'>
                        Daftar
                    </BorderRegister>
                </Link>
            </BorderInForm>
        </BorderForm>
    )
}
