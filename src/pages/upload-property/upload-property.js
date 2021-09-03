/** 
 * Recuperar los valores del formulario de Datos generales.
 * Crear validaciones necesarias de dicho formulario.
 * Recuperar los valores del formulario de Datos de la vivienda.
 * Crear validaciones necesarias de dicho formulario.
 * Recuperar los valores del formulario de Subir fotos.
 * Crear mapper para cumplir con el modelo de la api.
 * Crear método post para enviar información del formulario.
 */

import { saveProperty } from './upload-property.api';
import { getProvinceList, getSaleTypeList, getEquipment } from '../../common/api/common.api';
import { 
    onUpdateField, 
    onSetError, 
    onSubmitForm, 
    onSetFormErrors,
    onAddFile
} from '../../common/helpers';
import { 
    formatCheckboxId, 
    formatDeleteFeatureButtonId, 
    onAddFeature, 
    onAddImage, 
    onRemoveFeature, 
    setCheckboxList, 
    setOptionList,
    addElement,
    removeElement, 
} from './upload-property.helpers';
import { mapPropertyFromVMToApi } from './upload-property.mappers';

Promise.all([
    getSaleTypeList(),
    getProvinceList(),
    getEquipment(),
]).then(resultList => {
    const [saleTypeList, provinceList, equipmentList] = resultList;

    setCheckboxList(saleTypeList, 'saleTypes');
    setEvents(saleTypeList, 'saleTypes');
    setOptionList(provinceList, 'province');
    setCheckboxList(equipmentList, 'equipments');
    setEvents(equipmentList, 'equipments');
});

let newProperty = {
    title: '',
    notes: '',
    email: '',
    phone: '',
    price: '',
    saleTypes: [],
    address: '',
    city: '',
    province: '',
    squareMeter: '',
    rooms: '',
    bathrooms: '',
    locationUrl: '',
    mainFeatures: [],
    equipments: [],
    images: [],
};

const setEvents = (list, id) => {
    list.forEach(element => {
        const checkBox = formatCheckboxId(element);

        onUpdateField(checkBox, event => {
            const value = event.target.value;

           if (event.target.checked === true) {
               newProperty = addElement(value, newProperty, id);
           } else {
               newProperty = removeElement(value, newProperty, id);
           };
        });
    });
};

// Datos generales
onUpdateField('title', (event) => {
    const value = event.target.value;

    newProperty = {
        ...newProperty,
        title: value,
    }
});

onUpdateField('notes', (event) => {
    const value = event.target.value;

    newProperty = {
        ...newProperty,
        notes: value,
    }
});

onUpdateField('email', (event) => {
    const value = event.target.value;

    newProperty = {
        ...newProperty,
        email: value,
    }
});

onUpdateField('phone', (event) => {
    const value = event.target.value;

    newProperty = {
        ...newProperty,
        phone: value,
    }
});

onUpdateField('price', (event) => {
    const value = event.target.value;

    newProperty = {
        ...newProperty,
        price: value,
    }
});

// Datos vivienda
onUpdateField('address', (event) => {
    const value = event.target.value;

    newProperty = {
        ...newProperty,
        address: value,
    }
});

onUpdateField('city', (event) => {
    const value = event.target.value;

    newProperty = {
        ...newProperty,
        city: value,
    }
});

onUpdateField('province', (event) => {
    const value = event.target.value;

    newProperty = {
        ...newProperty,
        province: value,
    }
});

onUpdateField('squareMeter', (event) => {
    const value = event.target.value;

    newProperty = {
        ...newProperty,
        squareMeter: value,
    }
});

onUpdateField('rooms', (event) => {
    const value = event.target.value;

    newProperty = {
        ...newProperty,
        rooms: value,
    }
});

onUpdateField('bathrooms', (event) => {
    const value = event.target.value;

    newProperty = {
        ...newProperty,
        bathrooms: value,
    }
});

onUpdateField('locationUrl', (event) => {
    const value = event.target.value;

    newProperty = {
        ...newProperty,
        locationUrl: value,
    }
});

// Insert features
onSubmitForm('insert-feature-button', () => {
    const value = document.getElementById('newFeature').value;

    if (value) {
        newProperty = addElement(value, newProperty, 'mainFeatures');

        onAddFeature(value);

        const buttonId = formatDeleteFeatureButtonId(value);

        onSubmitForm(buttonId, () => {
            onRemoveFeature(value);
            newProperty = removeElement(value, newProperty, 'mainFeatures');
        });
    };
});

// Imágenes
onAddFile('add-image', image => {
    onAddImage(image);

    newProperty = {
        ...newProperty,
        images: [...newProperty.images, image],
    };
});

onSubmitForm('save-button', () => {
    console.log(newProperty);
});