import React from 'react'
import { BorderForm, BorderSubmit, TitleForm } from '../../Styles/FormLogin/FormLoginStyleComponent';
import successImage from '../../Assets/success.png';
import { BorderSuccessImage } from '../../Styles/FormRegister/FormSuccessRegisterStyledComponent';
import '../../Styles/FormRegister/FormRegisterStyleCss.css';
import { Link } from 'react-router-dom';

export default function FormSuccessRegister(props) {
    const { isHide } = props;
    if (isHide !== 'SuccessRegister') {
        return (
            <div></div>
        );
    }
    return (
        <BorderForm>
            <TitleForm>
                Success
            </TitleForm>
            <BorderSuccessImage>
                <img src={successImage} alt="Success Image" className='SuccessImage' />
            </BorderSuccessImage>
            <Link to={`/user/login`}>
                <BorderSubmit className='ButtonSubmitHover'>
                    <div className='ButtonNavigateLogin'>Login</div>
                </BorderSubmit>
            </Link>
        </BorderForm>
    )
}
