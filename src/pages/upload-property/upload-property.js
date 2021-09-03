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
import { formValidation } from './upload-property.validations';

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
    id: '',
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

           formValidation.validateField('saleTypes', newProperty.saleTypes).then(result => {
                onSetError('saleTypes', result);
            });
        });
    });
};

// Datos generales
onUpdateField('title', (event) => {
    const value = event.target.value;

    newProperty = {
        ...newProperty,
        title: value,
    };

    formValidation.validateField('title', newProperty.title).then(result => {
        onSetError('title', result);
    });
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
    };

    formValidation.validateField('email', newProperty.email).then(result => {
        onSetError('email', result);
    });
});

onUpdateField('phone', (event) => {
    const value = event.target.value;

    newProperty = {
        ...newProperty,
        phone: value,
    };

    formValidation.validateField('phone', newProperty.phone).then(result => {
        onSetError('phone', result);
    });
});

onUpdateField('price', (event) => {
    const value = event.target.value;

    newProperty = {
        ...newProperty,
        price: value,
    };

    formValidation.validateField('price', newProperty.price).then(result => {
        onSetError('price', result);
    });
});

// Datos vivienda
onUpdateField('address', (event) => {
    const value = event.target.value;

    newProperty = {
        ...newProperty,
        address: value,
    };

    formValidation.validateField('address', newProperty.address).then(result => {
        onSetError('address', result);
    });
});

onUpdateField('city', (event) => {
    const value = event.target.value;

    newProperty = {
        ...newProperty,
        city: value,
    };

    formValidation.validateField('city', newProperty.city).then(result => {
        onSetError('city', result);
    });
});

onUpdateField('province', (event) => {
    const value = event.target.value;

    newProperty = {
        ...newProperty,
        province: value,
    };

    formValidation.validateField('province', newProperty.province).then(result => {
        onSetError('province', result);
    });
});

onUpdateField('squareMeter', (event) => {
    const value = event.target.value;

    newProperty = {
        ...newProperty,
        squareMeter: value,
    };

    formValidation.validateField('squareMeter', newProperty.squareMeter).then(result => {
        onSetError('squareMeter', result);
    });
});

onUpdateField('rooms', (event) => {
    const value = event.target.value;

    newProperty = {
        ...newProperty,
        rooms: value,
    };

    formValidation.validateField('rooms', newProperty.rooms).then(result => {
        onSetError('rooms', result);
    });
});

onUpdateField('bathrooms', (event) => {
    const value = event.target.value;

    newProperty = {
        ...newProperty,
        bathrooms: value,
    };

    formValidation.validateField('bathrooms', newProperty.bathrooms).then(result => {
        onSetError('bathrooms', result);
    });
});

onUpdateField('locationUrl', (event) => {
    const value = event.target.value;

    newProperty = {
        ...newProperty,
        locationUrl: value,
    };

    formValidation.validateField('locationUrl', newProperty.locationUrl).then(result => {
        onSetError('locationUrl', result);
    });
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
    formValidation.validateForm(newProperty).then(result => {
        onSetFormErrors(result);

        const mappedProperty = mapPropertyFromVMToApi(newProperty);

        console.log(mappedProperty);

        if (result.succeeded) {
            saveProperty(mappedProperty).then(() => {
                history.back();
                alert('Nueva propiedad subida con éxito');
            });
        } else {
            alert('Ocurrió un error al subir la propiedad');
        }
    });
});