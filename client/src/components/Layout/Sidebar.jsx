import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Sidebar = () => {
    const { logout } = useAuth();

    return (
        <aside className="sidebar">
            <div className="sidebar-brand">
                <div className="brand-logo">CRM</div>
                <div className="brand-text">
                    <h2>Mini CRM</h2>
                    <p>Lead command center</p>
                </div>
            </div>

            <nav className="sidebar-nav">
                <NavLink to="/" end>Dashboard</NavLink>
                <NavLink to="/leads">Leads</NavLink>
                <NavLink to="/create">Add Lead</NavLink>
            </nav>

            <div className="sidebar-footer">
                <button onClick={logout}>Sign out</button>
            </div>
        </aside>
    );
};

export default Sidebar;

