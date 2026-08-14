import { useEffect, useMemo, useState } from "react";
import Layout from "../components/Layout/Layout";
import LeadTable from "../components/LeadTable";
import LeadFilters from "../components/LeadFilters";
import Loader from "../components/Loader";
import { getLeads } from "../services/leadService";

const Leads = () => {

    const [search,setSearch]=useState("");
    const [statusFilter,setStatusFilter]=useState("All");
    const [sourceFilter,setSourceFilter]=useState("All");
    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const leadData = await getLeads();
                setLeads(leadData.leads);
            } catch (error) {
                console.error(error);
                setError("Failed to load leads.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const filteredLeads = useMemo(() => {
        return leads.filter((lead) => {
            const matchesSearch = lead.name.toLowerCase().includes(search.toLowerCase()) ||
                                lead.email.toLowerCase().includes(search.toLowerCase());

            const matchesStatus = statusFilter === "All" || lead.status === statusFilter;

            const matchesSource = sourceFilter === "All" || lead.source === sourceFilter;

            return matchesSearch && matchesStatus && matchesSource;
        });
    }, [leads, search, statusFilter, sourceFilter]);

    if (loading) {
        return <Loader />;
    }

    return (
        <Layout>
            <div className="page-content">
                <div className="hero-panel">
                    <h1>All Leads</h1>
                    <p>Search, filter, and manage your leads</p>
                </div>

                <section className="dashboard-section">
                    <LeadFilters
                        search={search}
                        setSearch={setSearch}
                        statusFilter={statusFilter}
                        setStatusFilter={setStatusFilter}
                        sourceFilter={sourceFilter}
                        setSourceFilter={setSourceFilter}
                    />
                </section>

                <section className="dashboard-section">
                    <div className="table-card">
                        <div className="section-header">
                            <h2 className="section-title">Leads ({filteredLeads.length})</h2>
                        </div>
                        <LeadTable leads={filteredLeads} />
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Leads;
