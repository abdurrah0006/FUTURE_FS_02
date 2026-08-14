const AnalyticsCard = ({ title, value, icon, variant }) => {

    return (
        <div className={`stat-card ${variant === "featured" ? "featured-card" : ""}`}>
            <div className="stat-card-header">
                <div className="stat-icon">
                    {icon}
                </div>
            </div>
            <div className="stat-card-body">
                <p className="stat-title">
                    {title}
                </p>
                <h2 className="stat-value">
                    {value}
                </h2>
                <span className="stat-caption">
                    Updated just now
                </span>
            </div>
        </div>
    );
};

export default AnalyticsCard;