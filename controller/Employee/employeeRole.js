const employeeModel = require("../Employee/../../models/employeeModel");

const employeeRole = async (req, res) => {
    try {
        let { page = 1, limit = 10 } = req.query; 

        page = parseInt(page);
        limit = parseInt(limit); 

        page = Math.max(1, page);

        const skip = (page - 1) * limit;

        let data = await employeeModel.find().populate('rid', 'role_name').skip(skip).limit(limit);
        console.log("data---", data);

        // Map data to include only name and role_name
        const mappedData = data.map(item => ({
            name: item.name,
            role_name: item.rid.role_name
        }));

        const totalCount = await employeeModel.countDocuments();
        const lengthCount = data.length;

        res.send({
            data: mappedData,
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

module.exports = employeeRole;
