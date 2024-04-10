const db = require('../model');
const User = db.user;

exports.findAll = (req, res) => {
    try {
        User.findAll({
            attributes: ["peopleID", "passwordID", "name", "lastname", "birthDay", "address"],
            // include:
            //     [
            //         {
            //             // 
            //         }
            //     ]
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

exports.create = (req, res) => {
    try {
        if (!req.body.peopleID | !req.body.ID | !req.body.name | !req.body.lastname | !req.body.birthDay | !req.body.address ) {
            res.status(400).json({ massage: "Cannot Empty!"});
            return;
        }

        const userObj = {
            peopleID: req.body.peopleID,
            passwordID: req.body.passwordID,
            name: req.body.name,
            lastname: req.body.lastname,
            birthDay: req.body.birthDay,
            address: req.body.address
        }
        User.create(userObj)
        .then((data) =>{
//  Insert some table


            res.status(200).json({ massage: "User created!"})
        })
        .catch(error => {
            res.status(500).json({ massage: "Error!..."})
        })
    
    } catch (error) {
        console.send.status(500)
    }
};

exports.findOne = (req, res) => {
    try {
        const id = req.params.id
        User.findByPk(id, {
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

exports.update = (req, res) => {
    try {
        const id = req.params.id;
        const userObj = {
            name: req.body.name,
            lastname: req.body.lastname,
            address: req.body.address
        }

        User.update(userObj, {
            where: {id, id},
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