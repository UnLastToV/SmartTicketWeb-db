const db = require('../model');
const Police = db.police;
const Report = db.report;

exports.findAll = (req, res) => {
    try {
        Police.findAll({
            attributes: ["peopleID", "policeID", "user", "passwordID", "name", "lastname", "age", "position", "birthDay", "address"],
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
        if (!req.body.peopleID | !req.body.policeID | !req.body.user | !req.body.passwordID | !req.body.name | !req.body.lastname | !req.body.age | !req.body.position | !req.body.birthDay | !req.body.address) {
            res.status(400).json({ massage: "Cannot Empty!" });
            return;
        }

        const policeObj = {
            peopleID: req.body.peopleID,
            policeID: req.body.policeID,
            user: req.body.user,
            passwordID: req.body.passwordID,
            name: req.body.name,
            lastname: req.body.lastname,
            age: req.body.age,
            position: req.body.postion,
            birthDay: req.body.birthDay,
            address: req.body.address
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
            peopleID: req.body.policeID,
            user: req.body.user,
            passwordID: req.body.passwordID,
            name: req.body.name,
            lastname: req.body.lastname,
            age: req.body.age,
            position: req.body.postion,
            birthDay: req.body.birthDay,
            address: req.body.address
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