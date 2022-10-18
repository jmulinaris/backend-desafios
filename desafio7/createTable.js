const { connection } = require("./configMySql");
const KnexMySql = require("knex")(connection);

const { sqLiteConfig } = require("./configSqLite.js");
const KnexSqLite = require("knex")(sqLiteConfig);

KnexMySql.schema
    .createTable("productos", (table) => {
        table.increments("id")
        table.string("title")
        table.integer("price")
        table.string("thumbnail")
    }).then (() =>{
        console.log("Tabla de productos creada!")
    }).catch (e => console.log(e))
    .finally(()=> KnexMySql.destroy());

KnexSqLite.schema
    .createTable("mensajes", (tableMsj) => {
        tableMsj.increments("id")
        tableMsj.string("autor")
        tableMsj.string("date")
        tableMsj.string("texto")
    }).then (() =>{
        console.log("Tabla de mensajes creada!")
    }).catch (e => console.log(e))
    .finally(()=> KnexMySql.destroy());