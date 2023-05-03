import React, { useEffect, useState } from 'react'
import { BodyDashboard } from '../Styles/Dashboard/DashboardStyleComponent'
import NavbarDashBoard from '../components/navbar/NavbarDashBoard'
import { ButtonUpdatePayment, ContainerDescriptionKurs, ContainerInRincianPembayaran, ContainerRincianPembayaran, ContentPaymentContainer, WaitingPayment } from '../Styles/PaymentStyle/PaymentStyleComponent'
import { DescriptionKursText, DescriptionTextContent, TitleExchanged } from '../Styles/Exchange/ExchangeStyledComponent'
import { ButtonUpdateHistoryTransaction, ContainerDetailHistory, Field, HistoryDetailTransactionContainer, HistoryTransactionContainer } from '../Styles/HistoryTransaction/HistoryTransactionStyleComponent'
import { useNavigate, useParams } from 'react-router-dom'
import { InquiryDetailTransaction, ReconPaymentStatus } from '../Services/TransactionService'
import Cookies from 'js-cookie'
import { InquiryPaymentStatus } from '../Services/PaymentService'

export default function DetailHistory() {
    const navigate = useNavigate();
    const { vaNumber } = useParams();
    const userCookie = Cookies.get('user');
    const cookieExpired = Cookies.get('expires');
    const user = userCookie ? JSON.parse(userCookie) : null;
    const [customerName, setCustomerName] = useState();
    const [totalAmount, setTotalAmount] = useState();
    const [currencyPair, setCurrencyPair] = useState();
    const [fromBank, setFromBank] = useState();
    const [destinationAccount, setDestinationAccount] = useState();
    const [kursRate, setKursRate] = useState();
    const [transactionType, setTransactionType] = useState();
    const [transactionStatus, setTransactionStatus] = useState();
    const [buttonUpdateShow, setButtonUpdateShow] = useState();
    const [paymentStatus, setPaymentStatus] = useState();
    const [showWaitingPayment, setShowWaitingPayment] = useState();
    const [paymentResponse, setPaymentResponse] = useState();


    const inquiryDetailHistory = async () => {
        const responseInquiryDetailHistory = await InquiryDetailTransaction(vaNumber);
        setCustomerName(responseInquiryDetailHistory.data.data.customerName);
        setTransactionType(responseInquiryDetailHistory.data.data.transactionType);
        if (transactionType === 'B') {
            setTotalAmount(responseInquiryDetailHistory.data.data.amount1);
            setTransactionType("Buy");
        } else {
            setTotalAmount(responseInquiryDetailHistory.data.data.amount2);
            setTransactionType("Sell");
        }
        setKursRate(responseInquiryDetailHistory.data.data.rateKurs);
        setTransactionStatus(responseInquiryDetailHistory.data.data.transactionStatus);
        setDestinationAccount(responseInquiryDetailHistory.data.data.destinationAccount);
        setCurrencyPair(responseInquiryDetailHistory.data.data.currencyPair);
        setFromBank(responseInquiryDetailHistory.data.data.bankName);

    }

    const inquiryPaymentApi = async () => {
        const data = {
            vaNumber
        }
        const responseInquiryPayment = await InquiryPaymentStatus(data);
        setPaymentStatus(responseInquiryPayment.data.data.paymentStatus);
        console.log(responseInquiryPayment.data);
    }

    useEffect(() => {

        if (!user || !user.accessToken) {
            navigate("/user/login");
        } else {
            const tokenExpirationTime = new Date(cookieExpired);
            const currentTime = new Date();
            console.log("Token Expired Time: ", tokenExpirationTime);
            if (currentTime > tokenExpirationTime) {
                Cookies.remove('user');
                Cookies.remove('expires');
                navigate("/user/login");
            }
        }
        const handleClick = () => {
            if (!user || !user.accessToken) {
                navigate("/user/login");
            } else {
                const tokenExpirationTime = new Date(cookieExpired);
                const currentTime = new Date();
                console.log("Token Expired Time: ", tokenExpirationTime);
                if (currentTime > tokenExpirationTime) {
                    Cookies.remove('user');
                    Cookies.remove('expires');
                    navigate("/user/login");
                }
            }
        };
        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };

    }, []);

    useEffect(() => {
        inquiryDetailHistory();
        console.log(transactionStatus);
        if (transactionStatus === '1') {
            setButtonUpdateShow('showForm');
        }
    });


    const reconPaymentApi = async () => {
        const data = {
            vaNumber
        }

        const responseReconPayment = await ReconPaymentStatus(data);
        console.log(responseReconPayment);
    }

    function clickUpdate() {
        inquiryPaymentApi();
        inquiryDetailHistory();
        console.log(transactionStatus);
        if (paymentStatus === '3' || transactionStatus === '3') {
            setShowWaitingPayment('showForm');
            setPaymentResponse("Payment Success");
            setButtonUpdateShow('');
            reconPaymentApi();
        } else if (paymentStatus === '2' || transactionStatus === '2') {
            console.log("tes");
            setShowWaitingPayment('showForm');
            setPaymentResponse("Payment Failed");
            setButtonUpdateShow('');
            reconPaymentApi();
        } else {
            setShowWaitingPayment('showForm');
            setPaymentResponse("Menunggu Pembayaran");
            reconPaymentApi();
        }
    }
    return (
        <BodyDashboard>
            <NavbarDashBoard menu1="Dashboard" menu2="History" menu3="Profile" menu4="Exchange" />
            <HistoryDetailTransactionContainer>
                <TitleExchanged>History <span className="moneyTitle"> Transaction </span></TitleExchanged>
                <ContentPaymentContainer>
                    <ContainerDescriptionKurs>
                        <DescriptionTextContent>
                            Riwayat Transaksi
                        </DescriptionTextContent>
                        <DescriptionKursText>
                            Detail Riwayat Transaksi
                        </DescriptionKursText>
                    </ContainerDescriptionKurs>
                </ContentPaymentContainer>
                <ContainerRincianPembayaran>
                    <ContainerDetailHistory>
                        <Field>
                            Customer Name : {customerName}
                        </Field>
                        <Field>
                            Total Amount : {totalAmount}
                        </Field>
                        <Field>
                            Destination Account : {destinationAccount}
                        </Field>
                        <Field>
                            Currency : {currencyPair}
                        </Field>
                        <Field>
                            Kurs Rate : {kursRate}
                        </Field>
                        <Field>
                            Bank Kurs : {fromBank}
                        </Field>
                        <Field>
                            Destination Account : {destinationAccount}
                        </Field>
                        <Field>
                            Transaction Status : {transactionStatus === '1' ? "Waiting for payment" : transactionStatus === '2' ? "Transaction Failed" : transactionStatus === '3' ? "Transaction Success" : ''}
                        </Field>
                        <WaitingPayment className={showWaitingPayment}>{paymentResponse}</WaitingPayment>
                        <ButtonUpdateHistoryTransaction className={`ButtonSubmitHover ${buttonUpdateShow}`} onClick={clickUpdate}>
                            <button className='ButtonSubmit' >Update</button>
                        </ButtonUpdateHistoryTransaction>
                    </ContainerDetailHistory>
                </ContainerRincianPembayaran>
            </HistoryDetailTransactionContainer>
        </BodyDashboard>
    )
}
