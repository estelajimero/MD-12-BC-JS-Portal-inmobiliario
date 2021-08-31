import Axios from "axios";

const url = `${process.env.BASE_API_URL}/properties`;

export const getProperty = id =>
    Axios.get(`${url}/${id}`).then(response => {
        return response.data;
    });

const equipmentsUrl = `${process.env.BASE_API_URL}/equipments`;

export const getEquipment = () => 
    Axios.get(equipmentsUrl).then(response => {
        return response.data;
    });