import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/";

/**
 * Fetches user-specific data from the "user" endpoint via an HTTP GET request to the API.
 * If the user has signed in, the HTTP header includes the access token (the user's authentication headers).
 * If the header is empty, the user has not signed in, so the request will fail.
 * This is how JWT Token makes the application more secure.
 * @returns {Promise} A promise that resolves with the fetched data or rejects with an error.
 */
const getUserPageData = () => {
    return axios.get(API_URL + "user", {headers: authHeader()});
};

const getJobs = () => {
    return axios.get(API_URL + "jobs", {headers: authHeader()});
}

const updateUser = (userId, userData) => {
    return axios.patch(API_URL + `users/${userId}`,
        userData, {headers: authHeader()});
}

const updatePass = (userId, userData) => {
    return axios.patch(API_URL + `users/pass/${userId}`,
        userData, {headers: authHeader()});
}
/**
 * Fetches talent-manager specific data from the "manager" endpoint via an HTTP GET request to the API.
 * It includes the manager's authentication headers to ensure secure access
 * @returns {Promise} A promise that resolves with the fetched data or rejects with an error.
 */
const getManagerPageData = () => {
    return axios.get(API_URL + "manager", {headers: authHeader()});
};

/**
 * Fetches administrator specific data from the "admin" endpoint via an HTTP GET request to the API.
 * It includes the administrator's authentication headers to ensure secure access
 * @returns {Promise} A promise that resolves with the fetched data or rejects with an error.
 */
const getAdminPageData = () => {
    return axios.get(API_URL + "admin", {headers: authHeader()});
};
/**
 * UserService provides methods for getting general user page data, manager page data,
 * and administrator page data
 */

const UserService = {
    getUserPageData,
    getJobs,
    getManagerPageData,
    getAdminPageData,
    updateUser,
    updatePass,
};

export default UserService;
