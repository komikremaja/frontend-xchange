import React, { useState } from 'react'
import { ButtonEdit, ButtonSubmit, FormAddRekeningInputContainer, MessageSuccess } from '../../Styles/FormProfile/FormProfileStyledComponent'
import { InquiryRekening, UpdateProfile } from '../../Services/RegisterService';
import { ErrorMessageCannotEmpty } from '../../Styles/FormRegister/FormSuccessRegisterStyledComponent';
import Cookies from 'js-cookie';
import { BorderLoading } from '../../Styles/FormForgetPass/FormForgetPassStyleComponent';
import * as ReactBootStrap from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function FromEditProfile(props) {
    const { currentAction, emailProps } = props;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [currentAccountNumber, setCurrentAccountNumber] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [bankType, setBankType] = useState('');
    const [typeAccount, setTypeAccount] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [currentAccountEmpty, setCurrentAccountNumberEmpty] = useState('');
    const [accountNumberEmpty, setAccountNumberEmpty] = useState('');
    const [bankTypeEmpty, setBankTypeEmpty] = useState('');
    const [tpyeAccountEmpty, setTypeAccountEmpty] = useState('');
    const [email, setEmail] = useState('');
    const [errorUpdateProfile, setErrorUpdateProfile] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [inquiryRekeningSuccess, setInquiryRekeningSuccess] = useState();
    const [idAccount, setIdAccount] = useState();
    const [loadingShow, setLoadingShow] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [emaiLVerificationShow, setEmailVerficationShow] = useState('');
    const navigate = useNavigate();
    


    if (currentAction !== 'Edit') {
        return (
            <div></div>
        );
    }
    
    const userCookie = Cookies.get('user');
    const user = userCookie ? JSON.parse(userCookie) : null;

    const banks = ['BCA', 'BRI', 'Mandiri'];

    const currencys = ['IDR', 'USD', 'SGD', 'AUD', 'EUR'];

    const inquiryRekeningApi = async () => {
        const data = {
            currentAccountNumber
        }
        const responseInquiryRekening = await InquiryRekening(data);
        console.log(responseInquiryRekening.data);
        if (responseInquiryRekening.data.status !== 200) {
            setInquiryRekeningSuccess(false);
            setErrorUpdateProfile('showForm');
            setErrorMessage(responseInquiryRekening.data.message);
        }

        if (responseInquiryRekening.data.status === 200) {
            setInquiryRekeningSuccess(true);
            setIdAccount(responseInquiryRekening.data.data.idAccount);
            console.log(responseInquiryRekening.data.data.idAccount);
        }

    }

    const editProfile = async () => {
        const data = {
            idAccount,
            emailProps,
            firstName,
            lastName,
            accountNumber,
            typeAccount,
            bankType,
            phoneNumber,
            email
        }
        setLoadingShow('showLoading');
        const responseEditProfile = await UpdateProfile(data);
        console.log(responseEditProfile.data);

        if (responseEditProfile.data.status === 400) {
            setLoadingShow('');
            setErrorUpdateProfile('showForm');
            setErrorMessage(responseEditProfile.data.message);
        }

        return new Promise((resolve, reject) => {
            if (!responseEditProfile) {
                // Jika belum menerima response dari ForgetPassService
                // Keluarkan Loading image di tengah tengah
                // Contoh:
                // document.getElementById("loading-image").style.display = "block";
            } else {
                if (responseEditProfile.data.status === 200) {
                    setLoadingShow('');
                    setSuccessMessage('showForm');
                    setAccountNumber('');
                    setFirstName('');
                    setLastName('');
                    setCurrentAccountNumber('');
                    setBankType('');
                    setTypeAccount('');
                    setPhoneNumber('');
                    setEmail('');
                }
        
                if(email !== ''){
                    setLoadingShow('');
                    setEmailVerficationShow('showForm');
                }
            }
        });
        
    }

    function submitForm(e) {
        e.preventDefault();
        validationEditAccount();
        if (currentAccountNumber !== '') {
            inquiryRekeningApi();
            console.log(idAccount);
            if(idAccount !== undefined){
                editProfile();
            }
        }else{
            editProfile();
        }
    }

    function handleFirstName(e) {
        const input = e.target.value.replace(/[^a-zA-Z]/g, '');
        setFirstName(input);
        setErrorUpdateProfile('');
        setSuccessMessage('');
        setEmailVerficationShow('');
    }

    function handleLastName(e) {
        const input = e.target.value.replace(/[^a-zA-Z]/g, '');
        setLastName(input);
        setErrorUpdateProfile('');
        setSuccessMessage('');
        setEmailVerficationShow('');
    }

    function handleCurrentAccountNumber(e) {
        const input = e.target.value.replace(/\D/g, '');
        setCurrentAccountNumber(input);
        setCurrentAccountNumberEmpty('');
        setErrorUpdateProfile('');
        setSuccessMessage('');
        setEmailVerficationShow('');
    }

    function handleAccountNumber(e) {
        const input = e.target.value.replace(/\D/g, '');
        setAccountNumber(input);
        setAccountNumberEmpty('');
        setErrorUpdateProfile('');
        setSuccessMessage('');
        setEmailVerficationShow('');
    }

    function handleBankType(e) {
        setBankType(e.target.value);
        setBankTypeEmpty('');
        setErrorUpdateProfile('');
        setSuccessMessage('');
        setEmailVerficationShow('');
    }
    function handleTypeAccount(e) {
        setTypeAccount(e.target.value);
        setTypeAccountEmpty('');
        setErrorUpdateProfile('');
        setSuccessMessage('');
        setEmailVerficationShow('');
    }

    function handlePhoneNumber(e) {
        const input = e.target.value.replace(/\D/g, '');
        setPhoneNumber(input);
        setErrorUpdateProfile('');
        setSuccessMessage('');
        setEmailVerficationShow('');
    }

    function handleEmail(e) {
        setEmail(e.target.value);
        setErrorUpdateProfile('');
        setSuccessMessage('');
        setEmailVerficationShow('');
    }

    function validationEditAccount() {
        if (currentAccountNumber !== '') {
            if (accountNumber === '') {
                setAccountNumberEmpty('showForm');
            }
            if (bankType === '') {
                setBankTypeEmpty('showForm');
            }
            if (typeAccount === '') {
                setTypeAccountEmpty('showForm');
            }
        }
        if (accountNumber !== '') {
            if (currentAccountNumber === '') {
                setCurrentAccountNumberEmpty('showForm');
            }
            if (bankType === '') {
                setBankTypeEmpty('showForm');
            }
            if (typeAccount === '') {
                setTypeAccountEmpty('showForm');
            }
        }
        if (bankType !== '') {
            if (currentAccountNumber === '') {
                setCurrentAccountNumberEmpty('showForm');
            }
            if (accountNumber === '') {
                setAccountNumberEmpty('showForm');
            }
            if (typeAccount === '') {
                setTypeAccountEmpty('showForm');
            }
        }
        if (typeAccount !== '') {
            if (currentAccountNumber === '') {
                setCurrentAccountNumberEmpty('showForm');
            }
            if (accountNumber === '') {
                setAccountNumberEmpty('showForm');
            }
            if (bankType === '') {
                setBankTypeEmpty('showForm');
            }
        }
    }


    return (
        <FormAddRekeningInputContainer method='PUT' onSubmit={submitForm}>
            <BorderLoading className={loadingShow}>
                <ReactBootStrap.Spinner animation="border" className="SpinnerLoading" />
            </BorderLoading>
            <input type='text' placeholder='First Name' className='FormInputProfile' maxLength={`30`} onChange={handleFirstName} value={firstName} />
            <input type='text' placeholder='Last Name' className='FormInputProfile' maxLength={`30`} onChange={handleLastName} value={lastName} />
            <ErrorMessageCannotEmpty className={currentAccountEmpty}>Current Account Number Harus di isi, untuk edit rekening</ErrorMessageCannotEmpty>
            <input type='text' placeholder='Current Account Number' className='FormInputProfile' maxLength={`20`} onChange={handleCurrentAccountNumber} value={currentAccountNumber} />
            <ErrorMessageCannotEmpty className={accountNumberEmpty}>Nomor Rekening harus di isi, untuk edit rekening</ErrorMessageCannotEmpty>
            <input type='text' placeholder='New Account Number' className='FormInputProfile' maxLength={`20`} onChange={handleAccountNumber} value={accountNumber} />
            <ErrorMessageCannotEmpty className={bankTypeEmpty}>Tpye Bank Rekening harus di isi, untuk edit rekening</ErrorMessageCannotEmpty>
            <select id="bank" className='FormInputProfile' onChange={handleBankType}>
                <option value="">-- Pilih Bank --</option>
                {banks.map((bank) => (
                    <option key={bank} value={bank}>{bank}</option>
                ))}
            </select>
            <ErrorMessageCannotEmpty className={tpyeAccountEmpty}>Type Akun Rekening harus di isi, untuk edit rekening</ErrorMessageCannotEmpty>
            <select id="currency" className='FormInputProfile' onChange={handleTypeAccount}>
                <option value="">-- Pilih Type Rekening --</option>
                {currencys.map((currency) => (
                    <option key={currency} value={currency}>{currency}</option>
                ))}
            </select>
            <input type='text' placeholder='Phone Number' className='FormInputProfile' maxLength={`15`} onChange={handlePhoneNumber} value={phoneNumber} />
            <input type='email' placeholder='Email' className='FormInputProfile' onChange={handleEmail} />
            <ErrorMessageCannotEmpty className={errorUpdateProfile}>{errorMessage}</ErrorMessageCannotEmpty>
            <MessageSuccess className={successMessage}> Update Profile Berhasil</MessageSuccess>
            <MessageSuccess className={emaiLVerificationShow}> Verifikasi email telah dikirim pada email yang dituju.</MessageSuccess>
            <ButtonEdit>
                <button type='submit' className='ButtonEdit'>Edit</button>
            </ButtonEdit>
        </FormAddRekeningInputContainer>
    )
}
