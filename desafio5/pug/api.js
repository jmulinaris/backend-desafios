class Api {
    constructor() {
        this.products = [];
    }

    getAll () {
        return this.products;
    }

    save (title, price, thumbnail){
        const id = this.products.length + 1;
        const newProduct = {
            id:`${id}`,
            title,
            price,
            thumbnail,
        }
        this.products.push(newProduct);
        return newProduct.id;
    }
}


module.exports = Api;