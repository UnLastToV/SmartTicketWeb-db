const db = require('../model/index');
const Report = db.report;
const Police = db.police;
const User = db.user;

exports.findAll = (req, res) => {
    try {
        Report.findAll({
            attributes: ["id", "addDate", "outDate"],
            include:
                [
                    {
                        model: Police,
                        attributes: ["policeID", "name", "lastname", "position"]
                    },
                    {
                        model: User,
                        attributes: ["peopleID", "name", "lastname", "age", "address", "phoneNumber"]
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
        if (!req.body.id | !req.body.addDate | !req.body.outDate) {
            res.status(400).json({ massage: "Cannot Empty!" });
            return;
        }

        const reportObj = {
            id: req.body.id,
            addDate: req.body.addDate,
            outDate: req.body.outDate
        }
        Report.create(reportObj)
            .then((data) => {
                //  CAN Insert some table here
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
            // include:
            //     [
            //         {
            //             model: Police,
            //             attributes: ["policeID", "name", "lastname", "position"]
            //         },
            //         {
            //             model: User,
            //             attributes: ["peopleID", "name", "lastname", "age", "address", "phoneNumber"]
            //         }
            //     ]
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
            outDate: req.body.outDate
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