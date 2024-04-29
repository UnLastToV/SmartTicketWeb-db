const db = require("../model");
const config = require("../config/auth.config");
const User = db.user;
const Police = db.police;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.genkey = (req, res) => {
    const hash = bcrypt.hashSync(req.body.password, 10)
    res.status(200).json({ password: hash })
};

exports.signin = (req, res) => {
    // User
    User.findOne({
        where: {
            peopleID: req.body.peopleID
        }
    }).then(user => {
        if (!user) {
            return res.status(404).json({ message: "User not Found!" })
        }

        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if (!passwordIsValid) {
            return res.status(401).json({
                accessToken: null,
                message: "Invalid Password!"
            });
        }

        const token = jwt.sign({ id: user.id }, config.secret,
            {
                algorithm: 'HS256',
                expiresIn: 300
            }
        );

        var authorities = [];
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                authorities.push("ROLE_" + roles[i].name.toUpperCase());
            }
            res.status(200).json({
                id: user.id,
                peopleID: user.peopleID,
                roles: authorities,
                accessToken: token
            });
        });

    }).catch(err => {
        res.status(500).json({ message: err.message })
    });


    // Police
    Police.findOne({
        where: {
            username: req.body.username
        }
    }).then(police => {
        if (!police) {
            return res.status(404).json({ message: "User not Found!" })
        }

        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            police.password
        );

        if (!passwordIsValid) {
            return res.status(401).json({
                accessToken: null,
                message: "Invalid Password!"
            });
        }

        const token = jwt.sign({ id: user.id }, config.secret,
            {
                algorithm: 'HS256',
                expiresIn: 300
            }
        );

        var authorities = [];
        police.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                authorities.push("ROLE_" + roles[i].name.toUpperCase());
            }
            res.status(200).json({
                id: police.id,
                username: police.username,
                roles: authorities,
                accessToken: token
            });
        });

    }).catch(err => {
        res.status(500).json({ message: err.message })
    })

};

