/** * Recuperar las propiedades disponibles de servidor.
    * Crear mapper para cumplir con el modelo de la vista.
    * Recuperar datos maestros de servidor para cargarlos en el filtro.
    * Crear datos maestros de cliente para cargarlos en el filtro.
    * Recoger valores del filtro.
    * Utilizar filtro para filtrar en servidor. */

import { getPropertyList } from './property-list.api';
import { getProvinceList, getSaleTypeList } from '../../common/api/common.api';
import { mapPropertyListFromApiToVM, mapFilterToQueryParams } from './property-list.mappers';
import { 
    addPropertyRows,
    setOptions,
    clearPropertyRows,
} from './property-list.helpers';
import { 
    bathroomOptions, 
    maxPriceOptions, 
    minPriceOptions, 
    roomOptions 
} from './property-list.constants';
import { onUpdateField, onSubmitForm } from '../../common/helpers';

// método de promises para llamar a un array de promesas que se realizan en paralelo
Promise.all([
    getPropertyList(),
    getSaleTypeList(),
    getProvinceList(),
]).then(resultList => { // .then(([propertyList, saleTypeList, provinceList])) -> destructuring directamente como parámetros.
    const [propertyList, saleTypeList, provinceList] = resultList;

    loadPropertyList(propertyList);
    setOptions(saleTypeList, 'select-sale-type', '¿Qué venta?');
    setOptions(provinceList, 'select-province', '¿Dónde?');
    setOptions(roomOptions, 'select-room', '¿Habitaciones?');
    setOptions(bathroomOptions, 'select-bathroom', '¿Cuántos baños?');
    setOptions(minPriceOptions, 'select-min-price', 'Min (EUR)');
    setOptions(maxPriceOptions, 'select-max-price', 'Max (EUR)');
});

const loadPropertyList = (propertyList => {
    const vMModelPropertyList = mapPropertyListFromApiToVM(propertyList);
    addPropertyRows(vMModelPropertyList);
});

let filter = {
    saleTypeId: '',
    provinceId: '',
    minRooms: '',
    minBathRooms: '',
    minPrice: '',
    maxPrice: '',
};

onUpdateField('select-sale-type', (event) => {
    const value = event.target.value;
    filter = {
        ...filter,
        saleTypeId: value,
    };
});

onUpdateField('select-province', (event) => {
    const value = event.target.value;
    filter = {
        ...filter,
        provinceId: value,
    };
});

onUpdateField('select-room', (event) => {
    const value = event.target.value;
    filter = {
        ...filter,
        minRooms: value,
    };
});

onUpdateField('select-bathroom', (event) => {
    const value = event.target.value;
    filter = {
        ...filter,
        minBathRooms: value,
    };
});

onUpdateField('select-min-price', (event) => {
    const value = event.target.value;
    filter = {
        ...filter,
        minPrice: value,
    };
});

onUpdateField('select-max-price', (event) => {
    const value = event.target.value;
    filter = {
        ...filter,
        maxPrice: value,
    };
});

onSubmitForm('search-button', () => {
    const queryParams = mapFilterToQueryParams(filter);

    clearPropertyRows();

    getPropertyList(queryParams).then(propertyList => {
        loadPropertyList(propertyList);
    });
});