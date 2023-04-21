import React from 'react'
import { BorderForm, BorderInForm, BorderRegister, BorderSubmit, InputForm, TextForgetPassword, TitleForm } from '../../Styles/FormLogin/FormLoginStyleComponent'
import '../../Styles/FormLogin/FormLoginStyleCss.css';
import { Link } from 'react-router-dom';

export default function FormLogin(props) {
    const { isHide } = props;
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
                <form action="POST">

                    <input type='email' placeholder='Email' className='FormInput'></input>

                    <input type='password' placeholder='Password' className='FormInput'></input>
                    <BorderSubmit className='ButtonSubmitHover'>
                        <button type='submit' className='ButtonSubmit'>Masuk</button>
                    </BorderSubmit>
                </form>
                <TextForgetPassword className='TextForgetPass'>
                    Forget password?
                </TextForgetPassword>
                <Link to={`/user/register`}>
                    <BorderRegister className='ButtonDaftarHover'>
                        Daftar
                    </BorderRegister>
                </Link>
            </BorderInForm>
        </BorderForm>
    )
}
