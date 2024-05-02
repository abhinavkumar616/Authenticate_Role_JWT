const employeeModel=require("../Roles/../../models/employeeModel")

const deleteEmployeeById=async(req,res)=>{

    try{
        let {_id}=req.params
        console.log("id---",_id);
        if(!_id){
            return res.status(400).send('ID parameter is missing');
        }

        let DeleteData=await employeeModel.deleteOne({_id:_id})
        console.log("UpdateData ----",DeleteData);

        res.status(201).send({
            data:DeleteData
        })
    }
    catch(error){
        res.status(500).send({
            error:error.message
        })
    }

}

module.exports=deleteEmployeeById