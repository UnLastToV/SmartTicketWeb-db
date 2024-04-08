module.exports = (app) => {
    const user = require('../controllers/user.controller')

    const router = require('express').Router();

    // Crud function
    router.get("/", user.findAll);


    app.use("/users", router);
};