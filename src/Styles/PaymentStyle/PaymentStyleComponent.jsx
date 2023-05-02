import styled from "styled-components";

export const PaymentContainer = styled.div`
background-color: white;
box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 4px;
border-radius: 20px;
padding: 20px;
width: 900px;
height: 700px;
margin: 0px auto;
margin-top: 20px;
`;

export const ContentPaymentContainer = styled.div`
margin-top: 15px;
`;

export const ContainerDescriptionKurs = styled.div`
margin-bottom:10px;
`;

export const ContainerRincianPembayaran = styled.div`
height: 80%;
margin: 0px 150px;
`;

export const ContainerInRincianPembayaran = styled.div`
height: inherit;
`;

export const ContainerPembayaranSuccess = styled.div`
height: 80%;
margin: 0px 150px;
display:none;
`;

export const ContainerInPembayaranSuccess = styled.div`
height: inherit;
display:flex;
justify-content: center;
align-items: center;
flex-direction:column;
`;

export const TextPaymentSuccess = styled.div`
margin-top: 20px;
font-size: 25px;
color: #089d08;
`;

export const TextPaymentFailed = styled.div`
margin-top: 20px;
font-size: 25px;
color: red;
`;

export const ContainerTimeExpired = styled.div`
display: flex;
justify-content: center;
margin-bottom: 10px;
height: 85px;
`;

export const TimeExpiredContent = styled.div`
border-radius: 30px;
height: 100%;
-webkit-box-align: center;
align-items: center;
display: flex;
width: 200px;
-webkit-box-pack: center;
justify-content: center;
box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 7px;
font-size: 35px;
`;

export const VaNumberContainer = styled.div`
font-size: 25px;
text-align: center;
`;

export const FieldTextVa = styled.div`
font-size: 15px;
text-align: center;
`;

export const FieldRincianPembayaran = styled.div`
margin-top:10px;
font-size: 20px;
`;

export const ButtonUpdatePayment = styled.div`
height: 60px;
border-radius: 30px;
display: flex;
-webkit-box-pack: center;
justify-content: center;
background: #50A9FC;
-webkit-box-align: center;
align-items: center;
margin: 0px 30px;
margin-top:20px;
`

export const ButtonLanjutPayment = styled.div`

width: 300px;
height: 60px;
border-radius: 30px;
display: flex;
-webkit-box-pack: center;
justify-content: center;
background: #50A9FC;
-webkit-box-align: center;
align-items: center;
margin: 0px 30px;
margin-top:20px;
`

export const WaitingPayment = styled.div`
font-size: 20px;
color: #925b00;
text-align:center;
display:none;
`