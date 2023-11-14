import axios from "axios";

const API_URL = "http://localhost:8080/users/";

/**
 * 
 * @param {string} first_name - The user's first name 
 * @param {string} last_name - The user's last name
 * @param {string} phone_number - The user's phone number
 * @param {string} email - The user's email address
 * @param {string} password - The user's password
 * @returns {Promise} A promise fulfilled when the registration request is complete
 */
const register = (first_name, last_name, phone_number, email, password) => {
    return axios.post(API_URL + "signup",{
        first_name,
        last_name,
        phone_number,
        email,
        password
    });
};


/**
 * 
 * @param {string} email - The user's email address
 * @param {string} password - The user's password
 * @returns {Promise} A promise fulfilled upon a successful login
 */
const login = (email, password) => {
    return axios.post(API_URL + "signin", {
        email,
        password
    }).then((response) => {
        if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    });
};

/**
 * Logs out the current user by removing user data from local storage.
 */
const logout = () => {
    localStorage.removeItem("user");
}
/**
 * Retrieves and parses the user data stored in local storage.
 * @returns Parsed JavaScript object containing user data
 */

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
}

/**
 * Updates user profile data
 */
const update = (location, rank) => {
    return axios.put(API_URL + "profile",{
        location,
        rank
    });
};

/**
 * AuthService provides methods for user registration, login, logout, and
 * retrieving the current user.
 */
const AuthService = {
    register,
    login,
    logout,
    getCurrentUser,
    update
};

export default AuthService;