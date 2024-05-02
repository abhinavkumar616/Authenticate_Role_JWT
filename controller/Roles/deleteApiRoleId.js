const rolesModel=require("../Roles/../../models/roleModel")

const deleteApiRoleId=async(req,res)=>{

    try{
        let {_id}=req.params
        console.log("id---",_id);
        if(!_id){
            return res.status(400).send('ID parameter is missing');
        }

        let DeleteData=await rolesModel.deleteOne({_id:_id})
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

module.exports=deleteApiRoleId