const rolesModel=require("../Roles/../../models/roleModel")

const getAPiRoleId=async(req,res)=>{

    try{
        let {_id}=req.params
        console.log("id---",_id);
        if(!_id){
            return res.status(400).send('ID parameter is missing');
        }
        let data= await rolesModel.findOne({_id:_id})

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

module.exports=getAPiRoleId