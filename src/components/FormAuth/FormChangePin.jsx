import React, { useState } from 'react'
import { BorderFormChangePass } from '../../Styles/ChangePassword/ChangePasswordStyleComponent'
import { BorderBuatPin, BorderInputPin } from '../../Styles/FormCreatePin/FormCreatePinStyleComponent'
import { BorderButtonGantiPin, BorderInputForgetPin } from '../../Styles/FormForgetPin/FormForgetPinStyleComponent'
import { ErrorMessageCannotEmpty } from '../../Styles/FormRegister/FormSuccessRegisterStyledComponent';
import { useNavigate, useParams } from 'react-router-dom';
import { ChangePinService } from '../../Services/RegisterService';

export default function FormChangePin() {

    const { email } = useParams();
    const [newPin, setNewPin] = useState();
    const [pinEmpty, setPinEmpty] = useState();
    const navigate = useNavigate();

    const gantiPin = async () => {
        const data = {
            newPin,
            email
        }
        const responseChangePin = await ChangePinService(data);
        console.log("Response Change Pin: ", responseChangePin.data);
        if(responseChangePin.data.status === 200){
            navigate(`/user/success`);
        }
    }

    function handleInputChange(event) {
        const inputPin = event.target.value.replace(/\D/g, ''); // hapus karakter selain angka
        setNewPin(inputPin);
        setPinEmpty("");
    }

    function validationPin() {
        if (newPin === undefined || newPin === '') {
            setPinEmpty("ShowDisplay");
            return false;
        }
        return true;
    }


    const submitForm = (e) => {
        e.preventDefault();
        if (validationPin() === true) {
            gantiPin();
        }

    }

    return (
        <BorderFormChangePass>
            <form method="put" onSubmit={submitForm}>
                <BorderInputForgetPin>
                    <input type="text" placeholder='PIN' className='inputPin' minLength="6" maxlength="6" onChange={handleInputChange} value={newPin} />
                </BorderInputForgetPin>
                <ErrorMessageCannotEmpty className={pinEmpty}>Pin tidak boleh kosong</ErrorMessageCannotEmpty>
                <BorderButtonGantiPin>
                    <button type='submit' className='ButtonSubmit'>Buat Pin</button>
                </BorderButtonGantiPin>
            </form>
        </BorderFormChangePass>
    )
}
