import { useEffect, useRef } from "react";
import styled from "styled-components";
import '../../Styles/HistoryTransaction/HistoryCss.css';
import { useNavigate } from "react-router-dom";

export const HistoryTransactionContainer = styled.div`
background-color: white;
box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 4px;
border-radius: 20px;
padding: 20px;
width: 900px;
height: 700px;
margin: 0px auto;
margin-top: 20px;
overflow:auto;
`;

export const ContainerListTransaction = styled.div`
height: 80%;
margin: 0px 60px;
`;

export const SingleContainerHistoryTransaction = styled.div`
border-radius: 20px;
box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 9px;
padding: 0px 20px;
margin-top: 10px;
display: flex;
`;

export const SingleContainerLeftField = styled.div`
height: 100%;
width: 60%;
`;
export const SingleContainerRightField = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
`;

export const Field = styled.div`
width: 100%;
`;

export const HistoryDetailTransactionContainer = styled.div`
background-color: white;
box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 4px;
border-radius: 20px;
padding: 20px;
width: 900px;
height: 700px;
margin: 0px auto;
margin-top: 20px;
`;

export const ContainerDetailHistory = styled.div`
display:flex;
flex-direction:column;
height:100%;
justify-content: space-around;
`;

export const ButtonUpdateHistoryTransaction = styled.div`
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
display:none;
`

export const noHistoryTransaction = styled.div`
height:100%;
width:100%;
color:red;
`

const TransactionMapping = ({ transactions }) => {
    const navigate = useNavigate();


    function clickDetailTransaction(vaNumber){
        navigate(`/transaction/history-transaction/detail/${vaNumber}`);
    }

    useEffect(() => {

        console.log(transactions);
      });
    return (
        <ContainerListTransaction>
            {Array.isArray(transactions) && transactions.length > 0 ? transactions.map((transaction) => (
                <SingleContainerHistoryTransaction className="HistoryList" onClickCapture={() => clickDetailTransaction(transaction.vaNumber)}>
                    <SingleContainerLeftField key={transaction.vaNumbber}>
                        <Field>
                            Destination Account: {transaction.destinationAccount}
                        </Field>
                        <Field>
                            Total Amount: {transaction.typeTransaction === 'B' ? `$ ${transaction.amount1}` : `Rp ${transaction.amount2}`}
                        </Field>
                        <Field>
                            Mata Uang: {transaction.currencyPair}
                        </Field>
                        <Field>
                            Transaction Type: {transaction.typeTransaction === 'B' ? `Buy` : `Sell`}
                        </Field>
                    </SingleContainerLeftField>
                    <SingleContainerRightField key={transaction.idTransaction}>
                        <Field>
                            {transaction.transactionStatus === '1' ? `Waiting for payment`: transaction.transactionStatus === '2' ? `Transacation Failed` : transaction.transactionStatus === '3'?  `Payment Success` : ''}
                        </Field>
                    </SingleContainerRightField>
                </SingleContainerHistoryTransaction>
            )): <div className="NoHistoryTransaction">You dont have any transaction history</div>}

        </ContainerListTransaction>
    );
};

export default TransactionMapping;