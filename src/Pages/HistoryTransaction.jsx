import React, { useEffect, useState } from 'react'
import { BodyDashboard } from '../Styles/Dashboard/DashboardStyleComponent'
import NavbarDashBoard from '../components/navbar/NavbarDashBoard'
import TransactionMapping, { ContainerListTransaction, Field, HistoryTransactionContainer, SingleContainerHistoryTransaction, SingleContainerLeftField } from '../Styles/HistoryTransaction/HistoryTransactionStyleComponent'
import { DescriptionFirstKursText, DescriptionKursText, DescriptionTextContent, TitleExchanged } from '../Styles/Exchange/ExchangeStyledComponent'
import { ContainerDescriptionKurs, ContentPaymentContainer } from '../Styles/PaymentStyle/PaymentStyleComponent'
import Cookies from 'js-cookie'
import { InquiryUser } from '../Services/RegisterService'
import { useNavigate } from 'react-router-dom'
import { InquiryListHistoryTransaction } from '../Services/TransactionService'

export default function HistoryTransaction() {
  const userCookie = Cookies.get('user');
  const cookieExpired = Cookies.get('expires');
  const user = userCookie ? JSON.parse(userCookie) : null;
  const [email, setEmail] = useState(user.email);
  const [nic, setNic] = useState();
  const [dataListTransaksi, setDataListTransaksi] = useState([]);
  const [totalAmount, setTotalAmount] = useState();
  const [currency, setTotalCurrency] = useState();
  const [transactionStatus, setTransactionStatus] = useState();


  const navigate = useNavigate();

  const inquiryUserApi = async () => {
    const inquiryUserResponse = await InquiryUser(email);
    setNic(inquiryUserResponse.data.data.userAccount[0].nic);
    console.log(nic);
  }

  const historyTransactionList = async () => {
    const data = {
      nic
    }

    const inquiryTransactionResponse = await InquiryListHistoryTransaction(data);
    setDataListTransaksi(inquiryTransactionResponse.data.data);
  }


  useEffect(() => {
    if (!user || !user.accessToken) {
      navigate("/user/login");
    } else {
      setEmail(user.email);
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

    const interval = setInterval(() => {
      // Update myState every 30 seconds
      if (nic === undefined) {
        inquiryUserApi();
      }

      if (nic !== undefined) {
        if (dataListTransaksi.length === 0) {
          historyTransactionList();

        }
      }

    }, 500);
    return () => clearInterval(interval);
  });


  return (
    <BodyDashboard>
      <NavbarDashBoard menu1="Dashboard" menu2="History" menu3="Profile" menu4="Exchange" />
      <HistoryTransactionContainer>
        <TitleExchanged>History <span className="moneyTitle"> Transaction </span></TitleExchanged>
        <ContentPaymentContainer>
          <ContainerDescriptionKurs>
            <DescriptionTextContent>
              Riwayat Transaksi
            </DescriptionTextContent>
            <DescriptionKursText>
              Riwayat Transaksi selama satu bulan
            </DescriptionKursText>
          </ContainerDescriptionKurs>
        </ContentPaymentContainer>
        <ContainerListTransaction>
          <TransactionMapping transactions={dataListTransaksi} />
        </ContainerListTransaction>
      </HistoryTransactionContainer>
    </BodyDashboard>
  )
}
