module.exports = (app) => {
    const user = require('../controllers/user.controllers')

    const router = require('express').Router();

    // API
    router.get("/", user.findAll);


    app.use("/users", router);
}