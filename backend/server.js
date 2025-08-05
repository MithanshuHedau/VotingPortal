const PORT = process.env.PORT || 3000;
const express = require("express");
const app = express();
const connectDB = require("./connection/db");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

// CORS configuration
const allowedOrigins = [
  "http://localhost:5173", // Local development (Vite)
  "http://localhost:3000", // Local development (alternative)
  "http://localhost:4173", // Vite preview
  // Add your deployed frontend URLs here when you deploy
  // "https://your-app-name.vercel.app",
  // "https://your-app-name.netlify.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);

      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

const bodyParser = require("body-parser");
app.use(bodyParser.json());

//Import Routes
const { jwtAuthMiddleWare } = require("./jwt");
const userRoutes = require("./routes/userRoutes");
const candidatesRoutes = require("./routes/candidateRoutes");
app.use("/user", userRoutes);
app.use("/candidate", candidatesRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Voting Portal API");
});
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
