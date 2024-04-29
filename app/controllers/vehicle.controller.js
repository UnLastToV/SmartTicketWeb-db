const db = require('../model');
const Vehicle = db.vehicle;
const User = db.user;


exports.findAll = (req, res) => {
    try {
        Vehicle.findAll({
            attributes: ["carType", "vehicleLicensePlate", "vehicleProvince", "brand"],
            include:
                [
                    {
                        model: User,
                        attributes: ["peopleID", "name", "lastname", "age", "address", "phoneNumber"]
                    }
                ]
        })
            .then(vehicle => {
                res.send(vehicle);
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
        if (!req.body.carType | !req.body.vehicleLicensePlate | !req.body.vehicleProvince | !req.body.brand) {
            res.status(400).json({ massage: "Cannot Empty!" });
            return;
        }
        const vehicleObj = {
            id: req.body.carType,
            id: req.body.vehicleLicensePlate,
            id: req.body.vehicleProvince,
            id: req.body.brand

        }
        Vehicle.create(vehicleObj)
            .then((data) => {
                //  Insert some table
                res.status(200).json({ massage: "Vehicle created!" })
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
        Vehicle.findByPk(id, {
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
        const vehicleObj = {
            id: req.body.id,
            id: req.body.carType,
            id: req.body.vehicleLicensePlate,
            id: req.body.vehicleProvince,
            id: req.body.brand
        }

        Vehicle.update(vehicleObj, {
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
        Vehicle.destroy({ where: { id: req.params.id } })
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