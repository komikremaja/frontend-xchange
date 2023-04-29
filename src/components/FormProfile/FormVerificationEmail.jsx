import React, { useState } from 'react'
import { BorderFormChangePass } from '../../Styles/ChangePassword/ChangePasswordStyleComponent'
import { ButtonEdit, FormAddRekeningInputContainer, MessageSuccess } from '../../Styles/FormProfile/FormProfileStyledComponent'
import { ButtonSubmit } from '../../Styles/FormProfile/FormProfileStyledComponent';
import { useNavigate, useParams } from 'react-router-dom';
import { ErrorMessageCannotEmpty } from '../../Styles/FormRegister/FormSuccessRegisterStyledComponent';
import { VerificationEmail } from '../../Services/RegisterService';
import Cookies from 'js-cookie';

export default function FormVerificationEmail() {

    const { email } = useParams();
    const [verificationCode, setVerificationCode] = useState();
    const [verifCodeEmpty, setVerifCodeEmpty] = useState();
    const [currentEmail, setCurrentEmail] = useState();
    const [newEmail, setNewEmail] = useState();
    const [errorVerif, setErrorVerif] = useState();
    const [erroMessage, setErrorMessage] = useState();
    const [emaiLVerificationShow, setEmailVerficationShow] = useState('');
    const userCookie = Cookies.get('user');
    const user = userCookie ? JSON.parse(userCookie) : null;
    const navigate = useNavigate();

    function removeCookieWithPath(path) {
        document.cookie = encodeURIComponent('user') + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=' + path;
    }

    const VerificationEmailApi = async () => {
        removeCookieWithPath('/user/verification-email');
        setCurrentEmail(user.email);
        setNewEmail(email);
        const data = {
            currentEmail,
            newEmail,
            verificationCode
        }

        const responseVerificationCode = await VerificationEmail(data);
        console.log(responseVerificationCode);
        if (responseVerificationCode.data.status === 200) {
            setEmailVerficationShow('showForm');
            const accessToken = user.accessToken;
            const renewCookie = {
                accessToken,
                email
            };
            console.log(renewCookie);
            Cookies.remove('user');
            document.cookie = `user=${JSON.stringify(renewCookie)};path=/`;
            setVerificationCode('');
            navigate('/user/profile');
        }
        if (responseVerificationCode.data.status > 300) {
            setErrorVerif('showForm');
            setErrorMessage(responseVerificationCode.data.message);
        }
    }

    function submitForm(e) {
        e.preventDefault();
        validationVerificationCode();
        VerificationEmailApi();
    }

    function handleVerificationCode(e) {
        const input = e.target.value.replace(/\D/g, '');
        setVerificationCode(input);
        setEmailVerficationShow('');
        setErrorVerif('');
    }

    function validationVerificationCode() {
        if (verificationCode === undefined || verificationCode === '') {
            setVerifCodeEmpty('showForm');
        }
    }
    return (
        <FormAddRekeningInputContainer method='POST' onSubmit={submitForm}>
            <ErrorMessageCannotEmpty className={verifCodeEmpty}>Verification Code tidak boleh kosong</ErrorMessageCannotEmpty>
            <input type='text' placeholder='Verification Code' className='FormInputProfile' minLength={`4`} maxLength={`4`} onChange={handleVerificationCode} value={verificationCode} />
            <ErrorMessageCannotEmpty className={errorVerif}>{erroMessage}</ErrorMessageCannotEmpty>
            <MessageSuccess className={emaiLVerificationShow}> Verifikasi Email Berhasil.</MessageSuccess>
            <ButtonSubmit>
                <button type='submit' className='ButtonEdit'>Verif</button>
            </ButtonSubmit>
        </FormAddRekeningInputContainer>
    )
}
