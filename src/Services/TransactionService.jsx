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