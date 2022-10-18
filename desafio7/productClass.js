class Product {
    constructor(connection, table) {
        this.KnexProducts = require("knex")(connection);
        this.table = table;
    }

    async getAll () {
        try {
            return this.KnexProducts.select("*").from(this.table)
        }
        catch (e) {
            console.log(e);
        }
    }

    async save (producto){
        try {
            return await this.KnexProducts.insert(producto).into(this.table)
        } catch (e) {
            console.log(e);
        }
    }
}


module.exports = Product;