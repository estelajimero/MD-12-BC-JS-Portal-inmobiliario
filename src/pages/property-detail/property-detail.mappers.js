export const mapPropertyFromApiToVM = (property, equipmentsList) => {
    return {
        mainImage: Array.isArray(property.images) ? property.images[0] : [],
        title: property.title,
        city: property.city,
        rooms: `${property.rooms} ${getRoomWord(property.rooms)}`,
        squareMeter: `${property.squareMeter} m2`,
        price: `${property.price.toLocaleString()}€`,
        bathrooms: `${property.bathrooms} ${getBathroomWord(property.bathrooms)}`,
        notes: property.notes,
        address: property.address,
        mainFeatures: property.mainFeatures,
        equipments: getEquipments(property, equipmentsList),
        locationUrl: property.locationUrl,
        images: Array.isArray(property.images) ? property.images : [],
    }
};

const getRoomWord = rooms => rooms > 1 ? 'habitaciones' : 'habitación';

const getBathroomWord = bathrooms => bathrooms > 1 ? 'baños' : 'baño';

const getEquipments = (property, equipmentsList) => {  
    const equipments = property.equipmentIds.map(obj => {   
      return equipmentsList.find(element => element.id === obj).name; 
    });

    return equipments;
};
