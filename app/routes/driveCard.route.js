module.exports = (app) => {
    const driveCard = require('../controllers/user.controller')

    const router = require('express').Router();

    // Crud function
    router.get("/", driveCard.findAll);
    router.post("/create-user", driveCard.create);
    router.get("/edit-user-data/:id", driveCard.findOne);
    router.put("/update-user/:id", driveCard.update);
    router.delete("/delete-user-data/:id", driveCard.delete)


    app.use("/drive-cards", router);
};