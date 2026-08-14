import {useEffect,useState} from "react";
import {useParams} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import {getLeadById,updateLeadStatus,addNote,addFollowUp} from "../services/leadService";

const LeadDetails=()=>{

    const{id}=useParams();
    const[lead,setLead]=useState(null);
    const[note,setNote]=useState("");
    const[followUp,setFollowUp]=useState({reminderDate:"",note:""});
    const fetchLead=async()=>{const data=await getLeadById(id);setLead(data.lead);};
    useEffect(()=>{fetchLead();},[]);
    const handleStatus=async(status)=>{await updateLeadStatus(id,status);fetchLead();};
    const handleNote=async()=>{if(!note.trim())return;await addNote(id,note);setNote("");fetchLead();};
    const handleFollowUp=async()=>{await addFollowUp(id,followUp);setFollowUp({reminderDate:"",note:""});fetchLead();};

    if(!lead)
        return <Layout><div className="loader-container"><div className="loader"></div></div></Layout>;

    return(
        <Layout>
            <div className="detail-shell">
                <div className="hero-panel">
                    <h1>{lead.name}</h1>
                    <p>{lead.email} • {lead.source}</p>
                </div>

                <div className="detail-grid">
                    <div className="detail-card">
                        <label className="status-opt">Current status</label>
                        <select className="form-control" value={lead.status} onChange={(e)=>handleStatus(e.target.value)}>
                            <option>New</option>
                            <option>Contacted</option>
                            <option>Converted</option>
                        </select>
                    </div>

                </div>

                <div className="detail-grid">
                    
                    <div className="detail-card">
                        <h3>Follow-up</h3>
                        <input className="form-control" type="date" value={followUp.reminderDate} onChange={(e)=>setFollowUp({...followUp,reminderDate:e.target.value})}/>
                        <input className="form-control" placeholder="Reminder Note" value={followUp.note} onChange={(e)=>setFollowUp({...followUp,note:e.target.value})}/>
                        <div className="form-actions">
                            <button className="btn-primary" onClick={handleFollowUp}>Add reminder</button>
                        </div>
                        <h3>Upcoming follow-ups</h3>
                        <ul className="detail-list">
                            {lead.followUps.map((item,index)=><li key={index}>{new Date(item.reminderDate).toLocaleDateString()} - {item.note}</li>)}
                        </ul>
                    </div>

                </div>

                <div className="detail-grid">

                    <div className="detail-card">
                        <h2>Add note</h2>
                        <input className="form-control" value={note} onChange={(e)=>setNote(e.target.value)} placeholder="Write note"/>
                        
                            <button className="btn-primary" onClick={handleNote}>Add note</button>
                        
                    </div>

                    <div className="detail-card">
                        <h3>Notes</h3>
                        <ul className="detail-list">
                            {lead.notes.map((item,index)=><li key={index}>{item.text}</li>)}
                        </ul>
                    </div>


                </div>
            </div>
        </Layout>
    );

};

export default LeadDetails;