class Message {
    constructor (sqLiteConfig, table){
        this.KnexMessages = require("knex")(sqLiteConfig);
        this.table = table;
    }

    //* crear mensaje
    async save(autor, texto, date) {
        try {
            return await this.KnexMessages.insert(autor, texto, date).into(this.table)
        } catch (e) {
            console.log(e);
        }
    }

    //* ver mensajes
    async getAll(){
        try {
            return await this.KnexMessages.select("*").from(this.table)
        } catch (e){
            console.log(e);
        }
    }
}

module.exports = Message;