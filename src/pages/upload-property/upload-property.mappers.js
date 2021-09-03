export const mapPropertyFromVMToApi = property => {
    return {
        ...property,
        price: parseInt(property.price),
        saleTypesId: Array.isArray(property.saleTypes) ? property.saleTypes : '',
        squareMeter: parseInt(property.squareMeter),
        rooms: parseInt(property.rooms),
        bathrooms: parseInt(property.bathrooms),
        mainFeatures: Array.isArray(property.mainFeatures) ? property.mainFeatures : '',
        equipmentsIds: Array.isArray(property.equipments) ? property.equipments : '',
        images: Array.isArray(property.images) ? property.images : '',
    };
};