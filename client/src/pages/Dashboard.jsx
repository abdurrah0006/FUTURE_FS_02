import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import AnalyticsCard from "../components/AnalyticsCard";
import LeadSourceChart from "../components/Charts/LeadSourceChart";
import LeadStatusChart from "../components/Charts/LeadStatusChart";
import FollowUpReminders from "../components/FollowUpReminders";
import Loader from "../components/Loader";
import { getLeadStats } from "../services/leadService";

const Dashboard = () => {

    const [stats,setStats]=useState({
        total:0,
        newLeads:0,
        contacted:0,
        converted:0,
        sourceAnalytics:[],
        statusAnalytics:[],
        followUps:[]
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const statsData = await getLeadStats();
                setStats(statsData);
            } catch (error) {
                console.error(error);
                setError("Failed to load dashboard.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <Layout>
            <header className="dashboard-header">
                <div className="header-left">
                    <div>
                        <h1 className="page-title">Operations dashboard</h1>
                        <p className="caption">Stay ahead of every conversation and follow-up.</p>
                    </div>
                </div>

                <div className="header-right">
                    <Link to="/create" className="btn-primary">+ New lead</Link>
                </div>
            </header>

            <section className="dashboard-section">
                <div className="stats-grid">
                    <AnalyticsCard title="Total Leads" value={stats.total} icon="👥" variant="featured" />
                    <AnalyticsCard title="New Leads" value={stats.newLeads} icon="📩" />
                    <AnalyticsCard title="Contacted" value={stats.contacted} icon="📞" />
                    <AnalyticsCard title="Converted" value={stats.converted} icon="✅" />
                </div>
            </section>

            <section className="dashboard-section">
                <div className="analytics-grid">
                    <LeadSourceChart data={stats.sourceAnalytics} />
                    <LeadStatusChart data={stats.statusAnalytics} />
                </div>
            </section>

            <section className="dashboard-section">
                <FollowUpReminders followUps={stats.followUps} />
            </section>
        </Layout>
    );
};

export default Dashboard;