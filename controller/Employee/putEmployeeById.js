const employeeModel=require("../Roles/../../models/employeeModel")

const putEmployeeById = async (req, res) => {
    try {
        let { _id } = req.params;
        let { name, empcode, mail_id, phone_number, password } = req.body;
        console.log("id---", _id);
        if (!_id) {
            return res.status(400).send('ID parameter is missing');
        }
        let data= await employeeModel.findOne({_id:_id})
        console.log("data-----",data);

        let updatedData = {
            name: name,
            empcode: empcode,
            mail_id: mail_id,
            phone_number: phone_number,
            password: password
        };

        let UpdateData=await employeeModel.updateOne({_id:_id},{$set:updatedData})

        let updatedResponse=await employeeModel.findOne({_id:_id})

        res.status(201).send({
            data: updatedResponse
        });
    } catch (error) {
        res.status(500).send({
            error: error.message
        });
    }
};

module.exports = putEmployeeById;
