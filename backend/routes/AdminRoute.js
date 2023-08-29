const adminModel = require("../model/adminModel")
const express = require("express")

const router = express.Router()

//registering Admin
router.post("/admin", async (req, res) => {
    const adminData = adminModel(req.body)
    const savedAdmin = await adminData.save()
    res.send(savedAdmin)
})


//login admin to verify that it's admin

router.post("/admin/login",async (req, res) => {

    if(req.body.username && req.body.password){
        
        const admin = await adminModel.findOne(req.body)
        if(admin){
            res.send(admin)
        }
        else {
            res.send("admin not found")
        }
    }

    else {
        res.send("Username and password required")
    }
    
})


module.exports = router