const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const leadRoutes = require("./routes/leadRoutes");

const authRoutes = require("./routes/authRoutes");

const app = express();



app.use(cors());

app.use(express.json());

app.use(morgan("dev"));



// API Routes

app.use( "/api/leads",leadRoutes );



app.get("/api/health",(req,res)=>{

    res.json({ message:"CRM API is running" });

});

app.use("/api/auth",authRoutes);

module.exports = app;