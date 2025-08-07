import React, { createContext, useContext, useState, useEffect } from "react";
import { authAPI, authUtils } from "../utils/api";

// Create authentication context
const AuthContext = createContext();

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// Auth provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Check authentication on app load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        if (authUtils.isAuthenticated()) {
          const userData = await authAPI.getProfile();
          setUser(userData.user);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        authUtils.removeToken();
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Login function
  const login = async (credentials) => {
    try {
      const response = await authAPI.login(credentials);
      const { token } = response;

      // Store token
      authUtils.setToken(token);

      // Get user profile
      const userData = await authAPI.getProfile();
      setUser(userData.user);
      setIsAuthenticated(true);

      return { success: true };
    } catch (error) {
      console.error("Login failed:", error);
      return { success: false, error: error.message };
    }
  };

  // Signup function
  const signup = async (userData) => {
    try {
      const response = await authAPI.signup(userData);
      const { token } = response;

      // Store token
      authUtils.setToken(token);

      // Get user profile
      const userProfile = await authAPI.getProfile();
      setUser(userProfile.user);
      setIsAuthenticated(true);

      return { success: true };
    } catch (error) {
      console.error("Signup failed:", error);
      return { success: false, error: error.message };
    }
  };

  // Logout function
  const logout = () => {
    authUtils.removeToken();
    setUser(null);
    setIsAuthenticated(false);
  };

  // Update user data (for when user votes or updates profile)
  const updateUser = (updatedUserData) => {
    setUser((prev) => ({ ...prev, ...updatedUserData }));
  };

  // Context value
  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    signup,
    logout,
    updateUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
