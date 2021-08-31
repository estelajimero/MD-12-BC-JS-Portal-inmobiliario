/** * Recuperar la propiedad de servidor según el id de la url.
    * Crear mapper para cumplir con el modelo de la vista.
    * Recuperar los valores del formulario de contacto.
    * Crear validaciones necesarias de dicho formulario.
    * Crear método post para enviar información de contacto. */

import { history } from '../../core/router';
import { getEquipment, getProperty } from './property-detail.api';
import { setPropertyValues } from './property-detail.helpers';
import { mapPropertyFromApiToVM } from './property-detail.mappers';

const params = history.getParams();

Promise.all([
    getProperty(params.id),
    getEquipment(),
]).then(([propertyList, equipmentList]) => {
    loadProperty(propertyList, equipmentList);
});

const loadProperty = (propertyList, equipmentList) => {
    const vMProperties = mapPropertyFromApiToVM(propertyList, equipmentList);
    
    setPropertyValues(vMProperties);
}

let property = {
    id: '',
    mainImage: '',
    title: '',
    city: '',
    rooms: '',
    squareMeter: '',
    price: '',
    bathrooms: '',
    notes: '',
    mainFeatures: '',
    equipments: '',
    locationUrl: '',
    images: '',
};

let form = {
    email: '',
    message: '',
}