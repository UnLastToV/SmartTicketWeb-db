const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const db = require("../model");
const User = db.user;

verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];
    // let toket = req.headers.authorization.replace ['Bearer ', ''];

    if (!token) {
        return res.status(403).json({ message: "No TOKEN Provided!" });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        req.userId = decoded.id;
        next();
    });
};

// isAdmin = (req, res, next) => {
//     User.findByPk(req.userId).then(user => {
//         user.getRoles().then(roles => {
//             for (let i = 0; i < roles.length; i++) {
//                 if (roles[i].name === "admin") {
//                     next();
//                     return;
//                 }
//             }
//             res.status(403).json({message:"Require Admin Role"});
//             return;
//         });
//     });
// };

const authJwt = {
    verifyToken : verifyToken,
    isAdmin : isAdmin
};
module.exports = authJwt;