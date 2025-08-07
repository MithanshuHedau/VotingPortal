import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { candidatesAPI } from "../utils/api";
import "../styles/dashboard.css";

const Dashboard = () => {
  const { user, updateUser } = useAuth();
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [votingLoading, setVotingLoading] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [voteResults, setVoteResults] = useState([]);

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

  const handleVote = async (candidateId) => {
    if (user.isVoted) {
      setError("You have already voted!");
      return;
    }

    if (user.role === "admin") {
      setError("Admins cannot vote!");
      return;
    }

    try {
      setVotingLoading(candidateId);
      setError("");

      await candidatesAPI.vote(candidateId);

      // Update user status
      updateUser({ isVoted: true });

      // Refresh candidates and vote results
      await fetchCandidates();
      await fetchVoteResults();

      setSuccess("Vote cast successfully!");

      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError("Failed to cast vote: " + err.message);
    } finally {
      setVotingLoading(null);
    }
  };

  const getVotingStatus = () => {
    if (user.role === "admin") {
      return {
        status: "admin",
        icon: "👨‍💼",
        message: "Admin Account",
        description:
          "You are logged in as an admin. Admins cannot vote but can manage candidates.",
      };
    } else if (user.isVoted) {
      return {
        status: "voted",
        icon: "✅",
        message: "Vote Submitted",
        description:
          "Thank you for participating in the election. Your vote has been recorded.",
      };
    } else {
      return {
        status: "not-voted",
        icon: "🗳️",
        message: "Ready to Vote",
        description:
          "You can vote for one candidate. Choose carefully as you can only vote once.",
      };
    }
  };

  const votingStatus = getVotingStatus();
  const totalVotes = voteResults.reduce((sum, result) => sum + result.count, 0);

  if (loading) {
    return (
      <div className="container">
        <div style={{ textAlign: "center", padding: "3rem" }}>
          <div className="spinner"></div>
          <p>Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="container">
        <div className="dashboard-header text-center">
          <h1 className="dashboard-title">Voting Dashboard</h1>
          <p className="dashboard-subtitle">
            Welcome back, {user?.name}!
            {user?.role === "admin"
              ? " Manage your voting system."
              : " Make your voice heard."}
          </p>
        </div>

        {/* Statistics */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">{candidates.length}</div>
            <div className="stat-label">Total Candidates</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{totalVotes}</div>
            <div className="stat-label">Total Votes Cast</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{user?.role}</div>
            <div className="stat-label">Your Role</div>
          </div>
        </div>

        {/* Voting Status */}
        <div className={`voting-status ${votingStatus.status}`}>
          <div className="status-icon">{votingStatus.icon}</div>
          <div className="status-message">{votingStatus.message}</div>
          <div className="status-description">{votingStatus.description}</div>
        </div>

        {/* Alerts */}
        {error && <div className="alert alert-error">{error}</div>}

        {success && <div className="alert alert-success">{success}</div>}

        {/* Candidates Section */}
        <div className="candidates-section">
          <h2 className="section-title">Candidates</h2>

          {candidates.length === 0 ? (
            <div className="empty-state">
              <div className="empty-state-icon">🗳️</div>
              <div className="empty-state-title">No Candidates Available</div>
              <div className="empty-state-description">
                There are currently no candidates registered for voting.
              </div>
            </div>
          ) : (
            <div className="candidates-grid">
              {candidates.map((candidate) => (
                <div key={candidate._id} className="candidate-card">
                  <div className="candidate-header">
                    <div>
                      <h3 className="candidate-name">{candidate.name}</h3>
                      <p className="candidate-party">{candidate.party}</p>
                    </div>
                    <div className="candidate-age">Age: {candidate.age}</div>
                  </div>

                  <div className="vote-info">
                    <span className="vote-count">
                      Votes: {candidate.voteCount || 0}
                    </span>

                    {user?.role !== "admin" && (
                      <button
                        className="vote-btn"
                        onClick={() => handleVote(candidate._id)}
                        disabled={
                          user.isVoted || votingLoading === candidate._id
                        }
                      >
                        {votingLoading === candidate._id ? (
                          <>
                            <div
                              className="spinner"
                              style={{
                                width: "16px",
                                height: "16px",
                                marginRight: "8px",
                              }}
                            ></div>
                            Voting...
                          </>
                        ) : user.isVoted ? (
                          "Already Voted"
                        ) : (
                          "Vote"
                        )}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Vote Results Summary */}
        {voteResults.length > 0 && (
          <div className="candidates-section">
            <h2 className="section-title">Current Results</h2>
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
                    {isWinner && <div className="winner-badge">🏆 Leading</div>}
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
