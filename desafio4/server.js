const express = require ("express");
const app =  express();
const {Router} = express;
const productsRouter = require("./products")

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"))

app.listen(8080, () =>{
    console.log("Servidor iniciado")
})

app.use("/api/productos", productsRouter);

module.exports = Router;