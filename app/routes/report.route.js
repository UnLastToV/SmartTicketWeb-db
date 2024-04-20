module.exports = (app) => {
    const report = require('../controllers/report.controller')

    const router = require('express').Router();

    // Crud function
    router.get("/", report.findAll);
    router.post("/create-report", report.create);
    router.get("/edit-report-data/:id", report.findOne);
    router.put("/update-report/:id", report.update);
    router.delete("delete-report-data/:id", report.delete)


    app.use("/reports", router);
};