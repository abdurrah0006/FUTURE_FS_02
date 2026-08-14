import { useState, useEffect } from "react";

const LeadForm = ({ initialData = null, onSubmit, loading = false, submitText = "Save Lead" }) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        source: "Website"
    });

    useEffect(() => {
        if (initialData) {
            setFormData({
                name: initialData.name || "",
                email: initialData.email || "",
                source: initialData.source || "Website"
            });
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) onSubmit(formData);
    };

    return (
        <div className="form-page">

            <div className="form-card">

                <form onSubmit={handleSubmit}>

                    <div className="form-grid">

                        <div className="form-group">

                            <label className="form-label">
                                Full Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Enter full name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="form-group">

                            <label className="form-label">
                                Email Address
                            </label>

                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Enter email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="form-group">

                            <label className="form-label">
                                Lead Source
                            </label>

                            <select
                                name="source"
                                className="form-control"
                                value={formData.source}
                                onChange={handleChange}
                            >

                                <option>Website</option>
                                <option>Referral</option>
                                <option>LinkedIn</option>
                                <option>Instagram</option>
                                <option>Facebook</option>
                                <option>Other</option>

                            </select>

                        </div>

                    </div>

                    <div className="form-actions">

                        <button
                            type="reset"
                            className="btn btn-secondary"
                            onClick={() => setFormData({
                                name: "",
                                email: "",
                                source: "Website"
                            })}
                        >
                            Reset
                        </button>

                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={loading}
                        >
                            {loading ? "Saving..." : submitText}
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );

};

export default LeadForm;