import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../services/authService";
import { useAuth } from "../context/AuthContext";

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [form, setForm] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await loginAdmin(form);
            login(data.token);
            navigate("/");
        } catch (error) {
            console.log(error);
            alert("Invalid Login");
        }
    };

    return (
        <div className="auth-shell">
            <div className="auth-card">
                <div className="auth-visual">
                    <h1>Welcome back.</h1>
                    <p>Run your pipeline with clarity, pace, and polished focus.</p>
                </div>

                <div className="auth-form-panel">
                    <form onSubmit={handleSubmit}>
                        <h2>Sign in to Mini CRM</h2>
                        <input
                            name="username"
                            placeholder="Username"
                            value={form.username}
                            onChange={handleChange}
                        />
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={form.password}
                            onChange={handleChange}
                        />
                        <button className="btn-primary" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;