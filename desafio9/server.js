const express = require("express")
const { Server: HTTPServer } = require ("http")
const { Server: IOServer } = require ("socket.io")
const { faker } = require ("@faker-js/faker");

const normalizr = require("normalizr")
const normalize = normalizr.normalize;
const schema = normalizr.schema;

const app = express()
const httpServer = new HTTPServer(app)
const io = new IOServer(httpServer)

const { Message } = require("./apiMensajes")
const usersMessages = new Message("./mensajes.json");

app.use(express.static("public"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//* GENERACIÓN DE LISTA DE PRODUCTOS
const {commerce, image} = faker;

let listaProd = [];

const genProduct = () =>{
    return {
        title:commerce.productName(),
        price: commerce.price(),
        thumbnail: image.business(640, 480, true),
    };
}

app.get("/api/productos-test", (req, res) => {
    for (let i = 1; i <= 5; i++){
        listaProd.push({id: listaProd.length + 1, ...genProduct()});
    }
    res.send(listaProd);
    listaProd = [];
})


io.on("connection", async (socket) => {
    console.log("Usuario conectado")
    
    //* CHAT
    messages = await usersMessages.getAll()
    //* Normalización
    const authorSchema = new schema.Entity("authors",{}, {idAttribute: "email"});
    const postSchema = new schema.Entity("post", { author: authorSchema });
    const postsSchema = new schema.Entity("posts", { mensajes: [postSchema] })
    const normMessages = normalize(messages, postsSchema)

    //*EMISIÓN
    socket.emit("mensajes", normMessages);

    //*RECEPCIÓN
    socket.on("newMensaje", async (data) =>{
        const date = new Date().toLocaleString();
        await usersMessages.save(
            date,
            data.text,
            data.email,
            data.lastName,
            data.age,
            data.alias,
            data.avatar
        );

        messages = await usersMessages.getAll();

        //*Normalización
        const authorSchema = new schema.Entity("authors",{}, {idAttribute: "email"});
        const postSchema = new schema.Entity("post", { author: authorSchema });
        const postsSchema = new schema.Entity("posts", { mensajes: [postSchema] })
        const normMessages = normalize(messages, postsSchema)
        
        //*Post emisión
        io.sockets.emit("mensajes", normMessages);
    })
})

const PORT = 8080;
const server = httpServer.listen(PORT, () =>{
    console.log(`Servidor conectado, escuchando el puerto ${server.address().port}`);
});

server.on("error", (error) => {
    console.log(`Error en el servidor: ${error}`);
});