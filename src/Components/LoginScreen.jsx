import React, { useState } from "react";
import "./LoginScreen.css";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email.trim())) newErrors.email = "Enter a valid email address";
    if (!form.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Proceed with login logic here
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2 className="login-title">Signin to your <br />PopX account</h2>
        <p className="login-subtitle">
          Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,
        </p>
        <form onSubmit={handleSubmit} noValidate>
          {/* Email */}
          <div className="input-group">
            <label className="floating-label">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter email address"
            />
            {errors.email && (
              <div style={{ color: "red", fontSize: 12 }}>{errors.email}</div>
            )}
          </div>
          {/* Password */}
          <div className="input-group">
            <label className="floating-label">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter password"
            />
            {errors.password && (
              <div style={{ color: "red", fontSize: 13 }}>{errors.password}</div>
            )}
          </div>
          {/* Button */}
          <button className="login-btn" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
