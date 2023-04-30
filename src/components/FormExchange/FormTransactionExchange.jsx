import React, { useEffect, useState } from 'react'
import { ContainerInOrderExchange, ContainerInRateOrder, ContainerKursIndikasi, ContainerRateOrder, ContentExchangeContainer, LableInputExchange } from '../../Styles/Exchange/ExchangeStyledComponent'
import Cookies from 'js-cookie';

export default function FormTransactionExchange(props) {
    const { currentPage } = props;
    const [typeTransaction, setTypeTransaction] = useState();
    const [dataOrder, setDataOrder] = useState();
    const [currencies, setCurrencies] = useState();

    const userCookie = Cookies.get('user');
    const user = userCookie ? JSON.parse(userCookie) : null;

    useEffect(() => {
        const interval = setInterval(() => {
            // Update myState every 30 seconds
            if (localStorage.getItem('data') !== null) {
                setDataOrder(JSON.parse(localStorage.getItem('data')));
                if (dataOrder) {
                    setCurrencies(dataOrder.currency.split("/"));
                    console.log(currencies);
                }
                console.log(dataOrder);
            }

        }, 500);
        return () => clearInterval(interval);
    });
    if (currentPage !== 'Exchange') {
        return (
            <div></div>
        );
    }

    const typeTransactions = ['Buy', 'Sell'];
    return (
        <ContentExchangeContainer>
            <ContainerInOrderExchange>
                <ContainerRateOrder>
                    <ContainerInRateOrder>
                        <LableInputExchange>
                            Kurs Indikasi(Beli)
                        </LableInputExchange>
                        <ContainerKursIndikasi>
                            {dataOrder ? dataOrder.currency:''} = {dataOrder? dataOrder.kursBuy:''}
                        </ContainerKursIndikasi>
                    </ContainerInRateOrder>
                    <ContainerInRateOrder>
                        <LableInputExchange>
                            Kurs Indikasi(Jual)
                        </LableInputExchange>
                        <ContainerKursIndikasi>
                            {dataOrder ? dataOrder.currency:''} = {dataOrder? dataOrder.kursSell:''}
                        </ContainerKursIndikasi>
                    </ContainerInRateOrder>
                </ContainerRateOrder>
                <LableInputExchange>
                    Jenis Transaksi
                </LableInputExchange>
                <select id="typeTransaction" value={typeTransaction} className='FormInputExchange'>
                    <option value="">-- Pilih Jenis Transaksi --</option>
                    {typeTransactions.map((typeTransaction) => (
                        <option key={typeTransaction} value={typeTransaction}>{typeTransaction}</option>
                    ))}
                </select>
                <LableInputExchange>
                    Nominal Transaksi dalam Valas
                </LableInputExchange>
                <input type='text' placeholder={dataOrder? currencies? currencies[0]:'' : ''} className='FormInputExchange' maxLength="25" />
                <LableInputExchange>
                    Nominal Transaksi dalam Rupiah
                </LableInputExchange>
                <input type='text' placeholder={dataOrder ? currencies? currencies[1]:'' : ''} className='FormInputExchange' maxLength="25" />

                <LableInputExchange>
                    Rekening Tujuan
                </LableInputExchange>
                <select id="typeTransaction" value={typeTransaction} className='FormInputExchange'>
                    <option value="">-- Pilih Rekening Tujuan --</option>
                    {typeTransactions.map((typeTransaction) => (
                        <option key={typeTransaction} value={typeTransaction}>{typeTransaction}</option>
                    ))}
                </select>
            </ContainerInOrderExchange>
            
        </ContentExchangeContainer>
    )
}
