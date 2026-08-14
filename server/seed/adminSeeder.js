require("dotenv").config();
const bcrypt = require("bcryptjs");
const connectDB = require("../config/db");
const Admin = require("../models/Admin");

const seedAdmin = async()=>{

    try{
        await connectDB();
        const exists = await Admin.findOne({
            username:"admin"
        });

        if(exists){
            console.log("Admin already exists");
            process.exit();
        }

        const hashedPassword = await bcrypt.hash("admin123",10);

        await Admin.create({
            username:"admin",
            password:hashedPassword
        });

        console.log("Admin created");
        process.exit();

    }catch(error){
        console.error(error);
        process.exit(1);
    }
};

seedAdmin();