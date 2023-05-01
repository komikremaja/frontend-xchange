import React from 'react'
import { BodyDashboard } from '../Styles/Dashboard/DashboardStyleComponent'
import NavbarDashBoard from '../components/navbar/NavbarDashBoard'
import { ExchangeContainer, TitleExchanged } from '../Styles/Exchange/ExchangeStyledComponent'
import '../Styles/Exchange/ExchangeStyledCss.css';
import FormExchange from '../components/FormExchange/FormExchange';
import BottomBarPage from '../components/BottomBar/BottomBarPage';

export default function Exchange() {
  return (
    <BodyDashboard>
      <NavbarDashBoard menu1="Dashboard" menu2="History" menu3="Profile" menu4="Exchange"/>
      <ExchangeContainer>
        <TitleExchanged>Exchange <span className="moneyTitle"> Money </span></TitleExchanged>
        <FormExchange currentPage="Kurs" subTitle="Klik pada kurs transaksi yang anda inginkan"/>
      </ExchangeContainer>
      <BottomBarPage/>
    </BodyDashboard>
  )
}
