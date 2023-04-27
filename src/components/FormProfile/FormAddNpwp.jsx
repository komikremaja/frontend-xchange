import React, { useState } from 'react'
import { ButtonSubmit, FormAddRekeningInputContainer, MessageSuccess } from '../../Styles/FormProfile/FormProfileStyledComponent'
import { AddNpwp } from '../../Services/RegisterService';
import { ErrorMessageCannotEmpty } from '../../Styles/FormRegister/FormSuccessRegisterStyledComponent';

export default function FormAddNpwp(props) {
    const [npwp, setNpwp] = useState();
    const [success, setSuccess] = useState();
    const [showError, setShowError] = useState();
    const [errorMessage, setErrorMessage] = useState();
    const { currentAction, email } = props;

    const  addNpwp = async() => {
        const data ={
            email,
            npwp
        }

        const responseAddNpwp = await AddNpwp(data);
        console.log("Response: ", responseAddNpwp.data);
        if(responseAddNpwp.data.status === 200){
            setSuccess('showForm');
            setNpwp('');
        }
        if(responseAddNpwp.data.status === 400){
            setShowError('showForm');
            setErrorMessage(responseAddNpwp.data.message);
        }
    }

    function submitForm(e){
        e.preventDefault();
        addNpwp();
    }

    if (currentAction !== 'Add Npwp') {
        return (
            <div></div>
        );
    }

    function handleInputChange(event) {
        const input = event.target.value.replace(/\D/g, ''); // hapus karakter selain angka
        setNpwp(input);
        setSuccess('');
        setShowError('');
    }

    return (
        <FormAddRekeningInputContainer method='POST' onSubmit={submitForm}>
            <input type='text' placeholder='NPWP' className='FormInputProfile' minLength="16" maxLength="16" onChange={handleInputChange} value={npwp} />
            <ErrorMessageCannotEmpty className={showError}>{errorMessage}</ErrorMessageCannotEmpty>
            <MessageSuccess className={success}>Npwp Berhasil Terdaftar.</MessageSuccess>
            <ButtonSubmit>
                <button type='submit' className='ButtonSubmitProfile'>Daftar</button>
            </ButtonSubmit>
        </FormAddRekeningInputContainer>
    )
}
