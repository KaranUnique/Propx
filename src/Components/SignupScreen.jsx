import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignupScreen.css";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: ""
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Full Name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone Number is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email.trim()))
      newErrors.email = "Enter a valid email address";
    if (!form.password) newErrors.password = "Password is required";
    else if (form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!form.company.trim()) newErrors.company = "Company Name is required";
    if (!form.agency) newErrors.agency = "Please select Yes or No";
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
      localStorage.setItem("popxUser", JSON.stringify({ name: form.name, email: form.email }));
      navigate("/profilesettings");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2 className="login-title">
          Create your <br /> PopX account
        </h2>

        <form onSubmit={handleSubmit} noValidate className="form-container">
          <div className="form-content">
            {/* Full Name */}
            <div className="input-group">
              <label className="floating-label">
                Full Name <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
              {errors.name && (
                <div style={{ color: "red", fontSize: 12 }}>{errors.name}</div>
              )}
            </div>

            {/* Phone Number */}
            <div className="input-group">
              <label className="floating-label">
                Phone Number <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your number"
              />
              {errors.phone && (
                <div style={{ color: "red", fontSize: 12 }}>{errors.phone}</div>
              )}
            </div>

            {/* Email */}
            <div className="input-group">
              <label className="floating-label">
                Email Address <span style={{ color: "red" }}>*</span>
              </label>
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
              <label className="floating-label">
                Password <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter password"
              />
              {errors.password && (
                <div style={{ color: "red", fontSize: 12 }}>
                  {errors.password}
                </div>
              )}
            </div>

            {/* Company */}
            <div className="input-group">
              <label className="floating-label">
                Company Name <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Enter company name"
              />
              {errors.company && (
                <div style={{ color: "red", fontSize: 12 }}>
                  {errors.company}
                </div>
              )}
            </div>

            {/* Radio */}
            <div className="radio-group">
              <p>
                Are you an Agency? <span style={{ color: "red" }}>*</span>
              </p>
              <label>
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={form.agency === "yes"}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={form.agency === "no"}
                  onChange={handleChange}
                />
                No
              </label>
              {errors.agency && (
                <div style={{ color: "red", fontSize: 12 }}>
                  {errors.agency}
                </div>
              )}
            </div>
          </div>

          {/* Button always at bottom of login-box */}
          <div className="button-wrapper">
            <button className="login-btn btn-submit" type="submit">
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
