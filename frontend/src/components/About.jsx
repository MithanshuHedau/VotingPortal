import React from "react";

const About = () => {
  return (
    <div style={{ minHeight: "calc(100vh - 140px)" }}>
      {/* Header Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          padding: "3rem 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              marginBottom: "1rem",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            About Our Voting Portal
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              opacity: "0.9",
            }}
          >
            Empowering Democracy Through Technology
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section style={{ padding: "4rem 0" }}>
        <div className="container">
          <div
            className="row"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "3rem",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: "1", minWidth: "300px" }}>
              <h2
                style={{
                  fontSize: "2rem",
                  marginBottom: "1.5rem",
                  color: "#333",
                }}
              >
                Our Mission
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  color: "#666",
                  marginBottom: "1.5rem",
                }}
              >
                We believe that every citizen deserves a secure, transparent,
                and accessible way to participate in the democratic process. Our
                digital voting portal is designed to make voting easier, more
                secure, and completely transparent while maintaining the
                integrity of the electoral process.
              </p>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  color: "#666",
                }}
              >
                By leveraging modern technology, we aim to increase voter
                participation and ensure that every voice is heard in our
                democracy.
              </p>
            </div>
            <div style={{ flex: "1", minWidth: "300px", textAlign: "center" }}>
              <div
                style={{
                  fontSize: "8rem",
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                🗳️
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
            Our Core Values
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
                background: "white",
                padding: "2rem",
                borderRadius: "10px",
                textAlign: "center",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                minWidth: "280px",
                flex: "1",
                maxWidth: "350px",
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔐</div>
              <h3 style={{ marginBottom: "1rem", color: "#333" }}>
                Security First
              </h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                We implement the highest security standards to protect voter
                data and ensure the integrity of every vote cast through our
                platform.
              </p>
            </div>

            <div
              style={{
                background: "white",
                padding: "2rem",
                borderRadius: "10px",
                textAlign: "center",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                minWidth: "280px",
                flex: "1",
                maxWidth: "350px",
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🌟</div>
              <h3 style={{ marginBottom: "1rem", color: "#333" }}>
                Transparency
              </h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                Every aspect of our voting process is transparent and auditable,
                ensuring public trust in the electoral system.
              </p>
            </div>

            <div
              style={{
                background: "white",
                padding: "2rem",
                borderRadius: "10px",
                textAlign: "center",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                minWidth: "280px",
                flex: "1",
                maxWidth: "350px",
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>♿</div>
              <h3 style={{ marginBottom: "1rem", color: "#333" }}>
                Accessibility
              </h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                Our platform is designed to be accessible to all citizens,
                regardless of their technical expertise or physical abilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Ensure Security */}
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
            How We Ensure Security
          </h2>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "1.5rem",
                marginBottom: "1.5rem",
                background: "white",
                borderRadius: "10px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  marginRight: "1.5rem",
                  color: "#667eea",
                }}
              >
                🆔
              </div>
              <div>
                <h4 style={{ marginBottom: "0.5rem", color: "#333" }}>
                  Aadhar-based Authentication
                </h4>
                <p style={{ color: "#666", margin: "0" }}>
                  Secure identity verification using Aadhar card numbers to
                  prevent duplicate registrations and fraud.
                </p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "1.5rem",
                marginBottom: "1.5rem",
                background: "white",
                borderRadius: "10px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  marginRight: "1.5rem",
                  color: "#667eea",
                }}
              >
                🔑
              </div>
              <div>
                <h4 style={{ marginBottom: "0.5rem", color: "#333" }}>
                  JWT Token Security
                </h4>
                <p style={{ color: "#666", margin: "0" }}>
                  Advanced authentication tokens ensure that only authorized
                  users can access their accounts and vote.
                </p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "1.5rem",
                marginBottom: "1.5rem",
                background: "white",
                borderRadius: "10px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  marginRight: "1.5rem",
                  color: "#667eea",
                }}
              >
                🛡️
              </div>
              <div>
                <h4 style={{ marginBottom: "0.5rem", color: "#333" }}>
                  Encrypted Data Storage
                </h4>
                <p style={{ color: "#666", margin: "0" }}>
                  All sensitive data, including passwords and personal
                  information, is encrypted and securely stored.
                </p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "1.5rem",
                background: "white",
                borderRadius: "10px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  marginRight: "1.5rem",
                  color: "#667eea",
                }}
              >
                ✅
              </div>
              <div>
                <h4 style={{ marginBottom: "0.5rem", color: "#333" }}>
                  One Vote per Person
                </h4>
                <p style={{ color: "#666", margin: "0" }}>
                  Our system ensures that each registered voter can only cast
                  one vote, maintaining election integrity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
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
            Built with Modern Technology
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
                background: "white",
                padding: "1.5rem",
                borderRadius: "10px",
                textAlign: "center",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                minWidth: "150px",
                flex: "1",
                maxWidth: "200px",
              }}
            >
              <h4 style={{ color: "#333", marginBottom: "0.5rem" }}>
                Frontend
              </h4>
              <p style={{ color: "#667eea", fontWeight: "bold" }}>React.js</p>
            </div>

            <div
              style={{
                background: "white",
                padding: "1.5rem",
                borderRadius: "10px",
                textAlign: "center",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                minWidth: "150px",
                flex: "1",
                maxWidth: "200px",
              }}
            >
              <h4 style={{ color: "#333", marginBottom: "0.5rem" }}>Backend</h4>
              <p style={{ color: "#667eea", fontWeight: "bold" }}>
                Node.js & Express
              </p>
            </div>

            <div
              style={{
                background: "white",
                padding: "1.5rem",
                borderRadius: "10px",
                textAlign: "center",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                minWidth: "150px",
                flex: "1",
                maxWidth: "200px",
              }}
            >
              <h4 style={{ color: "#333", marginBottom: "0.5rem" }}>
                Database
              </h4>
              <p style={{ color: "#667eea", fontWeight: "bold" }}>MongoDB</p>
            </div>

            <div
              style={{
                background: "white",
                padding: "1.5rem",
                borderRadius: "10px",
                textAlign: "center",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                minWidth: "150px",
                flex: "1",
                maxWidth: "200px",
              }}
            >
              <h4 style={{ color: "#333", marginBottom: "0.5rem" }}>
                Security
              </h4>
              <p style={{ color: "#667eea", fontWeight: "bold" }}>
                JWT & bcrypt
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ padding: "4rem 0" }}>
        <div className="container">
          <div
            style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}
          >
            <h2
              style={{
                marginBottom: "1.5rem",
                fontSize: "2.5rem",
                color: "#333",
              }}
            >
              Questions or Concerns?
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
                color: "#666",
                marginBottom: "2rem",
              }}
            >
              We're committed to ensuring a smooth and secure voting experience
              for all users. If you have any questions about our platform,
              security measures, or the voting process, please don't hesitate to
              reach out.
            </p>
            <div
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
                padding: "2rem",
                borderRadius: "10px",
              }}
            >
              <h3 style={{ marginBottom: "1rem" }}>Get Support</h3>
              <p style={{ marginBottom: "1rem", opacity: "0.9" }}>
                Our support team is available to help you with any issues or
                questions.
              </p>
              <p style={{ opacity: "0.9" }}>
                📧 Email: hedaumithanshu@gmail.com 
                <br />
                📞 Phone: +91 (9096345738)
                <br />
                🕒 Hours: 9:00 AM - 6:00 PM (Mon-Fri)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
