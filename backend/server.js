const PORT = process.env.PORT || 3000;
const express = require("express");
const app = express();
const connectDB = require("./connection/db");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

// CORS configuration
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend URL
    credentials: true,
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
