import Axios from "axios";

// Para el tipo de operación (alquiler, venta, compartir, vacacional)
const saleTypeListUrl = `${process.env.BASE_API_URL}/saleTypes`;

export const getSaleTypeList = () => 
    Axios.get(saleTypeListUrl).then(response => {
        return response.data;
    });

// Para la lista de provincias
const provinceListUrl = `${process.env.BASE_API_URL}/provinces`;

export const getProvinceList = () =>
    Axios.get(provinceListUrl).then(response => {
        return response.data;
    });

// Para equipamiento
const equipmentsUrl = `${process.env.BASE_API_URL}/equipments`;

export const getEquipment = () => 
    Axios.get(equipmentsUrl).then(response => {
        return response.data;
    });