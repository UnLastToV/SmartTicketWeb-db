const db = require('../model');
const PoliceSatation = db.policeSatation;
const Police = db.police;


exports.findAll = (req, res) => {
    try {
        PoliceSatation.findAll({
            attributes: ["id", "policeStation"],
            include:
                [
                    {
                        model: Police,
                        attributes: ["id", "policeID", "name", "lastname", "position"]
                    }
                ]
        })
            .then(policeSatation => {
                res.send(policeSatation);
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
        if (!req.body.id | !req.body.policeStation) {
            res.status(400).json({ massage: "Cannot Empty!" });
            return;
        }
        const policeSatationObj = {
            id: req.body.id,
            id: req.body.policeStation
        }
        Vehicle.create(policeSatationObj)
            .then((data) => {
                //  Insert some table
                res.status(200).json({ massage: "Station created!" })
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
        PoliceSatation.findByPk(id, {
            // include:
            //     [
            //         {
            //             
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
        const policeSatationObj = {
            id: req.body.id,
            id: req.body.policeStation,
        }

        PoliceSatation.update(policeSatationObj, {
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
        PoliceSatation.destroy({ where: { id: req.params.id } })
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