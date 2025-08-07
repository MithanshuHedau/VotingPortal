import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#2c3e50",
        color: "#ecf0f1",
        padding: "2rem 0 1rem",
        marginTop: "auto",
      }}
    >
      <div className="container">
        <div
          className="row"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            marginBottom: "2rem",
          }}
        >
          {/* Brand Section */}
          <div style={{ flex: "1", minWidth: "250px" }}>
            <h3
              style={{
                marginBottom: "1rem",
                fontSize: "1.5rem",
                color: "#3498db",
              }}
            >
              VotingPortal
            </h3>
            <p
              style={{
                lineHeight: "1.6",
                opacity: "0.8",
                marginBottom: "1rem",
              }}
            >
              Empowering democracy through secure, transparent, and accessible
              digital voting solutions.
            </p>
            <p
              style={{
                fontSize: "0.9rem",
                opacity: "0.7",
              }}
            >
              Making every vote count, every voice heard.
            </p>
          </div>

          {/* Quick Links */}
          <div style={{ flex: "1", minWidth: "200px" }}>
            <h4
              style={{
                marginBottom: "1rem",
                color: "#3498db",
              }}
            >
              Quick Links
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: "0",
                margin: "0",
              }}
            >
              <li style={{ marginBottom: "0.5rem" }}>
                <Link
                  to="/"
                  style={{
                    color: "#ecf0f1",
                    textDecoration: "none",
                    opacity: "0.8",
                    transition: "opacity 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.target.style.opacity = "1")}
                  onMouseOut={(e) => (e.target.style.opacity = "0.8")}
                >
                  Home
                </Link>
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <Link
                  to="/about"
                  style={{
                    color: "#ecf0f1",
                    textDecoration: "none",
                    opacity: "0.8",
                    transition: "opacity 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.target.style.opacity = "1")}
                  onMouseOut={(e) => (e.target.style.opacity = "0.8")}
                >
                  About Us
                </Link>
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <Link
                  to="/login"
                  style={{
                    color: "#ecf0f1",
                    textDecoration: "none",
                    opacity: "0.8",
                    transition: "opacity 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.target.style.opacity = "1")}
                  onMouseOut={(e) => (e.target.style.opacity = "0.8")}
                >
                  Login
                </Link>
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <Link
                  to="/signup"
                  style={{
                    color: "#ecf0f1",
                    textDecoration: "none",
                    opacity: "0.8",
                    transition: "opacity 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.target.style.opacity = "1")}
                  onMouseOut={(e) => (e.target.style.opacity = "0.8")}
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Security Features */}
          <div style={{ flex: "1", minWidth: "200px" }}>
            <h4
              style={{
                marginBottom: "1rem",
                color: "#3498db",
              }}
            >
              Security Features
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: "0",
                margin: "0",
              }}
            >
              <li
                style={{
                  marginBottom: "0.5rem",
                  opacity: "0.8",
                  fontSize: "0.9rem",
                }}
              >
                🔐 Encrypted Data Storage
              </li>
              <li
                style={{
                  marginBottom: "0.5rem",
                  opacity: "0.8",
                  fontSize: "0.9rem",
                }}
              >
                🆔 Aadhar Authentication
              </li>
              <li
                style={{
                  marginBottom: "0.5rem",
                  opacity: "0.8",
                  fontSize: "0.9rem",
                }}
              >
                🔑 JWT Token Security
              </li>
              <li
                style={{
                  marginBottom: "0.5rem",
                  opacity: "0.8",
                  fontSize: "0.9rem",
                }}
              >
                ✅ One Vote per Person
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div style={{ flex: "1", minWidth: "200px" }}>
            <h4
              style={{
                marginBottom: "1rem",
                color: "#3498db",
              }}
            >
              Contact
            </h4>
            <div
              style={{
                opacity: "0.8",
                fontSize: "0.9rem",
                lineHeight: "1.6",
              }}
            >
              <p style={{ marginBottom: "0.5rem" }}>
                📧 hedaumithanshu@gmail.com
              </p>
              <p style={{ marginBottom: "0.5rem" }}>📞 +91 (9096345738)</p>
              <p style={{ marginBottom: "0.5rem" }}>
                🕒 9:00 AM - 6:00 PM (Mon-Fri)
              </p>
              <p style={{ marginBottom: "0.5rem" }}>🌐 Available 24/7 Online</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          style={{
            borderTop: "1px solid #34495e",
            paddingTop: "1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div
            style={{
              opacity: "0.7",
              fontSize: "0.9rem",
            }}
          >
            © {currentYear} VotingPortal By Mithanshu. All rights reserved.
          </div>

          <div
            style={{
              display: "flex",
              gap: "2rem",
              fontSize: "0.9rem",
            }}
          >
            <span
              style={{
                opacity: "0.7",
                cursor: "pointer",
                transition: "opacity 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.opacity = "1")}
              onMouseOut={(e) => (e.target.style.opacity = "0.7")}
            >
              Privacy Policy
            </span>
            <span
              style={{
                opacity: "0.7",
                cursor: "pointer",
                transition: "opacity 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.opacity = "1")}
              onMouseOut={(e) => (e.target.style.opacity = "0.7")}
            >
              Terms of Service
            </span>
            <span
              style={{
                opacity: "0.7",
                cursor: "pointer",
                transition: "opacity 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.opacity = "1")}
              onMouseOut={(e) => (e.target.style.opacity = "0.7")}
            >
              Security
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
