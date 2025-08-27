import React, { useState } from "react";
import "./ProfileSettings.css";

const ProfileSettings = () => {
  const [bio, setBio] = useState(
    "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr. Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam"
  );
  const user = JSON.parse(localStorage.getItem("popxUser")) || {
    name: "User",
    email: "user@email.com",
  };
  return (
    <div className="profile-container">
      <div className="profile-card">
        <h1 className="profile-title">Account Settings</h1>
        <div className="profile-details" style={{ position: "relative" }}>
          <img src="/Raquel.jpg" alt={user.name} className="profile-avatar" />
          <button
            type="button"
            title="Change Image"
            style={{
              position: "absolute",
              left: 48,
              bottom: 6,
              background: "#fff",
              border: "none",
              borderRadius: "50%",
              padding: 2,
              width: 28,
              height: 28,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 1px 4px rgba(0,0,0,0.10)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
              stroke="#7a4fe2"
              strokeWidth="2"
              viewBox="0 0 24 24"
              style={{ display: "block", margin: "auto" }}
            >
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
          </button>
          <div className="profile-info">
            <h2 className="profile-name">{user.name}</h2>
            <p className="profile-email">{user.email}</p>
          </div>
        </div>
        <p
          style={{
            marginTop: "4px",
            marginBottom: "4px",
            borderRadius: "8px",
            padding: "6px",
            textAlign: "justify",
            color: "#555",
            lineHeight: 1.5,
          }}
        >
          This is sample profile information. It is aligned for better
          readability and uses a softer color for a more professional
          appearance. You can update this section with your own bio or account
          details as needed.
        </p>
        <div
          style={{
            textAlign: "center",
            color: "#bbb",
            fontSize: "18px",
            letterSpacing: "2px",
            margin: "0 0 4px 0",
          }}
        >
          ---------------------------
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
