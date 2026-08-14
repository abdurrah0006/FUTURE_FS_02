import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import LeadForm from "../components/LeadForm";
import { createLead } from "../services/leadService";

const CreateLead = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const handleCreateLead = async (leadData) => {

        try {
            setLoading(true);
            await createLead(leadData);
            alert("Lead created successfully!");
            navigate("/");
        } catch (error) {
            console.error(error);
            alert("Failed to create lead.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout>
            <div className="hero-panel">
                <h1>Create a new lead</h1>
                <p>Capture fresh opportunities and keep your pipeline moving.</p>
            </div>
            <LeadForm
                onSubmit={handleCreateLead}
                loading={loading}
            />
        </Layout>
    );
};

export default CreateLead;