const express = require("express")
const app = express();

const Api = require("./api")
const product = new Api();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set("views", "./views");
app.set("view engine", "ejs")

app.get("/", (req, res) =>{
    res.render("pages/index");
})

app.get("/productos", (req, res) =>{
    const products = product.getAll();
    res.render("pages/productos", {products});
})

app.post("/productos", (req,res) =>{
    const {title, price, thumbnail} = req.body;
    product.save(title, price, thumbnail);
    res.redirect("/");
})

const server = app.listen(8080, () => {
	console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on('error', (error) => console.log(`Error en servidor ${error}`));