const express = require("express")
const handlebars = require("express-handlebars");
const app = express();

const Api = require("./api")
const product = new Api();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.engine(
    "hbs",
    handlebars.engine({
        extname: "hbs",
        layoutsDir: __dirname + "/views/layouts",
        partialsDir: __dirname + "/views/partials",
        defaultLayout: "index",
    })
);

app.set("views", "./views");
app.set("view engine", "hbs")

app.get("/", (req, res) =>{
    res.render("index", { layout: "formulario" });
})

app.get("/productos", (req, res) =>{
    const products = product.getAll();
    res.render("index", {
    layout: "productos",
    products: products,
    });
});

app.post("/productos", (req,res) =>{
    const {title, price, thumbnail} = req.body;
    product.save(title, price, thumbnail);
    res.redirect("/");
})

const server = app.listen(8080, () => {
	console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on('error', (error) => console.log(`Error en servidor ${error}`));