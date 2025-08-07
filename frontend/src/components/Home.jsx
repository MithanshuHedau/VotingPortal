import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <div style={{ minHeight: "calc(100vh - 140px)" }}>
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          padding: "4rem 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "700",
              marginBottom: "1rem",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            Digital Voting Portal
          </h1>
          <p
            style={{
              fontSize: "1.3rem",
              marginBottom: "2rem",
              opacity: "0.9",
            }}
          >
            Secure, Transparent, and Democratic Voting for Everyone
          </p>
          {!isAuthenticated ? (
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link
                to="/login"
                className="btn btn-primary"
                style={{
                  fontSize: "1.1rem",
                  padding: "12px 30px",
                  background: "rgba(255,255,255,0.2)",
                  border: "2px solid white",
                  color: "white",
                }}
              >
                Login to Vote
              </Link>
              <Link
                to="/signup"
                className="btn btn-secondary"
                style={{
                  fontSize: "1.1rem",
                  padding: "12px 30px",
                  background: "white",
                  color: "#667eea",
                  border: "2px solid white",
                }}
              >
                Register Now
              </Link>
            </div>
          ) : (
            <div>
              <h2 style={{ marginBottom: "1rem" }}>
                Welcome back, {user?.name}!
              </h2>
              <Link
                to="/dashboard"
                className="btn btn-primary"
                style={{
                  fontSize: "1.1rem",
                  padding: "12px 30px",
                  background: "rgba(255,255,255,0.2)",
                  border: "2px solid white",
                  color: "white",
                }}
              >
                Go to Dashboard
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: "4rem 0", backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <h2
            style={{
              textAlign: "center",
              marginBottom: "3rem",
              fontSize: "2.5rem",
              color: "#333",
            }}
          >
            Why Choose Our Voting Platform?
          </h2>
          <div
            className="row"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2rem",
              justifyContent: "center",
            }}
          >
            <div
              className="col-4"
              style={{
                background: "white",
                padding: "2rem",
                borderRadius: "10px",
                textAlign: "center",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                minWidth: "300px",
                flex: "1",
                maxWidth: "350px",
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔒</div>
              <h3 style={{ marginBottom: "1rem", color: "#333" }}>
                Secure & Private
              </h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                Your vote is protected with advanced security measures and
                remains completely anonymous.
              </p>
            </div>

            <div
              className="col-4"
              style={{
                background: "white",
                padding: "2rem",
                borderRadius: "10px",
                textAlign: "center",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                minWidth: "300px",
                flex: "1",
                maxWidth: "350px",
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>⚡</div>
              <h3 style={{ marginBottom: "1rem", color: "#333" }}>
                Fast & Easy
              </h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                Cast your vote in seconds with our intuitive and user-friendly
                interface.
              </p>
            </div>

            <div
              className="col-4"
              style={{
                background: "white",
                padding: "2rem",
                borderRadius: "10px",
                textAlign: "center",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                minWidth: "300px",
                flex: "1",
                maxWidth: "350px",
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📊</div>
              <h3 style={{ marginBottom: "1rem", color: "#333" }}>
                Real-time Results
              </h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                View live voting results and statistics as they happen, with
                complete transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section style={{ padding: "4rem 0" }}>
        <div className="container">
          <h2
            style={{
              textAlign: "center",
              marginBottom: "3rem",
              fontSize: "2.5rem",
              color: "#333",
            }}
          >
            How It Works
          </h2>
          <div
            className="row"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2rem",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                textAlign: "center",
                maxWidth: "250px",
                flex: "1",
                minWidth: "200px",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                  color: "white",
                  fontSize: "2rem",
                  fontWeight: "bold",
                }}
              >
                1
              </div>
              <h3 style={{ marginBottom: "1rem", color: "#333" }}>Register</h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                Create your account using your Aadhar card details for secure
                identity verification.
              </p>
            </div>

            <div
              style={{
                textAlign: "center",
                maxWidth: "250px",
                flex: "1",
                minWidth: "200px",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                  color: "white",
                  fontSize: "2rem",
                  fontWeight: "bold",
                }}
              >
                2
              </div>
              <h3 style={{ marginBottom: "1rem", color: "#333" }}>
                Browse Candidates
              </h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                View all registered candidates with their details and make an
                informed choice.
              </p>
            </div>

            <div
              style={{
                textAlign: "center",
                maxWidth: "250px",
                flex: "1",
                minWidth: "200px",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                  color: "white",
                  fontSize: "2rem",
                  fontWeight: "bold",
                }}
              >
                3
              </div>
              <h3 style={{ marginBottom: "1rem", color: "#333" }}>
                Cast Your Vote
              </h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                Select your preferred candidate and cast your vote securely. One
                vote per person.
              </p>
            </div>

            <div
              style={{
                textAlign: "center",
                maxWidth: "250px",
                flex: "1",
                minWidth: "200px",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                  color: "white",
                  fontSize: "2rem",
                  fontWeight: "bold",
                }}
              >
                4
              </div>
              <h3 style={{ marginBottom: "1rem", color: "#333" }}>
                View Results
              </h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                Watch the results update in real-time and see the democratic
                process in action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {!isAuthenticated && (
        <section
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            padding: "3rem 0",
            textAlign: "center",
          }}
        >
          <div className="container">
            <h2 style={{ marginBottom: "1rem", fontSize: "2rem" }}>
              Ready to Make Your Voice Heard?
            </h2>
            <p
              style={{
                marginBottom: "2rem",
                fontSize: "1.1rem",
                opacity: "0.9",
              }}
            >
              Join thousands of citizens who are participating in our democratic
              process.
            </p>
            <Link
              to="/signup"
              className="btn btn-primary"
              style={{
                fontSize: "1.1rem",
                padding: "12px 30px",
                background: "white",
                color: "#667eea",
                border: "2px solid white",
              }}
            >
              Get Started Today
            </Link>
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;
