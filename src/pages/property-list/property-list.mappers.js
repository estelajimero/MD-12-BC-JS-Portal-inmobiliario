/**
 * interface Property {
    *     id: string;
    *     title: string;
    *     rooms: string; // number + 'habitaciones'
    *     squareMeter: string; // number + metros cuadrados
    *     notes: string; // truncar a 240 caracteres
    *     price: string; // number + €
    *     image: string; // 1ª imagen del array de imágenes en base64
 * }
 */

const mapPropertyFromApiToVM = property => {
    return {
        id: property.id,
        title: property.title,
        rooms: `${property.rooms} ${getRoomWord(property.rooms)}`,
        squareMeter: `${property.squareMeter}m2`,
        notes: `${property.notes.substring(0, 240)}...`,
        price: `${property.price.toLocaleString()}€`,
        image: Array.isArray(property.images) ? property.images[0] : '',
    }
}

export const mapPropertyListFromApiToVM = propertyList => {
    return propertyList.map(property => mapPropertyFromApiToVM(property));
};

const getRoomWord = rooms => rooms > 1 ? 'habitaciones' : 'habitación';

export const mapFilterToQueryParams = filter => {
    let queryParams = '';

    if(filter.saleTypeId) {
        queryParams = `${queryParams}saleTypeIds_like=${filter.saleTypeId}&`;
    }

    if(filter.provinceId) {
        queryParams = `${queryParams}provinceId=${filter.provinceId}&`;
    }

    if(filter.minRooms) {
        queryParams = `${queryParams}rooms_gte=${filter.minRooms}&`; // usamos el & para añadir más parámetros
    } 

    if(filter.minBathRooms) {
        queryParams = `${queryParams}bathrooms_gte${filter.minBathRooms}&`; 
    }
    
    if(filter.minPrice) {
        queryParams = `${queryParams}price_gte${filter.minPrice}&`; 
    }

    if(filter.maxPrice) {
        queryParams = `${queryParams}price_lte${filter.maxPrice}&`; 
    }

    return queryParams.slice(0, -1);
};