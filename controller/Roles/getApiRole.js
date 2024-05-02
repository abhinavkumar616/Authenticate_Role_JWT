const rolesModel = require("../Roles/../../models/roleModel");

const getApiRole = async (req, res) => {
    try {
        let { page = 1, limit = 10 } = req.query; 

        page = parseInt(page);
        limit = parseInt(limit); 

        page = Math.max(1, page);

        const skip = (page - 1) * limit;

        let data = await rolesModel.find().skip(skip).limit(limit);

        const totalCount = await rolesModel.countDocuments();
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

module.exports = getApiRole;
