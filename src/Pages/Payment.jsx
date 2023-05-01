import React from 'react'
import { useParams } from 'react-router-dom'
import { BodyDashboard } from '../Styles/Dashboard/DashboardStyleComponent';
import NavbarDashBoard from '../components/navbar/NavbarDashBoard';
import { ContentPaymentContainer, PaymentContainer } from '../Styles/PaymentStyle/PaymentStyleComponent';
import { ContainerDescriptionKurs, DescriptionKursText, DescriptionTextContent, TitleExchanged } from '../Styles/Exchange/ExchangeStyledComponent';

export default function Payment() {
  const { vaNumber } = useParams();

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
            <DescriptionKursText >
               Silahkan cek rincian pembayaran anda sebelum membayar.
            </DescriptionKursText>
          </ContainerDescriptionKurs>
        </ContentPaymentContainer>
      </PaymentContainer>
    </BodyDashboard>
  )
}
