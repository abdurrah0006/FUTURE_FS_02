import api from "./api";

// Get all leads
export const getLeads = async()=>{
    const response = await api.get("/leads");
    return response.data;
};

// Get analytics
export const getLeadStats = async()=>{
    const response = await api.get( "/leads/stats" );
    return response.data;
};

// Create Lead
export const createLead = async (leadData) => {
    const response = await api.post("/leads", leadData);
    return response.data;
};

// Get lead by ID
export const getLeadById=async(id)=>{
    const response=await api.get(`/leads/${id}`);
    return response.data;
};

// Update lead by ID
export const updateLead=async(id,leadData)=>{
    const response=await api.put(`/leads/${id}`,leadData);
    return response.data;
};

// Update lead status
export const updateLeadStatus=async(id,status)=>{
    const response=await api.put(`/leads/${id}/status`,{status});
    return response.data;
};

// Add note to a lead
export const addNote=async(id,text)=>{
    const response=await api.post(`/leads/${id}/notes`,{text});
    return response.data;
};

// Add follow-up to a lead
export const addFollowUp=async(id,data)=>{
    const response=await api.post(`/leads/${id}/followups`,data);
    return response.data;
};