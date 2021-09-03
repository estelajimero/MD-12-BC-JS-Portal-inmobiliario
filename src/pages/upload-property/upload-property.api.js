import Axios from "axios";

const url = `${process.env.BASE_API_URL}/properties`;

export const saveProperty = newProperty =>
    Axios.post(url, newProperty).then(response => {
        return response.data;
    });
