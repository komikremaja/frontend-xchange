import styled from "styled-components";

export const BodyDashboard = styled.div`
    background-color: rgb(235 235 235);
`

export const BorderTextNameCustomer = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const BorderDashboardContent = styled.div`
   height:750px;
`

export const BorderStatisticKurs = styled.div`
height: 70%;
margin: 50px 150px 0px 150px;
box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 3px;
border-radius: 20px;
padding: 20px 20px;
`

export const TitleStatisticKurs = styled.div`
text-align: center;
    font-family: Habibi;
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    color: rgb(0 0 0);
`
export const BorderDiagram = styled.div`
    display:flex;
`

export const BorderInDiagram = styled.div`
text-align: center;
`

export const BorderKursRate = styled.div`
margin: 20px 70px 20px;
    height: 400px;
    background: #ececec;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 4px;
`

export const BorderInKursRateBank = styled.div`
padding: 20px 20px 0px;
height: 100%;
display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

export const BorderKursRateBank = styled.div`
width: 350px;
height: 300px;
border-radius: 20px;
box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 4px;
background-color: #e5e5e3;
padding: 0px 20px 0px 20px;
`

export const BorderTitleKursRateBank = styled.div`
height: 20%;
display: flex;
justify-content: center;
`
export const LogoBank = styled.div`
height: 70px;
width: 100px;
background-image:url(${props => props.image});
background-repeat: no-repeat;
background-size:cover;
`

export const CurrencyKursRate = styled.div`
color:black !important;
height: 100px;
background-color: white;
width: 150px;
border-radius: 20px;
padding-top: 10px;
/* flex-wrap: wrap; */
flex-direction: column;
display: flex;
align-items: center;
margin-top: 10px;
-webkit-box-pack: center;
/* justify-content: center; */
-webkit-box-align: center;
box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 4px;
`

export const BorderCurrencyKursRate = styled.div`
height: 70%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
export const AmountKurs = styled.div`
`
