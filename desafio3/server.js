const express = require ("express")
const db = require("./db")
const app = express();

const DB = new db ("products.txt")

const getRandom = () => {
    min = Math.ceil(1);
    max = Math.floor(3);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

app.get("/", (req, res) =>{
    res.send({error: false})
})

app.get("/productos", async (req, res) =>{
    const data = await DB.getAll()
    res.send(data);
})

app.get("/productoRandom", async (req, res) => {
    try {
    idRandom = getRandom();
    proRandom = await DB.getById(idRandom);
    return res.send(proRandom);
    } catch (error) {
    res.send({ error: true });
    }
});

app.listen(8080, ()=>{
    console.log("Iniciado")
})