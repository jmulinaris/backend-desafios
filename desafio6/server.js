const express = require("express")
const fs = require("express")
const { Server: HTTPServer } = require ("http")
const { Server: SocketServer } = require ("socket.io")

const Api = require("./api")
const product = new Api();

const ApiMsj = require("./apiMensajes")
const mensajesApi = new ApiMsj("./mensajes.json");

const app = express()
const httpServer = new HTTPServer(app)
const io = new SocketServer(httpServer)

app.use(express.static("public"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

io.on("connection", async socket => {
    console.log("Usuario conectado")
    const products = product.getAll()
    socket.emit("productos", products)

    socket.on("new-product", data =>{
        product.save(data.title, data.price, data.thumbnail);
        io.sockets.emit("productos", products)
    })

    const mensajes = await mensajesApi.getAll()
    socket.emit("mensajes", mensajes)

    socket.on("new-msg", async mensaje =>{
        mensaje.date = new Date().toLocaleString()
        await mensajesApi.save(mensaje)
        io.sockets.emit("mensajes", mensajes)
    })
})

httpServer.listen(8080, () =>{
    console.log("Conectado!")
})