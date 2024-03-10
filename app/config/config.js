import axios from "axios";
const API = axios.create({
  baseURL: "https://backend.crimatrix.com/",
  headers: {
    // "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});
console.log(process.env.API_END_POINT);
// API.interceptors.request.use(
//   function (config) {
//     const token = sessionStorage.getItem("");
//     config.headers = {
//       Authorization: `Bearer ${token}`,
//     };
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

export default API;

// import axios from "axios";

// const API = axios.create({
//   baseURL: "https://backend.crimatrix.com/",
//   headers: {
//     // "Access-Control-Allow-Origin": "*",
//     "Content-Type": "application/json",
//   },
// });

// export default API;
// import axios from "axios";

// // Create a custom Axios instance with a base URL
// const api = axios.create({
//   baseURL: "/api", // Proxy endpoint
//   headers: {
//     "Access-Control-Allow-Origin": "*",
//     "Content-Type": "application/json",
//     // Add any other headers as needed
//   },
// });

// // Define functions for different HTTP methods
// const http = {
//   get: (url, params) => api.get(url, { params }),
//   post: (url, data) => api.post(url, data),
//   put: (url, data) => api.put(url, data),
//   delete: (url) => api.delete(url),
//   // Add more methods as needed
// };

// export default http;
