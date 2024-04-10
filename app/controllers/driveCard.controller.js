const db = require('../model');
const DriveCard = db.employee;
const Project = db.project;

exports.findAll = (req, res) => {
    Project.findAll({
        include:[
            {
                model: User,
                attributes: ["name"]
            }
        ]
    })
        .then(data => { res.status(200).json(data); })
        .catch(error => res.status(400).json({ massage: error.massage }));
}