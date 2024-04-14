module.exports = (app) => {
    const police = require('../controllers/police.controller')

    const router = require('express').Router();

    // Crud function
    router.get("/", police.findAll);
    router.post("/police-user", police.create);
    router.get("/edit-police-data", police.findOne);
    router.put("/update-police", police.update);
    router.delete("delete-police-data",police.delete)


    app.use("/polices", router);
};