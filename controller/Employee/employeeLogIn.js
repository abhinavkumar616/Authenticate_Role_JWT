const jwt = require("jsonwebtoken");
const employeeModel = require("../Employee/../../models/employeeModel");

const employeeLogIn = async (req, res) => {
    try {
        const { mail_id, password } = req.body;

        let data = await employeeModel.findOne({ mail_id: mail_id });
        if (!data) {
            return res.status(404).send({
                message: "Invalid Email or Password"
            });
        }

        if (data.password !== password) {
            return res.status(401).send({
                message: "Invalid Email or Password"
            });
        }

        // Password matched, generate JWT token
        const token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            data: data
        }, process.env.JWT_SECRET);

        res.status(201).send({
            token: token
        });
    } catch (error) {
        res.status(500).send({
            error: error.message
        });
    }
};

module.exports = employeeLogIn;
