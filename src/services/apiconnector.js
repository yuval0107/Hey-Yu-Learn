import axios from "axios";

// Create Axios instance with backend base URL
export const axiosInstance = axios.create({
  baseURL: "http://localhost:4000", // ✅ Point to your Express backend
  withCredentials: true, // ✅ Optional: only if you're using cookies/sessions
});

// Generic API Connector function
export const apiConnector = (method, url, bodyData, headers, params) => {
  return axiosInstance({
    method: method,
    url: url,
    data: bodyData || null,
    headers: headers || {},
    params: params || {},
  });
};
