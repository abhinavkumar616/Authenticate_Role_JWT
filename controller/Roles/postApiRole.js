const rolesModel=require("../Roles/../../models/roleModel")

const postApiRole=async(req,res)=>{

    try{
        const {role_name}=req.body

        let data= await rolesModel.create({
            role_name
        })
        await data.save()
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

module.exports=postApiRole