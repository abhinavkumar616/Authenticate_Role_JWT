const express=require("express")


const postApiRole = require("../controller/Roles/postApiRole")
const getApiRole = require("../controller/Roles/getApiRole")
const getAPiRoleId = require("../controller/Roles/getAPiRoleId")
const putApiRoleId = require("../controller/Roles/putApiRoleId")
const deleteApiRoleId = require("../controller/Roles/deleteApiRoleId")
const createEmployee = require("../controller/Employee/createEmployee")
const employeeLogIn = require("../controller/Employee/employeeLogIn")
const getAllEmployee = require("../controller/Employee/getAllEmployee")


const {authenticateToken,authorizeRole}=require("../middleware/verifyToken") 
const employeeRole = require("../controller/Employee/employeeRole")
const getEmployeeById = require("../controller/Employee/getEmployeeById")
const putEmployeeById = require("../controller/Employee/putEmployeeById")
const deleteEmployeeById = require("../controller/Employee/deleteEmployeeById")

const router=express.Router()


router.post("/postRole",authenticateToken, authorizeRole('Admin'),postApiRole)
router.get("/getApiRole",authenticateToken, authorizeRole('Admin'),getApiRole)
router.get("/getAPiRoleId/:_id",authenticateToken, authorizeRole('Admin'),getAPiRoleId)
router.put("/putApiRoleId/:_id",authenticateToken, authorizeRole('Admin'),putApiRoleId)
router.delete("/deleteApiRoleId/:_id",authenticateToken, authorizeRole('Admin'),deleteApiRoleId)

router.post("/createEmployee",createEmployee)
router.post("/employeeLogIn",employeeLogIn)
router.get("/getAllEmployee",authenticateToken, authorizeRole('Admin'),authenticateToken,getAllEmployee)
router.get("/api/employees/:_id",authenticateToken, authorizeRole('Admin'),getEmployeeById)
router.put("/api/employees/:_id",authenticateToken, authorizeRole('Admin'),putEmployeeById)
router.delete("/api/employees/:_id",authenticateToken, authorizeRole('Admin'),deleteEmployeeById)

router.get("/employeeRole",authenticateToken, authorizeRole('Admin'),employeeRole)



module.exports=router