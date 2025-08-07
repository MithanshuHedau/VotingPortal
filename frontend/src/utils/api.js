const API_BASE_URL = "https://votingportal-fp5j.onrender.com";
// const API_BASE_URL = "http://localhost:3000";

// Helper function to get auth headers
const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  };
};

// Helper function to handle API responses
const handleResponse = async (response) => {
  if (!response.ok) {
    let error;
    try {
      error = await response.json();
    } catch (e) {
      // If response is not JSON, create a generic error
      error = {
        error: `HTTP ${response.status}: ${
          response.statusText || "Network error"
        }`,
      };
    }

    console.error("API Error:", {
      status: response.status,
      statusText: response.statusText,
      url: response.url,
      error: error,
    });

    throw new Error(error.error || error.message || "Something went wrong");
  }
  return response.json();
};

// Auth API calls
export const authAPI = {
  // User signup
  signup: async (userData) => {
    try {
      console.log("Attempting signup to:", `${API_BASE_URL}/user/signup`);
      const response = await fetch(`${API_BASE_URL}/user/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      return handleResponse(response);
    } catch (error) {
      console.error("Signup error:", error);
      if (error.name === "TypeError" && error.message.includes("fetch")) {
        throw new Error(
          "Network error: Unable to connect to server. Please check your internet connection."
        );
      }
      throw error;
    }
  },

  // User login
  login: async (credentials) => {
    try {
      console.log("Attempting login to:", `${API_BASE_URL}/user/login`);
      const response = await fetch(`${API_BASE_URL}/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      return handleResponse(response);
    } catch (error) {
      console.error("Login error:", error);
      if (error.name === "TypeError" && error.message.includes("fetch")) {
        throw new Error(
          "Network error: Unable to connect to server. Please check your internet connection."
        );
      }
      throw error;
    }
  },

  // Get user profile
  getProfile: async () => {
    const response = await fetch(`${API_BASE_URL}/user/profile`, {
      method: "GET",
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },

  // Update password
  updatePassword: async (passwordData) => {
    const response = await fetch(`${API_BASE_URL}/user/profile/password`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify(passwordData),
    });
    return handleResponse(response);
  },
};

// Candidates API calls
export const candidatesAPI = {
  // Get all candidates (for voting)
  getCandidates: async () => {
    const response = await fetch(`${API_BASE_URL}/user/candidates`, {
      method: "GET",
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },

  // Vote for a candidate
  vote: async (candidateId) => {
    const response = await fetch(
      `${API_BASE_URL}/candidate/vote/${candidateId}`,
      {
        method: "POST",
        headers: getAuthHeaders(),
      }
    );
    return handleResponse(response);
  },

  // Get vote count for a specific candidate
  getVoteCount: async (candidateId) => {
    const response = await fetch(
      `${API_BASE_URL}/user/candidate/vote/count/${candidateId}`,
      {
        method: "GET",
        headers: getAuthHeaders(),
      }
    );
    return handleResponse(response);
  },

  // Get all vote counts (public endpoint)
  getAllVoteCounts: async () => {
    const response = await fetch(`${API_BASE_URL}/candidate/vote/count`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    return handleResponse(response);
  },
};

// Admin API calls
export const adminAPI = {
  // Add new candidate
  addCandidate: async (candidateData) => {
    const response = await fetch(`${API_BASE_URL}/candidate`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(candidateData),
    });
    return handleResponse(response);
  },

  // Update candidate
  updateCandidate: async (candidateId, candidateData) => {
    const response = await fetch(`${API_BASE_URL}/candidate/${candidateId}`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify(candidateData),
    });
    return handleResponse(response);
  },

  // Delete candidate
  deleteCandidate: async (candidateId) => {
    const response = await fetch(`${API_BASE_URL}/candidate/${candidateId}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },
};

// Authentication utilities
export const authUtils = {
  // Store token
  setToken: (token) => {
    localStorage.setItem("token", token);
  },

  // Get token
  getToken: () => {
    return localStorage.getItem("token");
  },

  // Remove token
  removeToken: () => {
    localStorage.removeItem("token");
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    const token = localStorage.getItem("token");
    if (!token) return false;

    try {
      // Decode JWT token to check expiration
      const payload = JSON.parse(atob(token.split(".")[1]));
      const currentTime = Date.now() / 1000;

      if (payload.exp < currentTime) {
        // Token expired
        localStorage.removeItem("token");
        return false;
      }

      return true;
    } catch (error) {
      // Invalid token
      localStorage.removeItem("token");
      return false;
    }
  },

  // Get user ID from token
  getUserIdFromToken: () => {
    const token = localStorage.getItem("token");
    if (!token) return null;

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload.id;
    } catch (error) {
      return null;
    }
  },
};
