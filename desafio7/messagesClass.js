class Message {
    constructor (sqLiteConfig, table){
        this.KnexMessages = require("knex")(sqLiteConfig);
        this.table = table;
    }

    //* crear mensaje
    async save(mensaje) {
        try {
            return await this.KnexMessages.insert(mensaje).into(this.table)
        } catch (e) {
            console.log(e);
        }
    }

    //* ver mensajes
    async getAll(){
        try {
            return this.KnexMessages.select("*").from(this.table)
        } catch (e){
            console.log(e);
        }
    }
}

module.exports = Message;