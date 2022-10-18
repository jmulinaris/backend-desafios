const express = require("express")
const { Server: HTTPServer } = require ("http")
const { Server: IOServer } = require ("socket.io")

const Api = require("./api")
const product = new Api();

const ApiMsj = require("./apiMensajes")
const mensajesApi = new ApiMsj("./mensajes.json");

const app = express()
const httpServer = new HTTPServer(app)
const io = new IOServer(httpServer)

app.use(express.static("public"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

io.on("connection", async socket => {
    console.log("Usuario conectado")
    const products = product.getAll()
    socket.emit("productos", products)

    socket.on("new-product", data =>{
        product.save(data);
        const products = product.getAll()
        io.sockets.emit("productos", products)
    })

    messages = await mensajesApi.getAll()
    socket.emit("mensajes", messages)

    socket.on("new-msg", async data =>{
        data.date = new Date().toLocaleString()
        mensajes = await mensajesApi.save(data)
        io.sockets.emit("mensajes", mensajes)
    })
})

httpServer.listen(8080, () =>{
    console.log("Conectado!")
})