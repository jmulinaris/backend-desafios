import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schemas/schema.js";
import { getAll, getById, saveProduct, updateProduct, deleteProduct } from "./resolvers/resolverProductos.js";

const app = express();

app.use("/graphql", graphqlHTTP ({
    schema: schema,

    rootValue: {
        getAll,
        getById,
        saveProduct,
        updateProduct,
        deleteProduct
    },

    graphiql: true,
    })
);

app.listen(8080, () => {
    console.log("Escuchando en puerto 8080")
});