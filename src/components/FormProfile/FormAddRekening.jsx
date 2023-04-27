import React, { useState } from 'react'
import { ButtonSubmit, FormAddRekeningInputContainer, MessageSuccess } from '../../Styles/FormProfile/FormProfileStyledComponent'
import '../../Styles/FormProfile/FormProfileStyleCss.css'
import { AddRekening } from '../../Services/RegisterService';
import { ErrorMessageCannotEmpty } from '../../Styles/FormRegister/FormSuccessRegisterStyledComponent';
export default function (props) {
    const { currentAction, email } = props;
    const [bankType, setbankType] = useState('');
    const [typeAccount, setTypeAccount] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [errorAddAccount, seterrorAddAccount] = useState('');
    const [displayErrorAddAccount, setDisplayErrorAddAccount] = useState('');
    const [accountNumberEmpty, setAccountNumberEmpty] = useState('');
    const [bankEmpty, setbankEmpty] = useState('');
    const [typeRekeningEmpty, setTypeRekeningEmpty] = useState('');
    const [success, setSuccess] = useState('');

    if (currentAction !== 'Add') {
        return (
            <div></div>
        );
    }

        const addRekening = async () => {
            const data = {
                email,
                accountNumber,
                bankType,
                typeAccount
            }
            const responseAddRekening = await AddRekening(data);
            if (responseAddRekening.data.message === "Inquiry Rekening gagal") {
                setDisplayErrorAddAccount('showForm');
                seterrorAddAccount("Rekening tidak valid");
            }
            if (responseAddRekening.data.status === 200) {
                setSuccess('showForm');
                setAccountNumber('');
                setbankType('');
                setTypeAccount('');
            }
            if (responseAddRekening.data.status !== 200) {
                setDisplayErrorAddAccount('showForm');
                seterrorAddAccount(responseAddRekening.data.message);
            }
            console.log(responseAddRekening.data);
        }

    function formSubmit(e) {
        e.preventDefault();

        console.log(bankType);
        if (validationAccountNumber() === true && validationBankType() === true && validationTypeRekening() === true && !displayErrorAddAccount) {
            addRekening();
        }
    }

    const banks = ['BCA', 'BRI', 'Mandiri'];

    const currencys = ['IDR', 'USD', 'SGD', 'AUD', 'EUR'];

    const handleBankChange = (event) => {
        setbankType(event.target.value);
        setbankEmpty('');
    }

    const handleCurrencyChange = (event) => {
        setTypeAccount(event.target.value);
        setTypeRekeningEmpty('');
    }


    function validationAccountNumber() {
        if (accountNumber === undefined || accountNumber === '') {
            setAccountNumberEmpty('showForm');
            return false;
        }
        return true;
    }

    function validationBankType() {
        if (bankType === undefined || bankType === '') {
            setbankEmpty('showForm');
            return false;
        }
        return true;
    }

    function validationTypeRekening() {
        if (typeAccount === undefined || typeAccount === '') {
            setTypeRekeningEmpty('showForm');
            return false;
        }
        return true;
    }

    function handleInputChange(event) {
        const input = event.target.value.replace(/\D/g, ''); // hapus karakter selain angka
        setDisplayErrorAddAccount('');
        setAccountNumberEmpty('');
        setAccountNumber(input);
        setSuccess('');
    }
    return (
        <FormAddRekeningInputContainer method='POST' onSubmit={formSubmit}>

            <ErrorMessageCannotEmpty className={accountNumberEmpty}>Nomor Rekening tidak boleh kosong</ErrorMessageCannotEmpty>
            <input type='text' placeholder='Nomor Rekening' className='FormInputProfile' minLength="5" maxLength="25" onChange={handleInputChange} value={accountNumber} />
            <ErrorMessageCannotEmpty className={bankEmpty}>Bank tidak boleh kosong</ErrorMessageCannotEmpty>
            <select id="bank" value={bankType} onChange={handleBankChange} className='FormInputProfile'>
                <option value="">-- Pilih Bank --</option>
                {banks.map((bank) => (
                    <option key={bank} value={bank}>{bank}</option>
                ))}
            </select>
            <ErrorMessageCannotEmpty className={typeRekeningEmpty}>Type rekening tidak boleh kosong</ErrorMessageCannotEmpty>
            <select id="currency" value={typeAccount} onChange={handleCurrencyChange} className='FormInputProfile'>
                <option value="">-- Pilih Type Rekening --</option>
                {currencys.map((currency) => (
                    <option key={currency} value={currency}>{currency}</option>
                ))}
            </select>
            <ErrorMessageCannotEmpty className={displayErrorAddAccount}>{errorAddAccount}</ErrorMessageCannotEmpty>
            <MessageSuccess className={success}>Success Add Rekening</MessageSuccess>
            <ButtonSubmit>
                <button type='submit' className='ButtonSubmitProfile'>Daftar</button>
            </ButtonSubmit>
        </FormAddRekeningInputContainer>
    )
}
