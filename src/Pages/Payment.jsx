import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BodyDashboard } from '../Styles/Dashboard/DashboardStyleComponent';
import NavbarDashBoard from '../components/navbar/NavbarDashBoard';
import { ButtonLanjutPayment, ButtonUpdatePayment, ContainerInPembayaranSuccess, ContainerInRincianPembayaran, ContainerPembayaranSuccess, ContainerRincianPembayaran, ContainerSuccessImage, ContainerTimeExpired, ContentPaymentContainer, FieldRincianPembayaran, FieldTextVa, PaymentContainer, TextPaymentFailed, TextPaymentSuccess, TimeExpiredContent, VaNumberContainer, WaitingPayment } from '../Styles/PaymentStyle/PaymentStyleComponent';
import { ButtonLanjut, ButtonUpdate, ContainerDescriptionKurs, DescriptionFirstKursText, DescriptionKursText, DescriptionTextContent, TitleExchanged } from '../Styles/Exchange/ExchangeStyledComponent';
import { InquiryTransaction, ReconPaymentStatus } from '../Services/TransactionService';
import { BorderSubmit } from '../Styles/FormLogin/FormLoginStyleComponent';
import { InquiryPaymentStatus } from '../Services/PaymentService';
import '../Styles/PaymentStyle/PaymentStyleCss.css';
import successImage from '../Assets/success.png';
import failedImage from '../Assets/failed.png';
import { ErrorMessageCannotEmpty } from '../Styles/FormRegister/FormSuccessRegisterStyledComponent';
import { BorderBottomBar } from '../Styles/BottomBarStyle/BottomBarStyleComponent';
import BottomBarPage from '../components/BottomBar/BottomBarPage';

