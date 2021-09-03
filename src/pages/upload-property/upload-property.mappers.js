export const mapPropertyFromVMToApi = property => {
    return {
        title: property.title,
        notes: property.notes,
        email: property.email,
        phone: property.phone,
        price: parseInt(property.price),
        saleTypesId: Array.isArray(property.saleTypes) ? property.saleTypes : '',
        address: property.address,
        city: property.city,
        province: property.province,
        squareMeter: parseInt(property.squareMeter),
        rooms: parseInt(property.rooms),
        bathrooms: parseInt(property.bathrooms),
        locationUrl: property.locationUrl,
        mainFeatures: Array.isArray(property.mainFeatures) ? property.mainFeatures : '',
        equipmentsIds: Array.isArray(property.equipments) ? property.equipments : '',
        images: Array.isArray(property.images) ? property.images : '',
    };
};