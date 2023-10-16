/**
 * Checks to see if there is a user item in local storage.
 * If the user is logged in and has an accessToken (JWT), send authorization
 * header. Otherwise, rejects any request for data if user id is not stored
 * in the session data.
 * @returns HTTP Authorization header containing the user's accessToken.
 * If header is empty, returns an empty object
 */
export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.accessToken) {
        // for Node.js Express back-end
        return { 'x-access-token': user.accessToken};
    } else{
        return{};
    }
}