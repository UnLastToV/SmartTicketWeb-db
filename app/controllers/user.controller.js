const db = require('../model');
const User = db.user;
// const Report = db.report;

exports.findAll = (req, res) => {
    try {
        User.findAll({
            attributes: ["peopleID", "password", "name", "lastname", "age", "birthDay", "address", "phoneNumber", "status"]
        })
            .then(user => {
                res.send(user);
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
        if (!req.body.peopleID | !req.body.passwordID | !req.body.name | !req.body.lastname | !req.body.age | !req.body.birthDay | !req.body.address | !req.body.phoneNumber | !req.body.status) {
            res.status(400).json({ massage: "Cannot Empty!" });
            return;
        }
        const userObj = {
            peopleID: req.body.peopleID,
            password: req.body.password,
            name: req.body.name,
            lastname: req.body.lastname,
            age: req.body.age,
            birthDay: req.body.birthDay,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
            status: req.body.status
        }
        User.create(userObj)
            .then((data) => {
                //  Insert some table
                res.status(200).json({ massage: "User created!" })
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
        User.findByPk(id, {
            include:
                [
                    {
                        model: Report,
                        attributes: ["id"]
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
        const userObj = {
            peopleID: req.body.peopleID,
            password: req.body.password,
            name: req.body.name,
            lastname: req.body.lastname,
            age: req.body.age,
            birthDay: req.body.birthDay,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
            status: req.body.status
        }

        User.update(userObj, {
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
        User.destroy({ where: { id: req.params.id } })
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