import React, { useEffect, useState } from 'react'
import { BorderForm, BorderInForm, BorderSubmit, TitleForm } from '../../Styles/FormLogin/FormLoginStyleComponent'
import '../../Styles/FormForgetPass/FormForgetPassStyleCss.css'
import { ErrorMessageCannotEmpty } from '../../Styles/FormRegister/FormSuccessRegisterStyledComponent';
import { ForgetPassService, ForgetPinService } from '../../Services/RegisterService';
import { useNavigate } from 'react-router-dom';
import * as ReactBootStrap from 'react-bootstrap';
import { BorderLoading } from '../../Styles/FormForgetPass/FormForgetPassStyleComponent';

export default function FormForgetPass(props) {
    const { isHide } = props;
    const [email, setEmail] = useState();
    const [emailEmpty, setEmailEmpty] = useState();
    const [emailError, setEmailError] = useState();
    const [loadingShow, setLoadingShow] = useState();
    const [disabledSend, setDisabledSend] = useState(false);
    const [titleForm, setTitleForm] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        if (isHide === "ForgetPass") {
            setTitleForm("Forget Password");
        } else {
            setTitleForm("Forget Pin")
        }
    }, []);


    const forgetPassApi = async () => {
        const data = {
            email
        }

        setLoadingShow("ShowDisplayLoading");
        setDisabledSend(true);
        console.log("class name loading: ", loadingShow);
        let responseForgetPass;
        if (isHide === "ForgetPass") {
            responseForgetPass = await ForgetPassService(data);
        }else if(isHide === "ForgetPin"){
            responseForgetPass = await ForgetPinService(data);
        }
        console.log("Response Forget Password", responseForgetPass.data);
        return new Promise((resolve, reject) => {
            if (!responseForgetPass) {
                // Jika belum menerima response dari ForgetPassService
                // Keluarkan Loading image di tengah tengah
                // Contoh:
                // document.getElementById("loading-image").style.display = "block";
            } else {
                if (responseForgetPass.data.message === "Email tidak terdaftar") {
                    setEmailError("ShowDisplay");
                    setLoadingShow("");
                    reject('Email not registered');
                }
                if (responseForgetPass.data.status === 200) {
                    navigate(`/user/success`);
                    resolve('Success');
                } else {
                    reject('Response has error');
                }
            }
        });
    }

    function emailHandler(e) {
        setEmail(e.target.value);
        setEmailEmpty("");
        setEmailError("");
        setDisabledSend(false);
    }

    function validateEmail() {
        if (email === undefined || email === '') {
            setEmailEmpty("ShowDisplay");
            return false;
        }
        return true;
    }

    if (isHide !== 'ForgetPass' && isHide !== 'ForgetPin') {
        return (
            <div></div>
        )
    }

    function submitForm(e) {
        e.preventDefault();
        if (validateEmail() === true) {
            forgetPassApi();
        }

    }


    return (
        <BorderForm>
            <BorderLoading className={loadingShow}>
                <ReactBootStrap.Spinner animation="border" className="SpinnerLoading" />
            </BorderLoading>
            <TitleForm>
                {titleForm}
            </TitleForm>
            <BorderInForm>
                <form action="PUT" onSubmit={submitForm}>
                    <ErrorMessageCannotEmpty className={emailEmpty}>Email tidak boleh kosong.</ErrorMessageCannotEmpty>
                    <ErrorMessageCannotEmpty className={emailError}>Email tidak ditemukan.</ErrorMessageCannotEmpty>
                    <input type='email' placeholder='Email' className='FormInput' minLength={`1`} onChange={emailHandler}></input>
                    <BorderSubmit className='ButtonSubmitHover'>
                        <button type='submit' className='ButtonSubmit' disabled={disabledSend}>Send</button>
                    </BorderSubmit>
                </form>
            </BorderInForm>
        </BorderForm>
    )
}
