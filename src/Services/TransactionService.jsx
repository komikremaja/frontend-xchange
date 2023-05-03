import API from "../API/API";

export const ExchcangeService = async (data) => {
    const url = `http://localhost:8383/transaction-service/transaction`;
    const response = await API({
        url,
        method: "post",
        data
    });
    console.log(`Responsse API Transaction : ${response}`);
    return response;
}

export const InquiryTransaction = async (data) => {
    const url = `http://localhost:8383/transaction-service/inquiry/transaction/${data.vaNumber}`;
    const response = await API({
        url,
        method: "get",
        data
    });
    console.log(`Responsse API Inquiry Transaction : ${response}`);
    return response;
}

export const ReconPaymentStatus = async (data) => {
    const url = `http://localhost:8383/transaction-service/recon/payment-status`;
    const response = await API({
        url,
        method: "post",
        data
    });
    console.log(`Responsse API Recon : ${response}`);
    return response;
}

export const InquiryListHistoryTransaction = async (data) => {
    const url = `http://localhost:8383/transaction-service/history-transaction/list/${data.nic}`;
    const response = await API({
        url,
        method: "get",
        data
    });
    console.log(`Responsse API history transaction : ${response}`);
    return response;
}

export const InquiryDetailTransaction = async (data) => {
    const url = `http://localhost:8383/transaction-service/history-transaction/${data}`;
    const response = await API({
        url,
        method: "get",
        data
    });
    console.log(`Responsse API history transaction : ${response}`);
    return response;
}