// police = officer
const db = require('../model');
const Police = db.police;
const Report = db.report;

exports.findAll = (req, res) => {
    try {
        Police.findAll({
            attributes: ["id", "peopleID", "user", "passwordID", "name", "lastname", "rank", "age", "birthDay", "address", "phoneNumber", "status"],
        })
            .then(police => {
                res.send(police);
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
        if (!req.body.id | !req.body.peopleID | !req.body.user | !req.body.passwordID | !req.body.name | !req.body.lastname | !req.body.rank | !req.body.age | !req.body.birthDay | !req.body.address | !req.body.phoneNumber | !req.body.status) {
            res.status(400).json({ massage: "Cannot Empty!" });
            return;
        }

        const policeObj = {
            id: req.body.id,
            peopleID: req.body.peopleID,
            user: req.body.user,
            passwordID: req.body.passwordID,
            name: req.body.name,
            lastname: req.body.lastname,
            rank: req.body.rank,
            age: req.body.age,
            birthDay: req.body.birthDay,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
            status: req.body.status
        }
        Police.create(policeObj)
            .then((data) => {
                //  Insert some table
                res.status(200).json({ massage: "Account created!" })
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
        Police.findByPk(id, {
            include: [
                {
                    model: Report,
                    attributes: ["id", "date"]
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
        const policeObj = {
            user: req.body.user,
            passwordID: req.body.passwordID,
            name: req.body.name,
            lastname: req.body.lastname,
            age: req.body.age,
            rank: req.body.rank,
            birthDay: req.body.birthDay,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
            status: req.body.status
        }

        Police.update(policeObj, {
            where: { id, id },
        })
            .then(data => {
                if (data == 1) {
                    res.status(200).json({ massage: "Update DATA Success..!" })
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
        Police.destroy({ where: { id: req.params.id } })
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