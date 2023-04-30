import React from 'react'
import { BodyDashboard } from '../Styles/Dashboard/DashboardStyleComponent'
import NavbarDashBoard from '../components/navbar/NavbarDashBoard'
import { ExchangeContainer, TitleExchanged } from '../Styles/Exchange/ExchangeStyledComponent'
import FormExchange from '../components/FormExchange/FormExchange'
import '../Styles/Exchange/ExchangeStyledCss.css';

export default function ExchangeTransaction() {
  return (
    <BodyDashboard>
      <NavbarDashBoard menu1="Dashboard" menu2="History" menu3="Profile" menu4="Exchange"/>
      <ExchangeContainer>
        <TitleExchanged>Exchange <span className="moneyTitle"> Money </span></TitleExchanged>
        <FormExchange currentPage="Exchange" subTitle="Rincian Transaksi"/>
      </ExchangeContainer>
    </BodyDashboard>
  )
}
