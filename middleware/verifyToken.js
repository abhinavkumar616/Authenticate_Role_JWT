const rolesModel=require("../models/roleModel")

const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        console.log("req.user----",req.user);
        next();
    });
};


const authorizeRole = (role) => {
    return async (req, res, next) => {
        try {
            console.log("req.user.rid---",req.user.data.rid);
            const roleDoc = await rolesModel.findById(req.user.data.rid);
            console.log("roleDoc -----",roleDoc);
            if (!roleDoc) {
                return res.status(403).send('You are not authorized to access this resource.');
            }
            if (roleDoc.role_name !== role) {
                return res.status(403).send('You are not authorized to access this resource.');
            }
            next();
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    };
};


module.exports = {
    authenticateToken,
    authorizeRole
};
