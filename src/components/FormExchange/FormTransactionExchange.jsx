import React, { useEffect, useState } from 'react'
import { BorderEnterPin, BorderEnterPinInput, BorderTitle, ButtonLanjut, ContainerInOrderExchange, ContainerInRateOrder, ContainerKursIndikasi, ContainerRateOrder, ContentExchangeContainer, LableInputExchange, TitleEnterPin } from '../../Styles/Exchange/ExchangeStyledComponent'
import Cookies from 'js-cookie';
import { CheckPin, InquiryUser } from '../../Services/RegisterService';
import { BorderSubmit } from '../../Styles/FormLogin/FormLoginStyleComponent';
import '../../Styles/Exchange/ExchangeStyledCss.css';
import { ErrorMessageCannotEmpty } from '../../Styles/FormRegister/FormSuccessRegisterStyledComponent';
import { BorderButtonBack } from '../../Styles/LoginStyle/LoginStyleComponent';
import backImage from '../../Assets/TandaPanahBack.png';
import { BorderBuatPin, BorderInputPin } from '../../Styles/FormCreatePin/FormCreatePinStyleComponent';
import { ExchcangeService } from '../../Services/TransactionService';
import { useNavigate } from 'react-router-dom';

export default function FormTransactionExchange(props) {
    const [show, setShow] = useState(false);
    const { currentPage } = props;
    const [typeTransaction, setTypeTransaction] = useState();
    const [typeTransactionShow, setTypeTransactionShow] = useState();
    const [dataOrder, setDataOrder] = useState();
    const [currencies, setCurrencies] = useState();
    const [multiAccount, setMultiAccount] = useState([]);
    const [listAccountCustomer, setListAccountCustomer] = useState('');
    const [amount1Show, setAmount1Show] = useState('0.00');
    const [amount1, setAmount1] = useState('0.00');
    const [amount2Show, setAmount2Show] = useState('0.00');
    const [amount2, setAmount2] = useState('0.00');
    const [disabledAmount1, setDisabledAmount1] = useState(true);
    const [disabledAmount2, setDisabledAmount2] = useState(true);
    const [destinationAccount, setDestinationAccount] = useState();
    const [comments, setComments] = useState();
    const [npwp, setNpwp] = useState();
    const [npwpEmpty, setNpwpEmpty] = useState();
    const [customerName, setCustomerName] = useState();
    const [typeTransactionEmpty, setTypeTransactionEmpty] = useState();
    const [currencyPair, setCurrencyPair] = useState();
    const [rateKurs, setRateKurs] = useState();
    const [bankName, setBankname] = useState();
    const [nic, setNic] = useState();
    const [bankAccount, setBankAccount] = useState();
    const [accountType, setAccountType] = useState();

    const [amount1Empty, setAmount1Empty] = useState();
    const [amount2Empty, setAmount2Empty] = useState();
    const [destinationAccountEmpty, setDestinationAccountEmpty] = useState();
    const [destinationAccountShow, setDestinationAccountShow] = useState();

    const [enterPinShow, setEnterPinShow] = useState('');
    const [pinEmpty, setPinEmpty] = useState('');
    const [pin, setPin] = useState('');
    const [pinErrorShow, setPinErrorShow] = useState('');
    const [pinErrorMessage, setPinErrorMessage] = useState('');
    const [email, setEmail] = useState('');


    const [errorExchangeShow, setErrorExchangeShow] = useState('');
    const [errorExchange, setErrorExchange] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [paymentMethodEmpty, setPaymentMethodEmpty] = useState('');


    const userCookie = Cookies.get('user');
    const user = userCookie ? JSON.parse(userCookie) : null;
    const navigate = useNavigate();

    const inquiryUser = async () => {
        const responseInquiryUser = await InquiryUser(user.email);
        // console.log(responseInquiryUser);
        setMultiAccount(responseInquiryUser.data.data.userAccount);
        setNpwp(responseInquiryUser.data.data.userDetail.npwp);
        setCustomerName(`${responseInquiryUser.data.data.userDetail.firstName} ${responseInquiryUser.data.data.userDetail.lastName}`)
        setNic(responseInquiryUser.data.data.userAccount[0].nic);
        // console.log(destinationAccount);
        if (responseInquiryUser.data.status === 200 && multiAccount !== null) {
            mappingMultiAccount(multiAccount);
        }
    }

    function mappingMultiAccount(e) {
        let listDataAccount = [];
        let listObjAccount = {};

        e.forEach(data => {
            listObjAccount = data.accountNumber + "- " + data.bankType + "- " + data.typeAccount + ", ";
            // console.log(listObjAccount);
            listDataAccount.push(listObjAccount);
        })
        setListAccountCustomer(listDataAccount);
        // console.log(listDataAccount);
    }


    useEffect(() => {
        if (currentPage === 'Exchange') {
            const dataLs = localStorage.getItem('data');
            if (dataLs === null) {
                navigate(`/kurs-rate`);
            }
            const interval = setInterval(() => {
                console.log("test");
                setEmail(user.email);
                // Update myState every 30 seconds
                if (customerName === undefined) {
                    console.log("Inquiry User");
                    inquiryUser();
                }
                // console.log(amount1);
                if (dataOrder === undefined) {
                    console.log("get data order");
                    setDataOrder(JSON.parse(localStorage.getItem('data')));
                }
                if (dataOrder) {
                    setCurrencies(dataOrder.currency.split("/"));
                    setCurrencyPair(dataOrder.currency);
                    setBankname(dataOrder.bankType);
                }

            }, 500);
            return () => clearInterval(interval);
        }

    });
    if (currentPage !== 'Exchange') {
        return (
            <div></div>
        );
    }

    function handleTransactionType(e) {
        setTypeTransactionEmpty('');
        if (e.target.value === 'Sell') {
            setTypeTransactionShow("Sell");
            setRateKurs(dataOrder ? dataOrder.kursSell : '');
            setTypeTransaction('S');
            setDisabledAmount2(false);
            setDisabledAmount1(true);
        } else {
            setRateKurs(dataOrder ? dataOrder.kursBuy : '');
            setTypeTransactionShow("Buy");
            setTypeTransaction('B');
            setDisabledAmount1(false);
            setDisabledAmount2(true);
        }
        setAmount1Show('0.00');
        setAmount2Show('0.00');
        setAmount1('0.00');
        setAmount2('0.00');
        setErrorExchangeShow('');
    }

    function handleNominalValas(e) {
        let input = e.target.value.replace(/[^0-9.]/g, '');
        setAmount2Empty('');
        setAmount1Empty('');
        if (typeTransaction === 'B') {
            const angkaAmount2 = dataOrder.kursBuy * input;
            const result = angkaAmount2.toFixed(2);
            setAmount2Show(dataOrder ? (`${currencies[1]} ${result}`) : '0');
            setAmount2(angkaAmount2);
            console.log("amount 2: ", angkaAmount2);
            console.log("input ", input);
        }
        setAmount1Show(`${currencies[0]} ${input}`);
        setAmount1(input);
        setErrorExchangeShow('');

    }
    function handleNominalRupiah(e) {

        setAmount1Empty('');
        setAmount2Empty('');
        const input = e.target.value.replace(/[^0-9]/g, '');
        if (typeTransaction === 'S') {
            const angkaAmount1 = input / dataOrder.kursSell;
            const result = angkaAmount1.toFixed(2);
            setAmount1Show(dataOrder ? (`${currencies[0]} ${result}`) : '0');
            setAmount1(angkaAmount1);
        }
        setAmount2Show(`${currencies[1]} ${input}`);
        setAmount2(input);
        setErrorExchangeShow('');
    }

    function handleRekeningTujuan(e) {
        setDestinationAccountShow(e.target.value);
        setDestinationAccountEmpty('');
        const bankTypeAccount = e.target.value;
        const bankTypes = bankTypeAccount.split("-");
        setDestinationAccount(bankTypes[0]);
        setBankAccount(bankTypes[1]);
        setAccountType(bankTypes[2]);
        setErrorExchangeShow('');
        // console.log(bankAccount);
    }

    function handleComments(e) {
        setComments(e.target.value);
        console.log(e.target.value);
    }

    function handlePaymentMethod(e) {
        setPaymentMethod(e.target.value);
        console.log(e.target.value);
    }

    function validationTransactionType() {
        if (typeTransaction === undefined || typeTransaction === '') {
            setTypeTransactionEmpty('showForm');
            return false;
        }
        return true;
    }

    function validationAmount1() {
        if (typeTransactionShow === 'Sell') {
            if (amount2 < dataOrder.kursSell) {
                console.log(amount2);
                setAmount2Empty('showForm');
                return false;
            }
        } else if (typeTransactionShow === 'Buy') {
            if (amount2 < dataOrder.kursBuy) {
                console.log(typeTransaction);
                setAmount2Empty('showForm');
                return false;
            }
        }
        return true;
    }

    function validationDestinationAccount() {
        if (destinationAccount === undefined || destinationAccount === '') {
            setDestinationAccountEmpty('showForm');
            return false;
        }
        return true;
    }


    function submitForm(e) {
        e.preventDefault();
        console.log(amount1Empty);
        if (validationTransactionType() === true && validationAmount1() === true && validationDestinationAccount() === true && validationPaymentMethod() === true && validationNpwp() === true) {
            setEnterPinShow('showForm');
        }
    }

    function backAction() {
        setEnterPinShow('');
    }

    function handlePin(e) {
        const input = e.target.value.replace(/\D/g, '');
        setPinEmpty('');
        setPinErrorShow('');
        setPin(input);

    }

    function validationPin() {
        if (pin === undefined || pin === '') {
            setPinEmpty('showForm');
            return false;
        }
        return true;
    }

    function validationNpwp() {
        if (npwp === undefined || npwp === '') {
            setNpwpEmpty('showForm');
            return false;
        }
        return true;
    }

    function validationPaymentMethod() {
        if (paymentMethod === undefined || paymentMethod === '') {
            setPaymentMethodEmpty('showForm');
            return false;
        }
        return true;
    }

    const checkPinApi = async () => {
        const data = {
            email,
            pin
        }
        const responseCheckPin = await CheckPin(data);
        if (responseCheckPin.data.status === 400) {
            setPinErrorShow('showForm');
            setPinErrorMessage(responseCheckPin.data.message);
        }
        if (responseCheckPin.data.status === 200) {
            setEnterPinShow('');
            transactionExchangeApi();
        }
    }

    const transactionExchangeApi = async () => {
        const data = {
            customerName,
            npwp,
            destinationAccount,
            bankAccount,
            accountType,
            currencyPair,
            amount1,
            amount2,
            rateKurs,
            typeTransaction,
            paymentMethod,
            bankName,
            comments,
            nic
        }
        const responseExchange = await ExchcangeService(data);
        
        if (responseExchange.data.status === 400) {
            setErrorExchangeShow('showForm');
            setErrorExchange(responseExchange.data.data.message);
        }
        if (responseExchange.data.status === 200) {
            localStorage.setItem('vaNumber', responseExchange.data.data.vaNumber);
            navigate(`/payment`)
        }
    }

    function submitFormPin(e) {
        e.preventDefault();
        if (validationPin() === true) {
            checkPinApi();
        }
    }

    const typeTransactions = ['Buy', 'Sell'];
    const paymentMethods = ['BCA', 'BRI', 'Mandiri'];

    return (
        <ContentExchangeContainer>
            <BorderEnterPin className={enterPinShow}>
                <BorderTitle>
                    <BorderButtonBack Image={backImage} className='customBack' onClick={backAction}></BorderButtonBack>
                    <TitleEnterPin>Enter your PIN</TitleEnterPin>
                </BorderTitle>
                <form action="post" onSubmit={submitFormPin}>
                    <ErrorMessageCannotEmpty className={pinEmpty}>Pin tidak boleh kosong</ErrorMessageCannotEmpty>
                    <BorderEnterPinInput>
                        <input type="text" placeholder='PIN' className='inputPin' minLength="6" maxlength="6" onChange={handlePin} value={pin} />
                    </BorderEnterPinInput>
                    <ErrorMessageCannotEmpty className={pinErrorShow}>{pinErrorMessage}</ErrorMessageCannotEmpty>
                    <BorderBuatPin>
                        <button type='submit' className='ButtonSubmit'>Submit Pin</button>
                    </BorderBuatPin>
                </form>
            </BorderEnterPin>
            <ContainerInOrderExchange onSubmit={submitForm}>
                <ContainerRateOrder>
                    <ContainerInRateOrder>
                        <LableInputExchange>
                            Kurs Indikasi(Beli)
                        </LableInputExchange>
                        <ContainerKursIndikasi>
                            {dataOrder ? dataOrder.currency : ''} = {dataOrder ? dataOrder.kursBuy : ''}
                        </ContainerKursIndikasi>
                    </ContainerInRateOrder>
                    <ContainerInRateOrder>
                        <LableInputExchange>
                            Kurs Indikasi(Jual)
                        </LableInputExchange>
                        <ContainerKursIndikasi>
                            {dataOrder ? dataOrder.currency : ''} = {dataOrder ? dataOrder.kursSell : ''}
                        </ContainerKursIndikasi>
                    </ContainerInRateOrder>
                </ContainerRateOrder>
                <ErrorMessageCannotEmpty className={typeTransactionEmpty}>Jenis Transaksi tidak boleh kosong</ErrorMessageCannotEmpty>
                <LableInputExchange>
                    Jenis Transaksi
                </LableInputExchange>
                <select id="typeTransaction" value={typeTransactionShow} className='FormInputExchange' onChange={handleTransactionType}>
                    <option value="">-- Pilih Jenis Transaksi --</option>
                    {typeTransactions.map((transactionType) => (
                        <option key={transactionType} value={transactionType}>{transactionType}</option>
                    ))}
                </select>

                <LableInputExchange>
                    Nominal Transaksi dalam Valas
                </LableInputExchange>
                <input type='text' placeholder={amount1Show} className='FormInputExchange' onChange={handleNominalValas} value={amount1Show} disabled={disabledAmount1} maxLength="10" />

                <ErrorMessageCannotEmpty className={amount2Empty}>Nominal Rupiah tidak boleh dibawah kurs indikasi</ErrorMessageCannotEmpty>
                <LableInputExchange>
                    Nominal Transaksi dalam Rupiah
                </LableInputExchange>
                <input type='text' placeholder={amount2Show} className='FormInputExchange' maxLength="20" onChange={handleNominalRupiah} value={amount2Show} disabled={disabledAmount2} />

                <ErrorMessageCannotEmpty className={destinationAccountEmpty}>Rekening tujuan tidak boleh kosong</ErrorMessageCannotEmpty>
                <LableInputExchange>
                    Rekening Tujuan
                </LableInputExchange>
                <select id="typeTransaction" value={destinationAccountShow} className='FormInputExchange' onChange={handleRekeningTujuan}>
                    <option value="">-- Pilih Rekening Tujuan --</option>
                    {multiAccount.map((rekening) => (
                        <option key={rekening.accountNumber} value={`${rekening.accountNumber}-${rekening.bankType}-${rekening.typeAccount}`}>{rekening.accountNumber} - {rekening.bankType} - {rekening.typeAccount}</option>
                    ))}
                </select>
                <ErrorMessageCannotEmpty className={paymentMethodEmpty}>Payment method tidak boleh kosong</ErrorMessageCannotEmpty>
                <LableInputExchange>
                    Payment Method
                </LableInputExchange>
                <select id="typeTransaction" value={paymentMethod} className='FormInputExchange' onChange={handlePaymentMethod}>
                    <option value="">-- Pilih Payment Method --</option>
                    {paymentMethods.map((paymentMethod) => (
                        <option key={paymentMethod} value={`${paymentMethod}`}>{paymentMethod}</option>
                    ))}
                </select>

                <LableInputExchange>
                    Note Transaksi
                </LableInputExchange>
                <input type='text' placeholder={`Note Transaksi`} className='FormInputExchange' maxLength="50" onChange={handleComments} />
                <ErrorMessageCannotEmpty className={errorExchangeShow}>{errorExchange}</ErrorMessageCannotEmpty>
                <ErrorMessageCannotEmpty className={npwpEmpty}>Silahkan daftar NPWP anda terlebih dahulu</ErrorMessageCannotEmpty>
                <ButtonLanjut className='ButtonSubmitHover'>
                    <button className='ButtonSubmit'>Lanjut</button>
                </ButtonLanjut>
            </ContainerInOrderExchange>

        </ContentExchangeContainer>
    )
}
