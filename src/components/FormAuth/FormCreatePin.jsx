import React, { useState } from 'react'
import { BorderBuatPin, BorderCreatePin, BorderInCreatePin, BorderInputPin, TitleCreatePin } from '../../Styles/FormCreatePin/FormCreatePinStyleComponent'
import '../../Styles/FormCreatePin/FormCreatePinStyleCss.css';
import { CreatePinService } from '../../Services/RegisterService';
import { useNavigate } from 'react-router-dom';
import { ErrorMessageCannotEmpty } from '../../Styles/FormRegister/FormSuccessRegisterStyledComponent';

export default function FormCreatePin(props) {
    const { pinOpen, idUserValue } = props;
    const [idUser, setIdUser] = useState();
    const [pin, setPin] = useState('');
    const navigate = useNavigate();
    const [pinEmpty, setPinEmpty] = useState();



    const buatPin = async () => {
        const data = {
            idUser,
            pin
        }
        const responseRegistPin = await CreatePinService(data);
        console.log("Response buat pin", responseRegistPin.data);
        if (responseRegistPin.data.status === 201) {
            navigate(`/user/success`);
        }
    }

    function handleInputChange(event) {
        const inputPin = event.target.value.replace(/\D/g, ''); // hapus karakter selain angka
        setPin(inputPin);
        setIdUser(idUserValue);
        console.log(pin);
        setPinEmpty("");
    }

    function validationPin() {
        if (pin === undefined || pin === '') {
            setPinEmpty("ShowDisplay");
            return false;
        }
        return true;
    }


    const submitForm = (e) => {
        e.preventDefault();
        console.log(validationPin());
        if (validationPin() === true) {
            buatPin();
        }

    }

    return (
        <BorderCreatePin className={pinOpen}>
            <BorderInCreatePin>
                <TitleCreatePin>
                    Create Pin
                </TitleCreatePin>
                <form action="post" onSubmit={submitForm}>
                    <ErrorMessageCannotEmpty className={pinEmpty}>Pin tidak boleh kosong</ErrorMessageCannotEmpty>
                    <BorderInputPin>
                        <input type="text" placeholder='PIN' className='inputPin' minLength="6" maxlength="6" onChange={handleInputChange} value={pin} />
                    </BorderInputPin>
                    <BorderBuatPin>
                        <button type='submit' className='ButtonSubmit'>Buat Pin</button>
                    </BorderBuatPin>
                </form>
            </BorderInCreatePin>
        </BorderCreatePin>
    )
}
