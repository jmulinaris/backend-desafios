import Router from "koa-router";
import ProductosDaoMongoDB from "../daos/ProductosDaoMongoDB.js";

const products = new ProductosDaoMongoDB;

const router = new Router({
    prefix: "/api/productos"
});

//* Traer todos los productos
router.get("/", async (ctx) => {
    try {
        const productos = await products.getAll();
        ctx.body = productos;
    } catch (e) {
        console.log(e)
    }
});

//* Traer por ID
router.get("/:id", async (ctx) => {
    try {
        const id = ctx.params.id;
        let found = await products.getById(id);
        if (found) {
            ctx.body = found;
        } else {
            ctx.body = "No existe el ID ingresado"
        }
    } catch (e){
        console.log(e)
    }
});

//* Crear nuevo producto
router.post("/", async (ctx) => {
    try {
        const producto = ctx.request.body;
        const newProd = await products.save(producto)
        ctx.body = newProd;
    } catch (e) {
        console.log(e)
    };
});

//* Actualizar por ID
router.put("/:id", async (ctx) => {
    try {
        const id = ctx.params.id;
        const producto = ctx.request.body;
        const found = await products.updateById(id, producto)
        if (found) {
            ctx.body = found
        } else {
            ctx.body = "No existe el ID ingresado, no se puede actualizar"
        }
    } catch (e) {
        console.log(e)
    }
});

//* Eliminar un producto
router.delete("/:id", async (ctx) => {
    try {
        const id = ctx.params.id;
        let found = await products.deleteById(id);
        if (found) {
            ctx.body = "Se eliminó el producto"
        } else {
            ctx.body = "Producto no encontrado"
        }
    } catch (e){
        console.log(e)
    }
})

export default router;