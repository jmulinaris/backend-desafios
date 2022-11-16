import { Router } from "express";
const homeRouter = new Router;


homeRouter.get("/", (req, res) => {
    const nombre = req.session?.nombre;
    if (nombre) {
        res.render("pages/home.ejs", { nombre });
    } else {
        res.redirect("/login");
    }
});

homeRouter.get("/login", (req, res) => {
    const nombre = req.session?.nombre;
    if (nombre) {
        res.redirect("/");
    } else {
        res.render("pages/login");
    }
});

homeRouter.get("/logout", (req, res) => {
    const nombre = req.session?.nombre;
    if (nombre) {
    req.session.destroy((err) => {
        if (!err) {
            res.render("pages/logout.ejs", { nombre });
        } else {
            res.redirect("/");
        }
    });
        } else {
        res.redirect("/");
    }
});

homeRouter.post("/login", (req, res) => {
    req.session.nombre = req.body.nombre;
    res.redirect("/");
});

export default homeRouter;