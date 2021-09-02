import Axios from "axios";

const url = `${process.env.BASE_API_URL}/properties`;

export const getProperty = id =>
    Axios.get(`${url}/${id}`).then(response => {
        return response.data;
    });

const contactUrl = `${process.env.BASE_API_URL}/contact`;

export const isValidContact = form => 
    Axios.post(contactUrl, form).then(response => {
        return response.data;
    });