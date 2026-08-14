import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import AnalyticsCard from "../components/AnalyticsCard";
import LeadSourceChart from "../components/Charts/LeadSourceChart";
import LeadStatusChart from "../components/Charts/LeadStatusChart";
import Loader from "../components/Loader";
import { getLeadStats } from "../services/leadService";

const Analytics = () => {
    const [stats, setStats] = useState({
        total: 0,
        newLeads: 0,
        contacted: 0,
        converted: 0,
        sourceAnalytics: [],
        statusAnalytics: [],
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
                setError("Failed to load analytics.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <Loader />;

    return (
        <Layout>
            <div className="page-content">
                <div className="hero-panel">
                    <h1>Analytics Overview</h1>
                    <p>Track your lead pipeline and performance metrics</p>
                </div>

                <div className="stats-grid">
                    <AnalyticsCard
                        title="Total Leads"
                        value={stats.total}
                        icon="📊"
                        variant="featured"
                    />
                    <AnalyticsCard
                        title="New Leads"
                        value={stats.newLeads}
                        icon="⭐"
                    />
                    <AnalyticsCard
                        title="Contacted"
                        value={stats.contacted}
                        icon="💬"
                    />
                    <AnalyticsCard
                        title="Converted"
                        value={stats.converted}
                        icon="✅"
                    />
                </div>

                <div className="analytics-grid">
                    <LeadSourceChart data={stats.sourceAnalytics} />
                    <LeadStatusChart data={stats.statusAnalytics} />
                </div>
            </div>
        </Layout>
    );
};

export default Analytics;
