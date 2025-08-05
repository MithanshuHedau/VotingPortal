const express = require("express");
const router = express.Router();
const Candidate = require("../models/candidate");
const User = require("../models/user");
const { jwtAuthMiddleWare, generateToken } = require("../jwt");

const checkAdminRole = async (UserID) => {
  try {
    const user = await User.findById(UserID);
    return user.role === "admin";
  } catch (err) {
    return false;
  }
};

router.post("/", jwtAuthMiddleWare, async (req, res) => {
  try {
    if (!(await checkAdminRole(req.user.id))) {
      return res
        .status(403)
        .json({ message: "Access denied, only admin can add candidates" });
    }
    const data = req.body;
    const newCandidate = new Candidate(data);
    const responce = await newCandidate.save();
    console.log("Data Saved Candidate Successfully", responce);
    res.status(201).json({ responce: responce });
  } catch (err) {
    console.error("Error saving user:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/:candidateID", jwtAuthMiddleWare, async (req, res) => {
  try {
    if (!checkAdminRole(req.user.id)) {
      return res
        .status(403)
        .json({ message: "Access denied, only admin can add candidates" });
    }
    const candidateId = req.params.candidateID;
    const updatedData = req.body;
    const responce = await Candidate.findByIdAndUpdate(
      candidateId,
      updatedData,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!responce) {
      return res.status(404).json({ error: "Candidate not found" });
    }
    console.log("Candidate updated successfully", responce);
    res.status(200).json({ responce: responce });
  } catch (err) {
    console.error("Error updating candidate:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/:candidateID", jwtAuthMiddleWare, async (req, res) => {
  try {
    if (!checkAdminRole(req.user.id)) {
      return res
        .status(403)
        .json({ message: "Access denied, only admin can delete candidates" });
    }
    const candidateId = req.params.candidateID;
    const responce = await Candidate.findByIdAndDelete(candidateId);
    if (!responce) {
      return res.status(404).json({ error: "Candidate not found" });
    }
    console.log("Candidate deleted successfully", responce);
    res.status(200).json({ message: "Candidate deleted successfully" });
  } catch (err) {
    console.error("Error deleting candidate:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/vote/:candidateID", jwtAuthMiddleWare, async (req, res) => {
  const candidateId = req.params.candidateID;
  const userId = req.user.id;
  try {
    const candidate = await Candidate.findById(candidateId);
    if (!candidate) {
      return res.status(404).json({ error: "Candidate not found" });
    }
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    if (user.isVoted) {
      return res.status(400).json({ error: "User has already voted" });
    }
    if (user.role == "admin") {
      return res.status(403).json({ error: "Admins cannot vote" });
    }

    candidate.votes.push({ user: userId });
    candidate.voteCount++;
    await candidate.save();

    user.isVoted = true;
    await user.save();

    console.log("Vote cast successfully for candidate:", candidateId);
    res.status(200).json({ message: "Vote cast successfully" });
  } catch (err) {
    console.error("Error casting vote:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/vote/count", async (req, res) => {
  try {
    const candidate = await Candidate.find().sort({ voteCount: "desc" });
    const voteRecord = candidate.map((data) => {
      return {
        party: data.party,
        count: data.voteCount,
      };
    });
    console.log("Vote count fetched successfully", voteRecord);
    res.status(200).json({ VoteRecord: voteRecord });
  } catch (err) {
    console.error("Error fetching vote count:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
