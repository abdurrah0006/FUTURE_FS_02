const mongoose = require("mongoose");


const leadSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true
        },


        email:{
            type:String,
            required:true,
            lowercase:true,
            trim:true
        },


        source:{
            type:String,
            required:true,
            enum:[
                "Website",
                "LinkedIn",
                "Referral",
                "Other"
            ],
            default:"Website"
        },


        status:{
            type:String,
            enum:[
                "New",
                "Contacted",
                "Converted"
            ],
            default:"New"
        },


        notes:[
            {
                text:{
                    type:String,
                    required:true
                },

                createdAt:{
                    type:Date,
                    default:Date.now
                }
            }
        ],


        followUps:[
            {
                reminderDate:{
                    type:Date
                },

                completed:{
                    type:Boolean,
                    default:false
                },

                note:{
                    type:String
                }
            }
        ]

    },
    {
        timestamps:true
    }
);


module.exports = mongoose.model(
    "Lead",
    leadSchema
);