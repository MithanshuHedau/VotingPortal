import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { authAPI } from "../utils/api";
import "../styles/auth.css";

const Profile = () => {
  const { user } = useAuth();
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (error) setError("");
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Validation
    if (
      !passwordData.currentPassword ||
      !passwordData.newPassword ||
      !passwordData.confirmPassword
    ) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    if (passwordData.newPassword.length < 6) {
      setError("New password must be at least 6 characters long");
      setLoading(false);
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setError("New passwords do not match");
      setLoading(false);
      return;
    }

    try {
      await authAPI.updatePassword({
        currentPassword: passwordData.currentPassword,
        newPassword: passwordData.newPassword,
      });

      setSuccess("Password updated successfully!");
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      setShowPasswordForm(false);

      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError("Failed to update password: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Not available";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div
      className="container"
      style={{ padding: "2rem 0", minHeight: "calc(100vh - 140px)" }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div className="card">
          <div className="card-header">
            <h1 className="card-title">User Profile</h1>
          </div>

          {/* Alerts */}
          {error && <div className="alert alert-error">{error}</div>}

          {success && <div className="alert alert-success">{success}</div>}

          {/* Profile Information */}
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <div
                  className="form-input"
                  style={{ backgroundColor: "#f8f9fa", cursor: "default" }}
                >
                  {user?.name}
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label className="form-label">Age</label>
                <div
                  className="form-input"
                  style={{ backgroundColor: "#f8f9fa", cursor: "default" }}
                >
                  {user?.age} years
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label className="form-label">Email</label>
                <div
                  className="form-input"
                  style={{ backgroundColor: "#f8f9fa", cursor: "default" }}
                >
                  {user?.email || "Not provided"}
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label className="form-label">Mobile</label>
                <div
                  className="form-input"
                  style={{ backgroundColor: "#f8f9fa", cursor: "default" }}
                >
                  {user?.mobile || "Not provided"}
                </div>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Address</label>
            <div
              className="form-input"
              style={{
                backgroundColor: "#f8f9fa",
                cursor: "default",
                minHeight: "60px",
              }}
            >
              {user?.address}
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label className="form-label">Aadhar Card Number</label>
                <div
                  className="form-input"
                  style={{ backgroundColor: "#f8f9fa", cursor: "default" }}
                >
                  {user?.aadharCardNumber
                    ? `XXXX XXXX ${user.aadharCardNumber.slice(-4)}`
                    : "Not available"}
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label className="form-label">Role</label>
                <div
                  className="form-input"
                  style={{
                    backgroundColor:
                      user?.role === "admin" ? "#e74c3c" : "#3498db",
                    color: "white",
                    cursor: "default",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  {user?.role}
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label className="form-label">Voting Status</label>
                <div
                  className="form-input"
                  style={{
                    backgroundColor: user?.isVoted ? "#28a745" : "#ffc107",
                    color: user?.isVoted ? "white" : "#000",
                    cursor: "default",
                    fontWeight: "bold",
                  }}
                >
                  {user?.role === "admin"
                    ? "Cannot Vote (Admin)"
                    : user?.isVoted
                    ? "Voted ✓"
                    : "Not Voted Yet"}
                </div>
              </div>
            </div>
          </div>

          {/* Password Update Section */}
          <div
            style={{
              marginTop: "2rem",
              paddingTop: "2rem",
              borderTop: "1px solid #eee",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <h3>Security Settings</h3>
              {!showPasswordForm && (
                <button
                  className="btn btn-primary"
                  onClick={() => setShowPasswordForm(true)}
                >
                  Change Password
                </button>
              )}
            </div>

            {showPasswordForm && (
              <form onSubmit={handlePasswordSubmit}>
                <div className="form-group">
                  <label htmlFor="currentPassword" className="form-label">
                    Current Password *
                  </label>
                  <input
                    type="password"
                    id="currentPassword"
                    name="currentPassword"
                    value={passwordData.currentPassword}
                    onChange={handlePasswordChange}
                    className="form-input"
                    placeholder="Enter your current password"
                    disabled={loading}
                    required
                  />
                </div>

                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label htmlFor="newPassword" className="form-label">
                        New Password *
                      </label>
                      <input
                        type="password"
                        id="newPassword"
                        name="newPassword"
                        value={passwordData.newPassword}
                        onChange={handlePasswordChange}
                        className="form-input"
                        placeholder="Enter new password (min 6 chars)"
                        minLength="6"
                        disabled={loading}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label htmlFor="confirmPassword" className="form-label">
                        Confirm New Password *
                      </label>
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={passwordData.confirmPassword}
                        onChange={handlePasswordChange}
                        className="form-input"
                        placeholder="Confirm new password"
                        disabled={loading}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    justifyContent: "flex-end",
                  }}
                >
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      setShowPasswordForm(false);
                      setPasswordData({
                        currentPassword: "",
                        newPassword: "",
                        confirmPassword: "",
                      });
                      setError("");
                    }}
                    disabled={loading}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <div
                          className="spinner"
                          style={{
                            width: "16px",
                            height: "16px",
                            marginRight: "8px",
                          }}
                        ></div>
                        Updating...
                      </>
                    ) : (
                      "Update Password"
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
