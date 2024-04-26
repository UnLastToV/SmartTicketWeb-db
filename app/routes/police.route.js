module.exports = (app) => {
    const police = require('../controllers/police.controller')

    const router = require('express').Router();

    // Crud function
    router.get("/", police.findAll);
    router.post("/police-create", police.create);
    router.get("/find-police/:id", police.findOne);
    router.put("/update-police/:id", police.update);
    router.delete("/delete-police-data/:id", police.delete)


    app.use("/polices", router);
};