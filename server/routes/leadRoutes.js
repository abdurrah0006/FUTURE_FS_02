const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
    createLead,
    getLeads,
    getLeadById,
    updateLead,
    deleteLead,
    updateLeadStatus,
    addNote,
    addFollowUp,
    getLeadStats

} = require("../controllers/leadController");

router.use(protect);

router.get("/stats", getLeadStats);

router.post("/", createLead);

router.get("/", getLeads);

router.get("/:id", getLeadById);

router.put("/:id", updateLead);

router.delete("/:id", deleteLead);

router.put("/:id/status", updateLeadStatus);

router.post("/:id/notes", addNote);

router.post("/:id/followups", addFollowUp);

module.exports = router;