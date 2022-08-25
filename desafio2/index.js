const fs  = require ("fs");

class Contenedor {
    constructor (file){
        this.file = file;
    }

    //* crear producto
    async save(product) {
        try {
            const data = await fs.promises.readFile(this.file, "utf-8");
            const products = JSON.parse(data);
            const id = products.length + 1;
            product.id = id;
            products.push(product);
            const productsString = JSON.stringify(products);
            await fs.promises.writeFile(this.file, productsString);
            return `Se agregó el producto ${product.title} con el ID: ${id}`
        } catch (e) {
            console.log(e);
        }
    }

    //* obtener por ID
    async getById(id){
        try {
            const data = await fs.promises.readFile(this.file, "utf-8");
            const products = JSON.parse(data);
            const product = products.find((product) => product.id == id);
            if (product){
                return product;
            } else {
                return "Producto no encontrado";
            }
        } catch (e){
            console.log(e);
        }
    }

    //* obtener todos
    async getAll(){
        try {
            const data = await fs.promises.readFile(this.file, "utf-8");
            const products = JSON.parse(data);
            return products;
        } catch (e){
            console.log(e);
        }
    }

    //* borrar por ID
    async deleteById(id){
        try {
            const data = await fs.promises.readFile(this.file, "utf-8");
            const products = JSON.parse(data);
            const found = products.find((product) => parseInt(product.id) === id)
            if (!found) {
                return "El ID ingresado no existe"
            } else {
                const filterProduct = products.filter ((product) => product.id != id);
                const stringProduct = JSON.stringify(filterProduct);
                await fs.promises.writeFile(this.file, stringProduct);
                return `Se eliminó el producto con el ID ${id}`
            }
        } catch (e){
            console.log(e);
        }
    }

    //* borrar todo
    async deleteAll(){
        try {
            const data = await fs.promises.readFile(this.file, "utf-8");
            const products = JSON.parse(data);
            if (products.length > 0) {
                await fs.promises.writeFile(this.file, "[]");
                return "Se vació el archivo";
            } else {
                return "El archivo ya está vacío";
            }
        } catch (e){
            console.log(e);
        }
    }
}

async function start (){
    const contenedor = new Contenedor("products.txt")
    console.log(await contenedor.save({title:"lapiz", price: 50}))
    console.log(await contenedor.getAll());
    console.log(await contenedor.getById(10));
    console.log(await contenedor.deleteById(1));
    console.log(await contenedor.deleteAll());
}

start ();