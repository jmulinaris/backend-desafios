import ProductosDaoMongoDB from "../daos/ProductosDaoMongoDB.js";

const products = new ProductosDaoMongoDB;

export const getAll = async () => {
    try {
        const productos = await products.getAll();
        return productos;
    } catch (e) {
        console.log(e)
    }
};

export const getById = async ({ id }) => {
    try {
        const found = await products.getById(id);
        if (found) {
            return found;
        } else {
            console.log("Producto no encontrado");
        } 
    } catch (e) {
        console.log(e)
    }
};

export const saveProduct = async ({ data }) => {
    try {
        const newProd = await products.save(data);
        return newProd;
    } catch (e) {
        console.log(e)
    }
};

export const updateProduct = async ({ id, data }) => {
    try {
        const product = await products.updateById(id, data);
        if (product) {
            return product;
        } else {
        console.log("Producto no encontrado");
        }
    } catch (e) {
        console.log(e);
    }
};

export const deleteProduct = async ({ id }) => {
    try {
        const deleteProduct = await products.deleteById(id);
        return deleteProduct;
    } catch (e) {
        console.log(e)
    }
};
