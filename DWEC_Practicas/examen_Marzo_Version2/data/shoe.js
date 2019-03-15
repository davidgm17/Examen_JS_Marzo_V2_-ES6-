export class ShoeDTO {

    constructor(object) {
        for (const propiedad in object) {
            this[propiedad] = object[propiedad];
        }

    }

};