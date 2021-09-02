import Axios from "axios";

const url = `${process.env.BASE_API_URL}/properties`;

export const getPropertyList = (queryParams) => 
    Axios.get(`${url}?${queryParams}`).then(response => {
        return response.data;
    });