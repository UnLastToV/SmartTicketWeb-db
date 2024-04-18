const db = require('../model');
const Report = db.report;
const Police = db.police;
const User = db.user;

exports.findAll = (req, res) => {
    try {
        Report.findAll({
            attributes: ["id", "date"],
            include:
                [
                    {
                        model: Police,
                        attributes: ["policeID", "name", "lastname", "position"]
                    },
                    {
                        model: User,
                        attributes: ["peopleID", "name", "lastname", "age", "address"]
                    }
                ]
        })
            .then(report => {
                res.send(report);
            })
            .catch(error => {
                console.log(error.massage);
            });
    } catch (error) {
        console.log(error);
    }
};

// create function
exports.create = (req, res) => {
    try {
        if (!req.body.id | !req.body.date) {
            res.status(400).json({ massage: "Cannot Empty!" });
            return;
        }

        const reportObj = {
            id: req.body.id,
            date: req.body.date
        }
        Report.create(reportObj)
            .then((data) => {
                //  Insert some table
                res.status(200).json({ massage: "Report created!" })
            })
            .catch(error => {
                res.status(500).json({ massage: "Error!..." })
            })

    } catch (error) {
        console.send.status(500)
    }
};

// findOne function
exports.findOne = (req, res) => {
    try {
        const id = req.params.id
        Report.findByPk(id, {
            include: [
                {
                    model: User,
                    attributes: ["peopleID", "name", "lastname"]
                }
            ]
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(error => {
                res.status(400).json({ massage: error.massage });
            })

    } catch (error) {
        console.log(error.massage);
    }
};

// update function
exports.update = (req, res) => {
    try {
        const id = req.params.id;
        const reportObj = {
            reportID: req.body.reportID,
            date: req.body.date
        }

        Report.update(reportObj, {
            where: { id, id },
        })
            .then(data => {
                if (data == 1) {
                    res.status(200).json({ massage: "Update Success..!" })
                }
                res.status(200).json(data);
            })
    } catch (error) {
        res.status(500).json({ massage: error.massage });
    }
};

// delete function
exports.delete = (req, res) => {
    try {
        Report.destroy({ where: { id: req.params.id } })
            .then(data => {
                res.send(data);
            })
            .catch(error => {
                res.status(400).json({ massage: error.massage });
            })
    } catch (error) {
        res.status(500).json({ massage: error.massage });
    }
};