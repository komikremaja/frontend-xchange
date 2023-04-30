import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';
import { BodyLandingPage } from '../Styles/LandingPageStyle/styledLandingPage';
import { AmountKurs, BodyDashboard, BorderCurrencyKursRate, BorderDashboardContent, BorderDiagram, BorderInDiagram, BorderInKursRateBank, BorderKursRate, BorderKursRateBank, BorderStatisticKurs, BorderTitleKursRateBank, CurrencyKursRate, LogoBank, TitleStatisticKurs } from '../Styles/Dashboard/DashboardStyleComponent';
import NavbarDashBoard from '../components/navbar/NavbarDashBoard';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { KursDiagram, KursSpecific } from '../Services/KursService';
import logoBCA from '../Assets/LogoBCA.png';
import logoBRI from '../Assets/LogoBRI.png';
import logoMandiri from '../Assets/LogoMandiri.png';
import BottomBarPage from '../components/BottomBar/BottomBarPage';



export default function Dashboard() {
    const [dataKursDiagram, setDataKursDiagram] = useState();
    const [email, setEmail] = useState();
    const [dataDiagramJual, setDataDiagramJual] = useState([]);
    const [dataDiagramBeli, setDataDiagramBeli] = useState([]);
    const [kursBCA, setKursBCA] = useState();
    const [kursBRI, setKursBRI] = useState();
    const [kursMandiri, setKursMandiri] = useState();


    const userCookie = Cookies.get('user');
    const cookieExpired = Cookies.get('expires');
    const user = userCookie ? JSON.parse(userCookie) : null;
    const navigate = useNavigate();

    const inquiryKursDiagram = async () => {
        let responseInquiryKursDiagram = await KursDiagram();
        setDataKursDiagram(responseInquiryKursDiagram.data);
    }

    const inquirySpecificDiagram = async () => {
        let responseInquiryKursBCA = await KursSpecific("BCA");
        let responseInquiryKursBRI = await KursSpecific("BRI");
        let responseInquiryKursMandiri = await KursSpecific("Mandiri");
        setKursBCA(responseInquiryKursBCA.data);
        setKursBRI(responseInquiryKursBRI.data);
        setKursMandiri(responseInquiryKursMandiri.data);

    }


    useEffect(() => {
        inquirySpecificDiagram();
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
            inquiryKursDiagram();
            if (dataKursDiagram) {
                parsingDataKursDiagram();
            }

           
            // console.log("Kurs BCA: ", kursBCA);
            // console.log("Kurs BRI: ", kursBRI);
            // console.log("Kurs Mandiri: ", kursMandiri);
        }, 100);
        return () => clearInterval(interval);
    });

    const parsingDataKursDiagram = () => {
        var resultJual = {};
        var resultBeli = {};
        dataKursDiagram.data.forEach(data => {
            if (typeof (resultJual[data.createdDate]) === "undefined") {
                resultJual[data.createdDate] = {};
            }
            if (typeof (resultBeli[data.createdDate]) === "undefined") {
                resultBeli[data.createdDate] = {};
            }
            if (data.currency != "IDR") {
                resultJual[data.createdDate][data.currency] = data.kursSell;
                resultBeli[data.createdDate][data.currency] = data.kursBuy;
            }
        });

        var listData = [];
        var listDataBuy = [];
        for (const [date, currencies] of Object.entries(resultJual)) {
            listData.push({
                "date": date,
                ...currencies
            });
        }
        for (const [date, currencies] of Object.entries(resultBeli)) {
            listDataBuy.push({
                "date": date,
                ...currencies
            });
        }
        setDataDiagramJual(listData);
        setDataDiagramBeli(listDataBuy);
    }

    return (
        <BodyDashboard>
            <NavbarDashBoard menu1="Dashboard" menu2="History" menu3="Profile" menu4="Exchange"/>
            <BorderDashboardContent>
                {/* Border Diagram */}
                <BorderStatisticKurs>
                    <TitleStatisticKurs>
                        Table Kurs
                    </TitleStatisticKurs>
                    <BorderDiagram>
                        {/* Diagram kurs jual */}
                        <BorderInDiagram>
                            Kurs Jual (SisiBank)
                            <BarChart width={600} height={400} data={dataDiagramJual} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <XAxis dataKey="date" />
                                <YAxis />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="USD" fill="#8884d8" />
                                <Bar dataKey="SGD" fill="#82ca9d" />
                                <Bar dataKey="AUD" fill="#ffc658" />
                                <Bar dataKey="EUR" fill="#000000" />
                            </BarChart>
                        </BorderInDiagram>
                        {/* Diagram kurs beli */}
                        <BorderInDiagram>
                            Kurs Beli (SisiBank)
                            <BarChart width={600} height={400} data={dataDiagramBeli} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <XAxis dataKey="date" />
                                <YAxis />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="USD" fill="#8884d8" />
                                <Bar dataKey="SGD" fill="#82ca9d" />
                                <Bar dataKey="AUD" fill="#ffc658" />
                                <Bar dataKey="EUR" fill="#000000" />
                            </BarChart>
                        </BorderInDiagram>
                    </BorderDiagram>
                </BorderStatisticKurs>
                <BorderKursRate>
                    <BorderInKursRateBank>
                        <BorderKursRateBank>
                            <BorderTitleKursRateBank>
                                <LogoBank image={logoBCA} />
                            </BorderTitleKursRateBank>
                            <BorderCurrencyKursRate>
                                <Link to={`/transaction/exchange`}>
                                    <CurrencyKursRate>
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
                                </Link>

                                <CurrencyKursRate>
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

                                <CurrencyKursRate>
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

                                <CurrencyKursRate>
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


                        <BorderKursRateBank>
                            <BorderTitleKursRateBank>
                                <LogoBank image={logoBRI} />

                            </BorderTitleKursRateBank>
                            <BorderCurrencyKursRate>
                                <CurrencyKursRate>
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

                                <CurrencyKursRate>
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

                                <CurrencyKursRate>
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

                                <CurrencyKursRate>
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


                        <BorderKursRateBank>
                            <BorderTitleKursRateBank>
                                <LogoBank image={logoMandiri} />

                            </BorderTitleKursRateBank>
                            <BorderCurrencyKursRate>
                                <CurrencyKursRate>
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

                                <CurrencyKursRate>
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

                                <CurrencyKursRate>
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

                                <CurrencyKursRate>
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
                    </BorderInKursRateBank>
                </BorderKursRate>
                <BottomBarPage />
            </BorderDashboardContent>
        </BodyDashboard>
    )
}
