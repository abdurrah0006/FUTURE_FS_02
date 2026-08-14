const Lead = require("../models/Lead");

// ============================
// CREATE LEAD
// POST /api/leads
// ============================

exports.createLead = async (req, res) => {

    try {

        const lead = await Lead.create(req.body);


        res.status(201).json({

            success:true,

            message:"Lead created successfully",

            lead

        });


    } catch(error) {

        console.error(error);


        res.status(500).json({

            success:false,

            message:"Failed to create lead"

        });

    }

};
// ============================
// GET ALL LEADS
// GET /api/leads
// Search + Filter
// ============================

exports.getLeads = async(req,res)=>{

    try{


        const {
            search,
            status,
            source
        } = req.query;



        let filter = {};



        if(status){

            filter.status = status;

        }



        if(source){

            filter.source = source;

        }



        if(search){

            filter.name = {

                $regex:search,

                $options:"i"

            };

        }



        const leads = await Lead
        .find(filter)
        .sort({
            createdAt:-1
        });



        res.status(200).json({

            success:true,

            count:leads.length,

            leads

        });



    }catch(error){

        console.error(error);


        res.status(500).json({

            message:"Failed to fetch leads"

        });

    }

};

// ============================
// GET SINGLE LEAD
// GET /api/leads/:id
// ============================

exports.getLeadById = async(req,res)=>{

    try{


        const lead = await Lead.findById(
            req.params.id
        );



        if(!lead){

            return res.status(404).json({

                message:"Lead not found"

            });

        }



        res.json({

            success:true,

            lead

        });



    }catch(error){


        console.error(error);


        res.status(500).json({

            message:"Failed to fetch lead"

        });

    }

};

// ============================
// UPDATE LEAD
// PUT /api/leads/:id
// ============================

exports.updateLead = async(req,res)=>{

    try{


        const lead =
        await Lead.findByIdAndUpdate(

            req.params.id,

            req.body,

            {

                new:true,

                runValidators:true

            }

        );



        if(!lead){

            return res.status(404).json({

                message:"Lead not found"

            });

        }



        res.json({

            success:true,

            message:"Lead updated",

            lead

        });



    }catch(error){

        console.error(error);


        res.status(500).json({

            message:"Update failed"

        });

    }

};

// ============================
// DELETE LEAD
// DELETE /api/leads/:id
// ============================

exports.deleteLead = async(req,res)=>{

    try{


        const lead =
        await Lead.findByIdAndDelete(
            req.params.id
        );



        if(!lead){

            return res.status(404).json({

                message:"Lead not found"

            });

        }



        res.json({

            success:true,

            message:"Lead deleted"

        });



    }catch(error){

        console.error(error);


        res.status(500).json({

            message:"Delete failed"

        });

    }

};

// ============================
// UPDATE STATUS
// PUT /api/leads/:id/status
// ============================

exports.updateLeadStatus = async(req,res)=>{

    try{


        const {status}=req.body;



        const lead =
        await Lead.findByIdAndUpdate(

            req.params.id,

            {
                status
            },

            {

                new:true,

                runValidators:true

            }

        );



        if(!lead){

            return res.status(404).json({

                message:"Lead not found"

            });

        }



        res.json({

            success:true,

            message:"Status updated",

            lead

        });



    }catch(error){

        console.error(error);


        res.status(500).json({

            message:"Status update failed"

        });

    }

};

// ============================
// ADD NOTE
// POST /api/leads/:id/notes
// ============================

exports.addNote = async(req,res)=>{

    try{


        const lead =
        await Lead.findById(
            req.params.id
        );



        if(!lead){

            return res.status(404).json({

                message:"Lead not found"

            });

        }



        lead.notes.push({

            text:req.body.text

        });



        await lead.save();



        res.json({

            success:true,

            message:"Note added",

            lead

        });



    }catch(error){

        console.error(error);


        res.status(500).json({

            message:"Adding note failed"

        });

    }

};

// ============================
// ADD FOLLOW UP
// POST /api/leads/:id/followups
// ============================

exports.addFollowUp = async(req,res)=>{

    try{


        const lead =
        await Lead.findById(
            req.params.id
        );



        if(!lead){

            return res.status(404).json({

                message:"Lead not found"

            });

        }



        lead.followUps.push({

            reminderDate:req.body.reminderDate,

            note:req.body.note

        });



        await lead.save();



        res.json({

            success:true,

            message:"Follow-up added",

            lead

        });



    }catch(error){

        console.error(error);


        res.status(500).json({

            message:"Follow-up failed"

        });

    }

};

// ============================
// ANALYTICS
// GET /api/leads/stats
// ============================

exports.getLeadStats = async (req, res) => {
    try {
        const total = await Lead.countDocuments();

        const newLeads = await Lead.countDocuments({ status: "New" });
        const contacted = await Lead.countDocuments({ status: "Contacted" });
        const converted = await Lead.countDocuments({ status: "Converted" });

        const sourceAnalytics = await Lead.aggregate([
            {
                $group: {
                    _id: "$source",
                    count: { $sum: 1 }
                }
            },
            {
                $project: {
                    _id: 0,
                    source: "$_id",
                    count: 1
                }
            },
            {
                $sort: {
                    count: -1
                }
            }
        ]);

        const statusAnalytics = await Lead.aggregate([
            {
                $group: {
                    _id: "$status",
                    count: { $sum: 1 }
                }
            },
            {
                $project: {
                    _id: 0,
                    status: "$_id",
                    count: 1
                }
            }
        ]);

        const recentLeads = await Lead.find()
            .sort({ createdAt: -1 })
            .limit(5)
            .select("name email source status createdAt");

        res.status(200).json({
            total,
            newLeads,
            contacted,
            converted,
            sourceAnalytics,
            statusAnalytics,
            recentLeads
        });

    } catch (error) {
        console.error("Analytics Error:", error);

        res.status(500).json({
            message: "Failed to fetch analytics."
        });
    }
};