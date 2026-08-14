import { Link } from "react-router-dom";

const Header = () => {
    return (
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
    );
};

export default Header;

        