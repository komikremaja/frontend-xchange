import React, { useEffect, useState } from 'react'
import { AmountKurs, BorderCurrencyKursRate, BorderKursRateBank, BorderTitleKursRateBank, CurrencyKursRate, LogoBank } from '../../Styles/Dashboard/DashboardStyleComponent';

import logoBCA from '../../Assets/LogoBCA.png';
import logoBRI from '../../Assets/LogoBRI.png';
import logoMandiri from '../../Assets/LogoMandiri.png';
import { ContainerDescriptionKurs, ContainerKursBank, ContainerKursRate, DescriptionFirstKursText, DescriptionKursText } from '../../Styles/Exchange/ExchangeStyledComponent';
import { BorderSubmit } from '../../Styles/FormLogin/FormLoginStyleComponent';
import { useNavigate } from 'react-router-dom';

export default function KursBank(props) {
    const { kursBCA, kursBRI, kursMandiri, currentPage } = props;
    const [dataExchange, setdDataExchange] = useState();
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const [bcaUsd, setBcaUsd] = useState();
    const [bcaSgd, setbcaSgd] = useState();
    const [bcaAud, setbcaAud] = useState();
    const [bcaEur, setbcaEur] = useState();

    const [briUsd, setbriUsd] = useState();
    const [briSgd, setbriSgd] = useState();
    const [briAud, setbriAud] = useState();
    const [briEur, setbriEur] = useState();


    const [mandiriUsd, setMandiriUsd] = useState();
    const [mandiriSgd, setMandiriSgd] = useState();
    const [mandiriAud, setMandiriAud] = useState();
    const [mandiriEur, setMandiriEur] = useState();

    const navigate = useNavigate();
    
    if(currentPage !== "Kurs"){
        return(
            <div></div>
        );
    }

    function chooseUsdBcaKurs() {
        setBcaUsd('clickedKurs');
        setbcaSgd('');
        setbcaAud('');
        setbcaEur('');


        setbriUsd('');
        setbriSgd('');
        setbriAud('');
        setbriEur('');

        setMandiriUsd('');
        setMandiriSgd('');
        setMandiriAud('');
        setMandiriEur('');

        const data = {
            currency: "USD/IDR",
            kursBuy: kursBCA.data[1].kursMarginBuy,
            kursSell: kursBCA.data[1].kursMarginSell,
            bankType: "BCA"
        }
        setdDataExchange(data);
        setButtonDisabled(false);
        console.log(dataExchange);
    }

    function chooseSgdKurs() {
        setBcaUsd('');
        setbcaSgd('clickedKurs');
        setbcaAud('');
        setbcaEur('');

        setbriUsd('');
        setbriSgd('');
        setbriAud('');
        setbriEur('');

        setMandiriUsd('');
        setMandiriSgd('');
        setMandiriAud('');
        setMandiriEur('');

        const data = {
            currency: "SGD/IDR",
            kursBuy: kursBCA.data[2].kursMarginBuy,
            kursSell: kursBCA.data[2].kursMarginSell,
            bankType: "BCA"
        }
        setdDataExchange(data);
        setButtonDisabled(false);
        console.log(dataExchange);
    }

    function chooseAudKurs() {
        setBcaUsd('');
        setbcaSgd('');
        setbcaAud('clickedKurs');
        setbcaEur('');

        setbriUsd('');
        setbriSgd('');
        setbriAud('');
        setbriEur('');

        setMandiriUsd('');
        setMandiriSgd('');
        setMandiriAud('');
        setMandiriEur('');

        const data = {
            currency: "AUD/IDR",
            kursBuy: kursBCA.data[4].kursMarginBuy,
            kursSell: kursBCA.data[4].kursMarginSell,
            bankType: "BCA"
        }
        setdDataExchange(data);
        setButtonDisabled(false);
        console.log(dataExchange);
    }

    function chooseEurKurs() {
        setBcaUsd('');
        setbcaSgd('');
        setbcaAud('');
        setbcaEur('clickedKurs');

        setbriUsd('');
        setbriSgd('');
        setbriAud('');
        setbriEur('');

        setMandiriUsd('');
        setMandiriSgd('');
        setMandiriAud('');
        setMandiriEur('');

        const data = {
            currency: "EUR/IDR",
            kursBuy: kursBCA.data[3].kursMarginBuy,
            kursSell: kursBCA.data[3].kursMarginSell,
            bankType: "BCA"
        }
        setdDataExchange(data);
        setButtonDisabled(false);
        console.log(dataExchange);
    }

    function chooseUsdBriKurs() {
        setBcaUsd('');
        setbcaSgd('');
        setbcaAud('');
        setbcaEur('');

        setbriUsd('clickedKurs');
        setbriSgd('');
        setbriAud('');
        setbriEur('');

        setMandiriUsd('');
        setMandiriSgd('');
        setMandiriAud('');
        setMandiriEur('');

        const data = {
            currency: "USD/IDR",
            kursBuy: kursBRI.data[1].kursMarginBuy,
            kursSell: kursBRI.data[1].kursMarginSell,
            bankType: "BRI"
        }
        setdDataExchange(data);
        setButtonDisabled(false);
        console.log(dataExchange);
    }

    function chooseSgdBriKurs() {
        setBcaUsd('');
        setbcaSgd('');
        setbcaAud('');
        setbcaEur('');

        setbriUsd('');
        setbriSgd('clickedKurs');
        setbriAud('');
        setbriEur('');

        setMandiriUsd('');
        setMandiriSgd('');
        setMandiriAud('');
        setMandiriEur('');

        const data = {
            currency: "SGD/IDR",
            kursBuy: kursBRI.data[2].kursMarginBuy,
            kursSell: kursBRI.data[2].kursMarginSell,
            bankType: "BRI"
        }
        setdDataExchange(data);
        setButtonDisabled(false);
        console.log(dataExchange);
    }

    function chooseAudBriKurs() {
        setBcaUsd('');
        setbcaSgd('');
        setbcaAud('');
        setbcaEur('');

        setbriUsd('');
        setbriSgd('');
        setbriAud('clickedKurs');
        setbriEur('');

        setMandiriUsd('');
        setMandiriSgd('');
        setMandiriAud('');
        setMandiriEur('');

        const data = {
            currency: "AUD/IDR",
            kursBuy: kursBRI.data[4].kursMarginBuy,
            kursSell: kursBRI.data[4].kursMarginSell,
            bankType: "BRI"
        }
        setdDataExchange(data);
        setButtonDisabled(false);
        console.log(dataExchange);
    }

    function chooseEurBriKurs() {
        setBcaUsd('');
        setbcaSgd('');
        setbcaAud('');
        setbcaEur('');

        setbriUsd('');
        setbriSgd('');
        setbriAud('');
        setbriEur('clickedKurs');

        setMandiriUsd('');
        setMandiriSgd('');
        setMandiriAud('');
        setMandiriEur('');

        const data = {
            currency: "EUR/IDR",
            kursBuy: kursBRI.data[3].kursMarginBuy,
            kursSell: kursBRI.data[3].kursMarginSell,
            bankType: "BRI"
        }
        setdDataExchange(data);
        setButtonDisabled(false);
        console.log(dataExchange);
    }

    function chooseUsdMandiriKurs() {
        setBcaUsd('');
        setbcaSgd('');
        setbcaAud('');
        setbcaEur('');

        setbriUsd('');
        setbriSgd('');
        setbriAud('');
        setbriEur('');

        setMandiriUsd('clickedKurs');
        setMandiriSgd('');
        setMandiriAud('');
        setMandiriEur('');

        const data = {
            currency: "USD/IDR",
            kursBuy: kursMandiri.data[1].kursMarginBuy,
            kursSell: kursMandiri.data[1].kursMarginSell,
            bankType: "Mandiri"
        }
        setdDataExchange(data);
        setButtonDisabled(false);
        console.log(dataExchange);
    }

    function chooseSgdMandiriKurs() {
        setBcaUsd('');
        setbcaSgd('');
        setbcaAud('');
        setbcaEur('');

        setbriUsd('');
        setbriSgd('');
        setbriAud('');
        setbriEur('');

        setMandiriUsd('');
        setMandiriSgd('clickedKurs');
        setMandiriAud('');
        setMandiriEur('');

        const data = {
            currency: "SGD/IDR",
            kursBuy: kursMandiri.data[2].kursMarginBuy,
            kursSell: kursMandiri.data[2].kursMarginSell,
            bankType: "Mandiri"
        }
        setdDataExchange(data);
        setButtonDisabled(false);
        console.log(dataExchange);
    }

    function chooseAudMandiriKurs() {
        setBcaUsd('');
        setbcaSgd('');
        setbcaAud('');
        setbcaEur('');

        setbriUsd('');
        setbriSgd('');
        setbriAud('');
        setbriEur('');

        setMandiriUsd('');
        setMandiriSgd('');
        setMandiriAud('clickedKurs');
        setMandiriEur('');

        const data = {
            currency: "AUD/IDR",
            kursBuy: kursMandiri.data[4].kursMarginBuy,
            kursSell: kursMandiri.data[4].kursMarginSell,
            bankType: "Mandiri"
        }
        setdDataExchange(data);
        setButtonDisabled(false);
        console.log(dataExchange);
    }

    function chooseEurMandiriKurs() {
        setBcaUsd('');
        setbcaSgd('');
        setbcaAud('');
        setbcaEur('');

        setbriUsd('');
        setbriSgd('');
        setbriAud('');
        setbriEur('');

        setMandiriUsd('');
        setMandiriSgd('');
        setMandiriAud('');
        setMandiriEur('clickedKurs');

        const data = {
            currency: "EUR/IDR",
            kursBuy: kursMandiri.data[3].kursMarginBuy,
            kursSell: kursMandiri.data[3].kursMarginSell,
            bankType: "Mandiri"
        }
        setdDataExchange(data);
        setButtonDisabled(false);
        console.log(dataExchange);
    }

    function clickLanjut(){
        localStorage.setItem("data", JSON.stringify(dataExchange));
        navigate(`/transaction/exchange`)
    }

    return (
        <ContainerKursRate>
            <ContainerKursBank>
                {/* BCA */}
                <BorderKursRateBank>
                    <BorderTitleKursRateBank>
                        <LogoBank image={logoBCA} />
                    </BorderTitleKursRateBank>
                    <BorderCurrencyKursRate>
                        <CurrencyKursRate className={bcaUsd} onClick={chooseUsdBcaKurs}>
                            <AmountKurs>
                                USD/IDR
                            </AmountKurs>
                            <AmountKurs>
                                {kursBCA ? kursBCA.data[1].kursMarginBuy : "0"}|B
                            </AmountKurs>
                            <AmountKurs>
                                {kursBCA ? kursBCA.data[1].kursMarginSell : "0"}|S
                            </AmountKurs>
                        </CurrencyKursRate>

                        <CurrencyKursRate className={bcaSgd} onClick={chooseSgdKurs}>
                            <AmountKurs>
                                SGD/IDR
                            </AmountKurs>
                            <AmountKurs>
                                {kursBCA ? kursBCA.data[2].kursMarginBuy : "0"}|B
                            </AmountKurs>
                            <AmountKurs>
                                {kursBCA ? kursBCA.data[2].kursMarginSell : "0"}|S
                            </AmountKurs>
                        </CurrencyKursRate>

                        <CurrencyKursRate className={bcaAud} onClick={chooseAudKurs}>
                            <AmountKurs>
                                AUD/IDR
                            </AmountKurs>
                            <AmountKurs>
                                {kursBCA ? kursBCA.data[4].kursMarginBuy : "0"}|B
                            </AmountKurs>
                            <AmountKurs>
                                {kursBCA ? kursBCA.data[4].kursMarginSell : "0"}|S
                            </AmountKurs>
                        </CurrencyKursRate>

                        <CurrencyKursRate className={bcaEur} onClick={chooseEurKurs}>
                            <AmountKurs>
                                EUR/IDR
                            </AmountKurs>
                            <AmountKurs>
                                {kursBCA ? kursBCA.data[3].kursMarginBuy : "0"}|B
                            </AmountKurs>
                            <AmountKurs>
                                {kursBCA ? kursBCA.data[3].kursMarginSell : "0"}|S
                            </AmountKurs>
                        </CurrencyKursRate>

                    </BorderCurrencyKursRate>
                </BorderKursRateBank>

                {/* BRI */}
                <BorderKursRateBank>
                    <BorderTitleKursRateBank>
                        <LogoBank image={logoBRI} />
                    </BorderTitleKursRateBank>
                    <BorderCurrencyKursRate>
                        <CurrencyKursRate className={briUsd} onClick={chooseUsdBriKurs}>
                            <AmountKurs>
                                USD/IDR
                            </AmountKurs>
                            <AmountKurs>
                                {kursBRI ? kursBRI.data[1].kursMarginBuy : "0"}|B
                            </AmountKurs>
                            <AmountKurs>
                                {kursBRI ? kursBRI.data[1].kursMarginSell : "0"}|S
                            </AmountKurs>
                        </CurrencyKursRate>

                        <CurrencyKursRate className={briSgd} onClick={chooseSgdBriKurs}>
                            <AmountKurs>
                                SGD/IDR
                            </AmountKurs>
                            <AmountKurs>
                                {kursBRI ? kursBRI.data[2].kursMarginBuy : "0"}|B
                            </AmountKurs>
                            <AmountKurs>
                                {kursBRI ? kursBRI.data[2].kursMarginSell : "0"}|S
                            </AmountKurs>
                        </CurrencyKursRate>

                        <CurrencyKursRate className={briAud} onClick={chooseAudBriKurs}>
                            <AmountKurs>
                                AUD/IDR
                            </AmountKurs>
                            <AmountKurs>
                                {kursBRI ? kursBRI.data[4].kursMarginBuy : "0"}|B
                            </AmountKurs>
                            <AmountKurs>
                                {kursBRI ? kursBRI.data[4].kursMarginSell : "0"}|S
                            </AmountKurs>
                        </CurrencyKursRate>

                        <CurrencyKursRate className={briEur} onClick={chooseEurBriKurs}>
                            <AmountKurs>
                                EUR/IDR
                            </AmountKurs>
                            <AmountKurs>
                                {kursBRI ? kursBRI.data[3].kursMarginBuy : "0"}|B
                            </AmountKurs>
                            <AmountKurs>
                                {kursBRI ? kursBRI.data[3].kursMarginSell : "0"}|S
                            </AmountKurs>
                        </CurrencyKursRate>

                    </BorderCurrencyKursRate>
                </BorderKursRateBank>

                {/* Mandiri */}

                <BorderKursRateBank>
                    <BorderTitleKursRateBank>
                        <LogoBank image={logoMandiri} />
                    </BorderTitleKursRateBank>
                    <BorderCurrencyKursRate>
                        <CurrencyKursRate className={mandiriUsd} onClick={chooseUsdMandiriKurs}>
                            <AmountKurs>
                                USD/IDR
                            </AmountKurs>
                            <AmountKurs>
                                {kursMandiri ? kursMandiri.data[1].kursMarginBuy : "0"}|B
                            </AmountKurs>
                            <AmountKurs>
                                {kursMandiri ? kursMandiri.data[1].kursMarginSell : "0"}|S
                            </AmountKurs>
                        </CurrencyKursRate>

                        <CurrencyKursRate className={mandiriSgd} onClick={chooseSgdMandiriKurs}>
                            <AmountKurs>
                                SGD/IDR
                            </AmountKurs>
                            <AmountKurs>
                                {kursMandiri ? kursMandiri.data[2].kursMarginBuy : "0"}|B
                            </AmountKurs>
                            <AmountKurs>
                                {kursMandiri ? kursMandiri.data[2].kursMarginSell : "0"}|S
                            </AmountKurs>
                        </CurrencyKursRate>

                        <CurrencyKursRate className={mandiriAud} onClick={chooseAudMandiriKurs}>
                            <AmountKurs>
                                AUD/IDR
                            </AmountKurs>
                            <AmountKurs>
                                {kursMandiri ? kursMandiri.data[4].kursMarginBuy : "0"}|B
                            </AmountKurs>
                            <AmountKurs>
                                {kursMandiri ? kursMandiri.data[4].kursMarginSell : "0"}|S
                            </AmountKurs>
                        </CurrencyKursRate>

                        <CurrencyKursRate className={mandiriEur} onClick={chooseEurMandiriKurs}>
                            <AmountKurs>
                                EUR/IDR
                            </AmountKurs>
                            <AmountKurs>
                                {kursMandiri ? kursMandiri.data[3].kursMarginBuy : "0"}|B
                            </AmountKurs>
                            <AmountKurs>
                                {kursMandiri ? kursMandiri.data[3].kursMarginSell : "0"}|S
                            </AmountKurs>
                        </CurrencyKursRate>

                    </BorderCurrencyKursRate>
                </BorderKursRateBank>
            </ContainerKursBank>
            <ContainerDescriptionKurs>
                    <DescriptionFirstKursText>
                        Kurs dapat berubah sewaktu-waktu sebelum pembayaran selesai dilakukan.
                    </DescriptionFirstKursText>
                </ContainerDescriptionKurs>

                <BorderSubmit className='ButtonSubmitHover'>
                    <button className='ButtonSubmit' onClick={clickLanjut} disabled={buttonDisabled}>Lanjut</button>
                </BorderSubmit>
        </ContainerKursRate>
    )
}
