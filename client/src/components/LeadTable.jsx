import { Link } from "react-router-dom";

const LeadTable = ({ leads }) => {
    return (
        <table className="data-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Source</th>
                    <th>Status</th>
                    <th>Created</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {leads.length === 0 ? (
                    <tr>
                        <td colSpan="6">
                            <div className="empty-state">
                                <h3>No Leads Found</h3>

                                <p>
                                    Start by creating your first lead.
                                </p>
                            </div>
                        </td>
                    </tr>
                ) : (
                    leads.map((lead) => (
                        <tr key={lead._id}>
                            <td>{lead.name}</td>
                            <td>{lead.email}</td>
                            <td>{lead.source}</td>

                            <td>
                                <span className={`status-badge ${lead.status.toLowerCase()}`}>
                                    {lead.status}
                                </span>
                            </td>

                            <td>
                                {new Date(lead.createdAt).toLocaleDateString()}
                            </td>

                            <td>
                                <Link
                                    to={`/lead/${lead._id}`}
                                    className="view-btn"
                                >
                                    View
                                </Link>
                            </td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    );
};

export default LeadTable;