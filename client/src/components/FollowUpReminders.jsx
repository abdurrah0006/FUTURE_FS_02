const FollowUpReminders = ({ followUps }) => {
    if (!followUps || followUps.length === 0) {
        return (
            <div className="follow-up-card">
                <h3>Follow-up Reminders</h3>
                <p className="empty-reminder-text">No reminders set yet</p>
            </div>
        );
    }

    return (
        <div className="follow-up-card">
            <h3>Follow-up Reminders</h3>
            <div className="reminders-list">
                {followUps.map((followUp, index) => (
                    <div key={index} className="reminder-item">
                        <div className="reminder-header">
                            <h4 className="reminder-name">{followUp.leadName || "Unknown Lead"}</h4>
                            <span className="reminder-date">
                                {new Date(followUp.reminderDate).toLocaleDateString()}
                            </span>
                        </div>
                        <p className="reminder-text">{followUp.note}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FollowUpReminders;
