const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Candidate = require("../models/candidate");
const { jwtAuthMiddleWare, generateToken } = require("../jwt");

router.post("/signup", async (req, res) => {
  try {
    const data = req.body;
    const newUser = new User(data);
    const response = await newUser.save();
    console.log("Data Saved Successfully", response);

    const payload = {
      id: response._id,
    };
    const token = generateToken(payload);
    console.log("Token is :", token);

    // Send only ONE response
    res.status(201).json({ response: response, token: token });
  } catch (err) {
    console.error("Error saving user:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { aadharCardNumber, password } = req.body;
    const user = await User.findOne({
      aadharCardNumber: aadharCardNumber,
    });

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const payload = {
      id: user._id,
    };
    const token = generateToken(payload);
    res.status(200).json({ token });
    console.log("User logged in successfully, token generated:", token);
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/profile", jwtAuthMiddleWare, async (req, res) => {
  try {
    const userData = req.user; // joh jwt file , jwtAuthMiddleWare function se user.data = decoded , voh hai req.user milta hai
    const userId = userData.id;
    const user = await User.findById(userId);
    res.status(200).json({ user });
    console.log("User profile fetched successfully:", user);
  } catch (err) {
    console.error("Error fetching user profile:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/profile/password", jwtAuthMiddleWare, async (req, res) => {
  try {
    const userId = req.user.id;
    const { currentPassword, newPassword } = req.body;
    const user = await User.findById(userId);
    if (!user || !(await user.comparePassword(currentPassword))) {
      return res.status(401).json({
        error: "Invalid current password , Enter correct password current ",
      });
    }
    user.password = newPassword;
    await user.save();
    res.status(200).json({ message: "Password updated successfully" });
    console.log("Password updated successfully for user:", userId);
  } catch (err) {
    console.error("Error updating password:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/candidates", jwtAuthMiddleWare, async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.status(200).json({ candidates });
    console.log("Candidates fetched successfully:", candidates);
  } catch (err) {
    console.error("Error fetching candidates:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get(
  "/candidate/vote/count/:candidateID",
  jwtAuthMiddleWare,
  async (req, res) => {
    try {
      const candidateId = req.params.candidateID;
      const candidate = await Candidate.findById(candidateId);
      if (!candidate) {
        return res.status(404).json({ error: "Candidate not found" });
      }
      res.status(200).json({ voteCount: candidate.voteCount });
      console.log(
        "Vote count fetched successfully for candidate:",
        candidateId
      );
    } catch (err) {
      console.error("Error fetching vote count:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

module.exports = router;
