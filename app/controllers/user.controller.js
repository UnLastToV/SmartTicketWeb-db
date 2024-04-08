const db = require('../model');
const User = db.user;

exports.findAll = (req, res) => {
    try {
        User.findAll({
            attributes: ["id", "name", "birthday", "address", "licensePlate"]
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