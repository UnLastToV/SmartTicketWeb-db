module.exports = (app) => {
    const driveCard = require('../controllers/user.controller')

    const router = require('express').Router();

    // Crud function
    router.get("/", driveCard.findAll);
    router.post("/create-user", driveCard.create);
    router.get("/edit-user-data/:cardID", driveCard.findOne);
    router.put("/update-user/:cardID", driveCard.update);
    router.delete("/delete-user-data/:cardID", driveCard.delete)


    app.use("/drive-cards", router);
};