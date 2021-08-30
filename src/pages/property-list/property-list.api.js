import Axios from "axios";

const url = `${process.env.BASE_API_URL}/properties`;

export const getPropertyList = () => 
    Axios.get(url).then(response => {
        return response.data;
    });

// Para el tipo de venta (alquiler, venta, compartir, vacacional)
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