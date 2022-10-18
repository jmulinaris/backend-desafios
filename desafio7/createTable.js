const { connection } = require("./configMySql");
const KnexMySql = require("knex")(connection);

const { sqLiteConfig } = require("./configSqLite.js");
const KnexSqLite = require("knex")(sqLiteConfig);

KnexMySql.schema
    .createTable("productos", (table) => {
        table.increments("id")
        table.string("nombre")
        table.integer("precio")
        table.string("imagen")
    }).then (() =>{
        console.log("Tabla creada!")
    }).catch (e => console.log(e))
    .finally(()=> KnexMySql.destroy());

KnexSqLite.schema
    .createTable("mensajes", (table) => {
        table.string("mensaje")
    }).then (() =>{
        console.log("Tabla creada!")
    }).catch (e => console.log(e))
    .finally(()=> KnexMySql.destroy());