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