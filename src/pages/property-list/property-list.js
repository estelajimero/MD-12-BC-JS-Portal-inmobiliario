/** * Recuperar las propiedades disponibles de servidor.
    * Crear mapper para cumplir con el modelo de la vista.
    * Recuperar datos maestros de servidor para cargarlos en el filtro.
    * Crear datos maestros de cliente para cargarlos en el filtro.
    * Recoger valores del filtro.
    * Utilizar filtro para filtrar en servidor. */

import { 
    getPropertyList, 
    getProvinceList, 
    getSaleTypeList 
} from './property-list.api';
import { mapPropertyListFromApiToVM } from './property-list.mappers';
import { 
    addPropertyRows,
    setOptions,
} from './property-list.helpers';
import { 
    bathroomOptions, 
    maxPriceOptions, 
    minPriceOptions, 
    roomOptions 
} from './property-list.constants';

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
    setOptions(minPriceOptions, 'select-min-price', 'Precio mínimo');
    setOptions(maxPriceOptions, 'select-max-price', 'Precio máximo');
});

const loadPropertyList = (propertyList => {
    const vMModelPropertyList = mapPropertyListFromApiToVM(propertyList);
    addPropertyRows(vMModelPropertyList);
});

