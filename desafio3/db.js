const fs  = require ("fs");

class Contenedor {
    constructor (file){
        this.file = file;
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
}

async function start (){
    const contenedor = new Contenedor("products.txt")
    console.log(await contenedor.save({title:"lapiz", price: 50}))
    console.log(await contenedor.getAll());
}

module.exports = Contenedor;