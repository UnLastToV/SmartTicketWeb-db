const db = require('../model');
const User = db.user;

exports.Findall = (req, res) => {
    try {
        User.Findall({
            attributes: ["id", "name", "birthday",  "address", "licensePlate"]
        })
            .then(user => {
                res.send(user);
                //res.status(200).json(employee); //send status nubmer too
            })
            .catch(error => {
                console.log(error.massage);
            });
    } catch (error) {
        console.log(error);
    }
};