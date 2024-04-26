module.exports = (app) => {
    const vehicle = require('../controllers/vehicle.controller')

    const router = require('express').Router();

    // Crud function
    router.get("/", vehicle.findAll);
    router.post("/add-vehicle", vehicle.create);
    router.get("/find-vehicle/:id", vehicle.findOne);
    router.put("/update-vehicle/:id", vehicle.update);
    router.delete("/delete-vehicle-data/:id", vehicle.delete)


    app.use("/vehicles", router);
};