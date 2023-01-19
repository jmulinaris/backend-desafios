import * as dotenv from "dotenv";
dotenv.config();
const TIPO = process.env.TIPO;

import ProductosDaoMongoDB from "./ProductosDaoMongoDB.js";
import CarritosDaoMongoDB from "./CarritosDaoMongoDB.js";

let ProductosDao;
let CarritosDao;

switch (TIPO) {
    case "mongoDB":
        ProductosDao = new ProductosDaoMongoDB();
        CarritosDao = new CarritosDaoMongoDB();
    break;
}

export { ProductosDao };

export { CarritosDao };
