import API from "../API/API";

export const KursDiagram = async () => {
    const url = `http://localhost:8282/kurs-service/inquiry-kurs/3`;
    const response = await API({
        url,
        method: "get"
    });
    // console.log(`Responsse API Inquiry Kurs For Diagram : ${response}`);
    return response;
}

export const KursSpecific = async (data) => {
    const url = `http://localhost:8282/kurs-service/inquiry-kurs-specific/${data}`;
    const response = await API({
        url,
        method: "get"
    });
    console.log(`Responsse API Inquiry Kurs For Diagram : ${response}`);
    return response;
}