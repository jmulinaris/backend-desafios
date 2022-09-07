const express = require("express");

const {Router} = express;

const router = Router();

const Api = require("./api")
const product = new Api();

router.get("/", (req, res) =>{
    res.send(product.getAll());
})

router.get("/:id", (req,res) =>{
    const {id} = req.params;
    let found = product.getById(id);
    if (found){
        res.send(found)
    } else {
        res.send({error:"producto no encontrado"})
    }
})

router.post("/", (req, res) =>{
    const {title, price} = req.body;
    const id = product.save(title, price);
    res.send("El ID del nuevo producto agregado es " + id)
})

router.put("/:id", (req, res) =>{
    const {id} = req.params;
    const {title, price} = req.body;
    const found = product.updateById(id, title, price);
    if (found) {
        res.send(`Se reemplazó el producto con ID ${id} por ${title}`)
    } else {
        res.send({error: "producto no encontrado"})
    }
})

router.delete("/:id", (req, res) =>{
    const {id} = req.params;
    const found = product.deleteById(id);
    if (found) {
        res.send(`Se eliminó el producto con ID ${id}`)
    } else {
        res.send({error: "producto no encontrado"})
    }
})

module.exports = router;