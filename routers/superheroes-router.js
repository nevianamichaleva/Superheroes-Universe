/* globals module require */

const express = require("express");
let Router = express.Router;



module.exports = function({ app, data }) {

    let controller = require("../controllers/superheroes-controller")(data);

    let router = new Router();

    router
        .get("/newest", controller.getNewestSuperheroesAjax)
        .get("/", controller.getSuperheroes)
        .get("/create", controller.getCreateSuperheroForm)
        .get("/:id", controller.getSuperheroDetails)
        .post("/", controller.createSuperhero)
        .post("/update", controller.updateSuperhero);

    app.use("/superheroes", router);

    return router;
};