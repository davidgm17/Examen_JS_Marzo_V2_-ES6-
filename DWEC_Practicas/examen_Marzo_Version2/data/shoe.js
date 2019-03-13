export class ShoeDTO {

    constructor(object) {
        this.model = object.model;
        this.colour = object.model;
        this.code = object.model;
        this.avaliable = object.avaliable;
        this.price = object.price;
    }


    jsonToShoeDTO() {
        console.log('Te voy a parsear');

    }
};