export default function Payment() {
  const vaNumberLs = localStorage.getItem('vaNumber');
  const [vaNumber, setVaNumber] = useState(vaNumberLs);
  const [createdDate, setCreatedDate] = useState();
  const [expiredDate, setExpiredDate] = useState();
  const [dataApi, setDataApi] = useState({});
  const [customerName, setCustomerName] = useState();
  const [rekeningTujuan, setRekeningTujuan] = useState();
  const [transactionType, setTransactionType] = useState();
  const [currency, setCurrency] = useState();
  const [totalAmount, setTotalAmount] = useState();
  const [rateKurs, setRateKurs] = useState();
  const [paymentStatus, setPaymentStatus] = useState();
  const [showSuccess, setShowSuccess] = useState();
  const [showFailed, setShowFailed] = useState();
  const [showWaitingPayment, setShowWaitingPayment] = useState();
  const [showRincianPembayaran, setShowRincianPembayaran] = useState();
  const [remainingTime, setRemainingTime] = useState('00:00');
  const navigate = useNavigate();


  const inquiryTransaksiApi = async () => {


    const data = {
      vaNumber
    }
    const inquiryTransactionResponse = await InquiryTransaction(data);
    setCreatedDate(inquiryTransactionResponse.data.createdDate);
    setExpiredDate(inquiryTransactionResponse.data.expiredTime)
    setDataApi(inquiryTransactionResponse.data);
    setCustomerName(inquiryTransactionResponse.data.customerName);
    setRekeningTujuan(inquiryTransactionResponse.data.destinationAccount);
    setTransactionType(inquiryTransactionResponse.data.typeTransaction);
    setRateKurs(inquiryTransactionResponse.data.rateKurs);
    const currenyPair = inquiryTransactionResponse.data.currencyPair;
    const currencies = currenyPair.split('/');
    if (inquiryTransactionResponse.data.typeTransaction === 'S') {
      setCurrency(currencies[1]);
      setTotalAmount(`Rp ${inquiryTransactionResponse.data.amount2}`);
    } else {
      setCurrency(currencies[0]);
      setTotalAmount(`$ ${inquiryTransactionResponse.data.amount1}`);
    }

  }
  useEffect(() => {
    if (vaNumberLs === null) {
      navigate(`/kurs-rate`);
    }
    const targetDate = new Date(expiredDate);
    const currentTime = new Date();
    const diffTime = targetDate - currentTime;
    if (diffTime <= 0) {
      setRemainingTime('00:00');
    } else {
      let remainingMinutes = Math.floor(diffTime / 1000 / 60);
      let remainingSeconds = Math.floor((diffTime / 1000) % 60);
      if (remainingMinutes < 0) {
        setRemainingTime('00:00');
      } else if (remainingMinutes > 10) {
        setRemainingTime(`${remainingMinutes < 10 ? `0${remainingMinutes}` : remainingMinutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`);
      } else {
        if (remainingMinutes > 0) {
          if (remainingSeconds === 0) {
            remainingSeconds = 60;
          }
        } else {
          if (remainingSeconds === 0) {
            remainingSeconds = 1;
          }
        }
        remainingSeconds -= 1;
        if (remainingSeconds < 0) {
          remainingSeconds = remainingSeconds;
          remainingMinutes = remainingMinutes;
        }
        setRemainingTime(`${remainingMinutes < 10 ? `0${remainingMinutes}` : remainingMinutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`);
      }
    }

  });

  useEffect(() => {
    const countdown = setInterval(() => {
      inquiryTransaksiApi();

    }, 500);

    // Membersihkan interval
    return () => clearInterval(countdown);
  });

  const inquiryPaymentApi = async () => {
    const data = {
      vaNumber
    }
    const responseInquiryPayment = await InquiryPaymentStatus(data);
    setPaymentStatus(responseInquiryPayment.data.data.paymentStatus);
    console.log(responseInquiryPayment.data);
    console.log(paymentStatus);
  }

  const reconPaymentApi = async () => {
    const data = {
      vaNumber
    }

    const responseReconPayment = await ReconPaymentStatus(data);
  }

  function clickUpdate() {
    inquiryPaymentApi();
    if (paymentStatus === '3') {
      setShowRincianPembayaran('hideForm');
      setShowSuccess('showUpForm');
      reconPaymentApi();
    } else if (paymentStatus === '2') {
      setShowRincianPembayaran('hideForm');
      setShowFailed('showUpForm');
      reconPaymentApi();
    } if (remainingTime === '00:00') {
      console.log(remainingTime);
      setShowRincianPembayaran('hideForm');
      setShowFailed('showUpForm');
    } else {
      setShowWaitingPayment('showUpForm');
    }
  }

  function clickLanjut() {
    localStorage.removeItem('vaNumber');
    localStorage.removeItem('data');
  }

  return (
    <BodyDashboard>
      <NavbarDashBoard menu1="Dashboard" menu2="History" menu3="Profile" menu4="Exchange" />
      <PaymentContainer>
        <TitleExchanged>Exchange <span className="moneyTitle"> Payment </span></TitleExchanged>
        <ContentPaymentContainer>
          <ContainerDescriptionKurs>
            <DescriptionTextContent>
              Rincian Pembayaran
            </DescriptionTextContent>
            <DescriptionFirstKursText>
              Bayar menggunakan tipe rekening yang cocok
            </DescriptionFirstKursText>
            <DescriptionKursText >
              Silahkan cek rincian pembayaran anda sebelum membayar.
            </DescriptionKursText>
          </ContainerDescriptionKurs>
        </ContentPaymentContainer>
        {/* Success Page */}
        <ContainerPembayaranSuccess className={showSuccess}>
          <ContainerInPembayaranSuccess>
            <img src={successImage} alt="" className='imageSuccessSize' />
            <TextPaymentSuccess>
              Payment Success
            </TextPaymentSuccess>
            <ButtonLanjutPayment className='ButtonSubmitHover'>
              <button className='ButtonSubmit' onClick={clickLanjut}>Lanjut</button>
            </ButtonLanjutPayment>
          </ContainerInPembayaranSuccess>
        </ContainerPembayaranSuccess>
        {/* Success Page */}
        {/* Error Page */}
        <ContainerPembayaranSuccess className={showFailed}>
          <ContainerInPembayaranSuccess>
            <img src={failedImage} alt="" className='imageSuccessSize' />
            <TextPaymentFailed>
              Payment Failed
            </TextPaymentFailed>
            <ButtonLanjutPayment className='ButtonSubmitHover'>
              <button className='ButtonSubmit' onClick={clickLanjut}>Lanjut</button>
            </ButtonLanjutPayment>
          </ContainerInPembayaranSuccess>
        </ContainerPembayaranSuccess>
        {/* Error Page */}
        <ContainerRincianPembayaran className={showRincianPembayaran}>
          <ContainerTimeExpired>
            <TimeExpiredContent>
              {remainingTime !== NaN ? remainingTime : '00:00'}
            </TimeExpiredContent>
          </ContainerTimeExpired>
          <ContainerInRincianPembayaran>
            <VaNumberContainer>
              {vaNumber}
            </VaNumberContainer>
            <FieldTextVa>
              Virtual Account
            </FieldTextVa>
            <FieldRincianPembayaran>
              Customer Name: {`${customerName}`}
            </FieldRincianPembayaran>
            <FieldRincianPembayaran>
              Rekening Tujuan: {`${rekeningTujuan}`}
            </FieldRincianPembayaran>

            <FieldRincianPembayaran>
              Currency: {`${currency}`}
            </FieldRincianPembayaran>

            <FieldRincianPembayaran>
              Total Amount: {`${totalAmount}`}
            </FieldRincianPembayaran>

            <FieldRincianPembayaran>
              kurs Rate: {`${rateKurs}`}
            </FieldRincianPembayaran>
            <WaitingPayment className={showWaitingPayment}>Menunggu Pembayaran</WaitingPayment>
            <ButtonUpdatePayment className='ButtonSubmitHover'>
              <button className='ButtonSubmit' onClick={clickUpdate}>Update</button>
            </ButtonUpdatePayment>
          </ContainerInRincianPembayaran>
        </ContainerRincianPembayaran>
      </PaymentContainer>
      <BottomBarPage />
    </BodyDashboard>
  )
}
