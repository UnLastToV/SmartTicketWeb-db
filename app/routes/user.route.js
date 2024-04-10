module.exports = (app) => {
    const user = require('../controllers/user.controller')

    const router = require('express').Router();

    // Crud function
    router.get("/", user.findAll);
    router.post("/create-user", user.create);
    router.get("/edit-user-data", user.findOne);
    router.put("/update-user", user.update);
    router.delete("delete-user-data", user.delete);


    app.use("/users", router);
};