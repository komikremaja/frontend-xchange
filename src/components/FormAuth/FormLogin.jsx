import React from 'react'
import { BorderForm, BorderInForm, InputForm, TitleForm } from '../../Styles/FormLogin/FormLoginStyleComponent'
import '../../Styles/FormLogin/FormLoginStyleCss.css';

export default function FormLogin() {
    return (
        <BorderForm>
            <TitleForm>
                Login
            </TitleForm>
            <BorderInForm>
                <input type='text' placeholder='Email' className='FormInput'></input>

                <input type='password' placeholder='Password' className='FormInput'></input>

            </BorderInForm>
        </BorderForm>
    )
}
