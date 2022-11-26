import { Router } from "express";
import { fork } from "child_process"

const randomNumRouter = new Router ();

const forked = fork("./scripts/getRandomNum.js");

randomNumRouter.get("/", (req, res) =>{
    const { cant } = req.query;
    let cantEnv;
    if (cant) {
        cantEnv = cant;
    } else {
        cantEnv = 20;
    }
    forked.on("message", (randoms) => {
        res.send({ "Números random": randoms });
    });
    forked.send(cantEnv);
});

export default randomNumRouter; 