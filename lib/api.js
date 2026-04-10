// authApi.js
import { API_CONFIG } from "../utils/api-config";
import axios from "axios";

export const getWebsiteSettings = async (data) => {
  try {
    const response = await axios.get(
      `${API_CONFIG.baseURL}/website/get-website-settings`,
      { headers: API_CONFIG.headers } // Pass headers correctly
    );
    return response.data; // Axios automatically parses JSON
  } catch (error) {
    console.log(error)
    // throw new Error(error?.message || "Login failed");
    return { 
      status: "error", 
      message: error?.response?.data?.message || "Login failed",
      statusCode: error?.response?.data?.status || 500 // Preserve status code
    };
  }
};

export const getProjects = async (data) => {
  try {
    const response = await axios.get(
      `${API_CONFIG.baseURL}/website/get-projects`,
      { headers: API_CONFIG.headers } // Pass headers correctly
    );
    return response.data; // Axios automatically parses JSON
  } catch (error) {
    console.log(error)
    // throw new Error(error?.message || "Login failed");
    return { 
      status: "error", 
      message: error?.response?.data?.message || "Login failed",
      statusCode: error?.response?.data?.status || 500 // Preserve status code
    };
  }
};

export const getProjectBySlug = async (slug) => {
  try {
    const response = await axios.get(
      `${API_CONFIG.baseURL}/website/get-project-by-slug/${slug}`,
      { headers: API_CONFIG.headers } // Pass headers correctly
    );
    return response.data; // Axios automatically parses JSON
  } catch (error) {
    console.log(error)
    // throw new Error(error?.message || "Login failed");
    return { 
      status: "error", 
      message: error?.response?.data?.message || "Login failed",
      statusCode: error?.response?.data?.status || 500 // Preserve status code
    };
  }
};

export const submitReview = async (data) => {
  try {
    const response = await axios.post(
      `${API_CONFIG.baseURL}/website/submit-review`,
      data,
      { headers: API_CONFIG.headers } // Pass headers correctly
    );
    return response.data; // Axios automatically parses JSON
  } catch (error) {
    console.log(error)
    // throw new Error(error?.message || "Login failed");
    return { 
      status: "error", 
      message: error?.response?.data?.message || "Error submitting review",
      statusCode: error?.response?.data?.status || 500 // Preserve status code
    };
  }
};

export const GetReviews = async (projectId) => {
  try {
    const response = await axios.get(
      `${API_CONFIG.baseURL}/website/get-reviews/${projectId}`,
      { headers: API_CONFIG.headers } // Pass headers correctly
    );
    return response.data; // Axios automatically parses JSON
  } catch (error) {
    console.log(error)
    // throw new Error(error?.message || "Login failed");
    return { 
      status: "error", 
      message: error?.response?.data?.message || "Error submitting review",
      statusCode: error?.response?.data?.status || 500 // Preserve status code
    };
  }
};

export const getBanners = async (data) => {
  try {
    const response = await axios.get(
      `${API_CONFIG.baseURL}/website/get-banners`,
      { headers: API_CONFIG.headers } // Pass headers correctly
    );
    return response.data; // Axios automatically parses JSON
  } catch (error) {
    console.log(error)
    // throw new Error(error?.message || "Login failed");
    return { 
      status: "error", 
      message: error?.response?.data?.message || "Login failed",
      statusCode: error?.response?.data?.status || 500 // Preserve status code
    };
  }
};
export const getBlogs = async (data) => {
  try {
    const response = await axios.get(
      `${API_CONFIG.baseURL}/website/get-blogs`,
      { headers: API_CONFIG.headers } // Pass headers correctly
    );
    return response.data; // Axios automatically parses JSON
  } catch (error) {
    console.log(error)
    // throw new Error(error?.message || "Login failed");
    return { 
      status: "error", 
      message: error?.response?.data?.message || "Login failed",
      statusCode: error?.response?.data?.status || 500 // Preserve status code
    };
  }
};

export const getBlogBySlug = async (slug) => {
  try {
    const response = await axios.get(
      `${API_CONFIG.baseURL}/website/get-blog-by-slug/${slug}`,
      { headers: API_CONFIG.headers } // Pass headers correctly
    );
    return response.data; // Axios automatically parses JSON
  } catch (error) {
    console.log(error)
    // throw new Error(error?.message || "Login failed");
    return { 
      status: "error", 
      message: error?.response?.data?.message || "Login failed",
      statusCode: error?.response?.data?.status || 500 // Preserve status code
    };
  }
};

export const submitEnquiry = async (data) => {
  try {
    const response = await axios.post(
      `${API_CONFIG.baseURL}/website/submit-enquiry`,
      data,
      { headers: API_CONFIG.headers } // Pass headers correctly
    );
    return response.data; // Axios automatically parses JSON
  } catch (error) {
    console.log(error)
    // throw new Error(error?.message || "Login failed");
    return { 
      status: "error", 
      message: error?.response?.data?.message || "Error submitting review",
      statusCode: error?.response?.data?.status || 500 // Preserve status code
    };
  }
};