const employeeModel = require("../Employee/../../models/employeeModel");

const getAllEmployee = async (req, res) => {
    try {
        let { page = 1, limit = 10 } = req.query; 

        page = parseInt(page);
        limit = parseInt(limit); 

        page = Math.max(1, page);

        const skip = (page - 1) * limit;

        let data = await employeeModel.find().skip(skip).limit(limit);

        const totalCount = await employeeModel.countDocuments();
        const lengthCount = data.length;
        res.status(200).send({
            data: data,
            currentPage: page,
            totalPages: Math.ceil(totalCount / limit),
            totalCount: totalCount,
            DatalengthCount: lengthCount
        });
    } catch (error) {
        res.status(500).send({
            error: error.message
        });
    }
};

module.exports = getAllEmployee;
