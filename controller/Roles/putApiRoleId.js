const rolesModel=require("../Roles/../../models/roleModel")

const putApiRoleId=async(req,res)=>{

    try{
        let {_id}=req.params
        let {role_name}=req.body
        console.log("id---",_id);
        if(!_id){
            return res.status(400).send('ID parameter is missing');
        }
        let data= await rolesModel.findOne({_id:_id})
        console.log("data-----",data);

        let UpdateData=await rolesModel.updateOne({_id:_id},{$set:{role_name:role_name}})
        console.log("UpdateData ----",UpdateData);

        let updatedResponse=await rolesModel.findOne({_id:_id})

        res.status(201).send({
            data:updatedResponse
        })
    }
    catch(error){
        res.status(500).send({
            error:error.message
        })
    }

}

module.exports=putApiRoleId