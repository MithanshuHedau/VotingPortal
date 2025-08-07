import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { candidatesAPI, adminAPI } from "../utils/api";
import "../styles/admin.css";

const AdminPanel = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("candidates");
  const [candidates, setCandidates] = useState([]);
  const [voteResults, setVoteResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Form states
  const [showForm, setShowForm] = useState(false);
  const [editingCandidate, setEditingCandidate] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    party: "",
    age: "",
  });
  const [formLoading, setFormLoading] = useState(false);

  useEffect(() => {
    fetchCandidates();
    fetchVoteResults();
  }, []);

  const fetchCandidates = async () => {
    try {
      setLoading(true);
      const response = await candidatesAPI.getCandidates();
      setCandidates(response.candidates || []);
    } catch (err) {
      setError("Failed to fetch candidates: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchVoteResults = async () => {
    try {
      const response = await candidatesAPI.getAllVoteCounts();
      setVoteResults(response.VoteRecord || []);
    } catch (err) {
      console.error("Failed to fetch vote results:", err);
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({ name: "", party: "", age: "" });
    setEditingCandidate(null);
    setShowForm(false);
  };

  const handleAddCandidate = () => {
    resetForm();
    setShowForm(true);
  };

  const handleEditCandidate = (candidate) => {
    setFormData({
      name: candidate.name,
      party: candidate.party,
      age: candidate.age.toString(),
    });
    setEditingCandidate(candidate);
    setShowForm(true);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    setError("");

    // Validation
    if (!formData.name || !formData.party || !formData.age) {
      setError("Please fill in all fields");
      setFormLoading(false);
      return;
    }

    if (parseInt(formData.age) < 18) {
      setError("Candidate must be at least 18 years old");
      setFormLoading(false);
      return;
    }

    try {
      const submitData = {
        ...formData,
        age: parseInt(formData.age),
      };

      if (editingCandidate) {
        await adminAPI.updateCandidate(editingCandidate._id, submitData);
        setSuccess("Candidate updated successfully!");
      } else {
        await adminAPI.addCandidate(submitData);
        setSuccess("Candidate added successfully!");
      }

      resetForm();
      await fetchCandidates();
      await fetchVoteResults();

      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError("Failed to save candidate: " + err.message);
    } finally {
      setFormLoading(false);
    }
  };

  const handleDeleteCandidate = async (candidateId) => {
    if (
      !window.confirm(
        "Are you sure you want to delete this candidate? This action cannot be undone."
      )
    ) {
      return;
    }

    try {
      await adminAPI.deleteCandidate(candidateId);
      setSuccess("Candidate deleted successfully!");
      await fetchCandidates();
      await fetchVoteResults();

      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError("Failed to delete candidate: " + err.message);
    }
  };

  const totalVotes = voteResults.reduce((sum, result) => sum + result.count, 0);

  if (loading) {
    return (
      <div className="container">
        <div style={{ textAlign: "center", padding: "3rem" }}>
          <div className="spinner"></div>
          <p>Loading admin panel...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-panel">
      <div className="container">
        <div className="admin-header text-center">
          <h1 className="admin-title">Admin Panel</h1>
          <p className="admin-subtitle">
            Welcome, {user?.name}! Manage candidates and view voting results.
          </p>
        </div>

        {/* Admin Tabs */}
        <div className="admin-tabs">
          <button
            className={`admin-tab ${
              activeTab === "candidates" ? "active" : ""
            }`}
            onClick={() => setActiveTab("candidates")}
          >
            Manage Candidates
          </button>
          <button
            className={`admin-tab ${activeTab === "results" ? "active" : ""}`}
            onClick={() => setActiveTab("results")}
          >
            View Results
          </button>
        </div>

        {/* Alerts */}
        {error && <div className="alert alert-error">{error}</div>}

        {success && <div className="alert alert-success">{success}</div>}

        <div className="tab-content">
          {activeTab === "candidates" && (
            <div>
              <div className="candidate-form-section">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "1.5rem",
                  }}
                >
                  <h2 className="form-section-title">Candidate Management</h2>
                  {!showForm && (
                    <button className="btn-add" onClick={handleAddCandidate}>
                      Add New Candidate
                    </button>
                  )}
                </div>

                {showForm && (
                  <form className="candidate-form" onSubmit={handleSubmitForm}>
                    <h3 style={{ marginBottom: "1rem" }}>
                      {editingCandidate
                        ? "Edit Candidate"
                        : "Add New Candidate"}
                    </h3>

                    <div className="row">
                      <div className="col-6">
                        <div className="form-group">
                          <label className="form-label">Name *</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleFormChange}
                            className="form-input"
                            placeholder="Enter candidate name"
                            disabled={formLoading}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <label className="form-label">Age *</label>
                          <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleFormChange}
                            className="form-input"
                            placeholder="Enter age"
                            min="18"
                            max="120"
                            disabled={formLoading}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Party *</label>
                      <input
                        type="text"
                        name="party"
                        value={formData.party}
                        onChange={handleFormChange}
                        className="form-input"
                        placeholder="Enter party name"
                        disabled={formLoading}
                        required
                      />
                    </div>

                    <div className="form-actions">
                      <button
                        type="button"
                        className="btn-cancel"
                        onClick={resetForm}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="btn-add"
                        disabled={formLoading}
                      >
                        {formLoading ? (
                          <>
                            <div
                              className="spinner"
                              style={{
                                width: "16px",
                                height: "16px",
                                marginRight: "8px",
                              }}
                            ></div>
                            {editingCandidate ? "Updating..." : "Adding..."}
                          </>
                        ) : editingCandidate ? (
                          "Update Candidate"
                        ) : (
                          "Add Candidate"
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Candidates Table */}
              <div className="candidates-table-container">
                <h3 style={{ marginBottom: "1rem" }}>
                  All Candidates ({candidates.length})
                </h3>

                {candidates.length === 0 ? (
                  <div className="empty-state">
                    <div className="empty-state-icon">👥</div>
                    <div className="empty-state-title">No Candidates</div>
                    <div className="empty-state-description">
                      No candidates have been added yet. Add the first candidate
                      to get started.
                    </div>
                  </div>
                ) : (
                  <table className="candidates-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Party</th>
                        <th>Age</th>
                        <th>Votes</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {candidates.map((candidate) => (
                        <tr key={candidate._id}>
                          <td>{candidate.name}</td>
                          <td>{candidate.party}</td>
                          <td>{candidate.age}</td>
                          <td>{candidate.voteCount || 0}</td>
                          <td>
                            <div className="table-actions">
                              <button
                                className="btn-edit"
                                onClick={() => handleEditCandidate(candidate)}
                              >
                                Edit
                              </button>
                              <button
                                className="btn-delete"
                                onClick={() =>
                                  handleDeleteCandidate(candidate._id)
                                }
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          )}

          {activeTab === "results" && (
            <div className="results-section">
              <h2 className="form-section-title">Voting Results</h2>

              {/* Summary Stats */}
              <div className="row" style={{ marginBottom: "2rem" }}>
                <div className="col-4">
                  <div className="stat-card">
                    <div className="stat-number">{candidates.length}</div>
                    <div className="stat-label">Total Candidates</div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="stat-card">
                    <div className="stat-number">{totalVotes}</div>
                    <div className="stat-label">Total Votes</div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="stat-card">
                    <div className="stat-number">
                      {voteResults.length > 0 ? voteResults[0].party : "None"}
                    </div>
                    <div className="stat-label">Leading Party</div>
                  </div>
                </div>
              </div>

              {voteResults.length === 0 ? (
                <div className="empty-state">
                  <div className="empty-state-icon">📊</div>
                  <div className="empty-state-title">No Votes Yet</div>
                  <div className="empty-state-description">
                    Voting results will appear here once people start voting.
                  </div>
                </div>
              ) : (
                <div className="results-grid">
                  {voteResults.map((result, index) => {
                    const percentage =
                      totalVotes > 0
                        ? ((result.count / totalVotes) * 100).toFixed(1)
                        : 0;
                    const isWinner = index === 0 && result.count > 0;

                    return (
                      <div
                        key={result.party}
                        className={`result-card ${isWinner ? "winner" : ""}`}
                      >
                        {isWinner && (
                          <div className="winner-badge">🏆 Leading</div>
                        )}
                        <div className="result-header">
                          <div className="result-party">{result.party}</div>
                          <div className="result-votes">{result.count}</div>
                        </div>
                        <div className="vote-percentage">
                          {percentage}% of total votes
                        </div>
                        <div className="progress-bar">
                          <div
                            className="progress-fill"
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
