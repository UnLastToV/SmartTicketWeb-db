module.exports = (app) => {
    const user = require('../controllers/user.controller')

    const router = require('express').Router();

    // Crud function
    router.get("/", user.findAll);
    router.post("/create-user", user.create);
    router.get("/find-user/:id", user.findOne);
    router.put("/update-user/:id", user.update);
    router.delete("/delete-user-data/:id", user.delete)


    app.use("/users", router);
};