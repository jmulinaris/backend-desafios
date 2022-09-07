// const express = require("express");

class Api {
    constructor() {
        this.products = [];
    }

    getAll () {
        return this.products;
    }

    getById (id){
        let product = this.products.find((product) => product.id === id);
        if (!product) {
        product = null;
        }
        return product;
    }

    save (title, price){
        const id = this.products.length + 1;
        const newProduct = {
            id:`${id}`,
            title,
            price
        }
        this.products.push(newProduct);
        return newProduct.id;
    }

    updateById (id, title, price){
        let product = this.products.find((product) => product.id === id);
        const newProduct = {
            id,
            title,
            price
        }
        if (!product){
            product = null;
        } else {
            this.products = this.products.filter ((product) => product.id != id);
            this.products.push(newProduct);
        }
        return product;
    }

    deleteById (id){
        let found = this.products.find((product) => product.id === id)
        if (!found) {
            found = null;
        } else {
            this.products = this.products.filter ((product) => product.id != id);
        }
        return found;
    }
}


module.exports = Api;