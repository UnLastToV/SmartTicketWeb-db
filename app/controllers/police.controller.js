const db = require('../model');
const Police = db.police;

exports.findAll = (req, res) => {
    try {
        Police.findAll({
            attributes: ["user", "passwordID", "name", "lastname", "peopleID", "age", "position", "birthDay", "address"],
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
        if (!req.body.user | !req.body.passwordID | !req.body.name | !req.body.lastname | !req.body.peopleID | !req.body.age | !req.body.position | !req.body.birthDay | !req.body.address ) {
            res.status(400).json({ massage: "Cannot Empty!"});
            return;
        }

        const policeObj = {
            user: req.body.user,
            passwordID: req.body.passwordID,
            name: req.body.name,
            lastname: req.body.lastname,
            peopleID: req.body.peopleID,
            age: req.body.age,
            position: req.body.postion,
            birthDay: req.body.birthDay,
            address: req.body.address
        }
        Police.create(policeObj)
        .then((data) =>{
//  Insert some table


            res.status(200).json({ massage: "Account created!"})
        })
        .catch(error => {
            res.status(500).json({ massage: "Error!..."})
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
            // include: [
            //     {
            //         // model: ,
            //         // attributes: [""]peopleid, name, lastName, birthDay 
            //     }
            // ]
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
            position: req.body.postion,
            birthDay: req.body.birthDay,
            address: req.body.address
        }

        Police.update(policeObj, {
            where: {id, id},
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