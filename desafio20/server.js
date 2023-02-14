import Koa from "koa";
import { koaBody } from "koa-body";
import router from "./routes/productos.js";

const app = new Koa();

app.use(koaBody());
app.use(router.routes());

app.listen(8080);