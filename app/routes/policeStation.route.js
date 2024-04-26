module.exports = (app) => {
    const policeSatation = require('../controllers/policeStation.controller')

    const router = require('express').Router();

    // Crud function
    router.get("/", policeSatation.findAll);
    router.post("/station-create", policeSatation.create);
    router.get("/find-station/:id", policeSatation.findOne);
    router.put("/update-station/:id", policeSatation.update);
    router.delete("/delete-station-data/:id", policeSatation.delete)


    app.use("/stations", router);
};