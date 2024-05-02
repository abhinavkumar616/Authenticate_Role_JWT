const jwt=require("jsonwebtoken")
const employeeModel=require("../Employee/../../models/employeeModel")
const rolesModel=require("../Roles/../../models/roleModel")

const createEmployee=async(req,res)=>{

    try{
        const {name,empcode,mail_id,phone_number,role_name,password}=req.body          
        
        const role=await rolesModel.create({
            role_name
        })

        const employee=await employeeModel.create({
            name,empcode,mail_id,phone_number,password,rid: role._id
        })

        await role.save();
        await employee.save();        

        const data = await employeeModel.findOne({ _id: employee._id }).populate('rid', 'role_name');

          res.status(201).send({
            data:data
          })
    }
    catch(error){
        res.status(500).send({
            error:error.message
        })
    }
}
module.exports=createEmployee