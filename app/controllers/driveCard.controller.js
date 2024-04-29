const db = require('../model');
const DriveCard = db.driveCard;
const User = db.user;

exports.findAll = (req, res) => {
    try {
        DriveCard.findAll({
            attributes: ["cardID", "issueDate", "expiryDate", "status"],
            include:
                [
                    {
                        model: User,
                        attributes: ["peopleID", "name", "lastname", "age", "address", "phoneNumber"]
                    }
                ]
        })
            .then(driveCard => {
                res.send(driveCard);
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
        if (!req.body.cardID | !req.body.issueDate | !req.body.expiryDate | !req.body.status) {
            res.status(400).json({ massage: "Cannot Empty!" });
            return;
        }

        const driveCardObj = {
            cardID: req.body.cardID,
            issueDate: req.body.issueDate,
            expiryDate: req.body.expiryDate,
            status: req.body.status
        }
        Report.create(driveCardObj)
            .then((data) => {
                //  CAN Insert some table here
                res.status(200).json({ massage: "Driver-Card created!" })
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
            include:
                [
                    {
                        model: User,
                        attributes: ["peopleID", "name", "lastname", "age", "address", "phoneNumber"]
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
        const driveCardObj = {
            cardID: req.body.cardID,
            issueDate: req.body.issueDate,
            expiryDate: req.body.expiryDate,
            status: req.body.status
        }

        Report.update(driveCardObj, {
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