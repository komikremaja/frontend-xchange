import API from "../API/API";

export const InquiryPaymentStatus = async (data) => {
    const url = `http://localhost:8484/payment/inquiry/payment-status`;
    const response = await API({
        url,
        method: "post",
        data
    });
    console.log(`Responsse API Inquiry payment : ${response}`);
    return response;
}

