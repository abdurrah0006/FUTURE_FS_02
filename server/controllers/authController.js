const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

exports.login = async(req,res)=>{

    try{
        const {username,password} = req.body;
        const admin = await Admin.findOne({username});

        if(!admin){
            return res.status(401).json({
                message:"Invalid credentials"
            });
        }

        const isMatch = await bcrypt.compare(
            password,
            admin.password
        );

        if(!isMatch){
            return res.status(401).json({
                message:"Invalid credentials"
            });
        }

        res.json({
            success:true,
            token:generateToken(admin._id)
        });

    }catch(error){
        console.error(error);
        res.status(500).json({
            message:"Login failed"
        });
    }
};