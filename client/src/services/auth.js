import http from "./httpService";
import jwtDecode from "jwt-decode";

const apiEndpoint = "/auth";
const tokenKey = "token";

export async function login(email, password) {
    console.log('Logging in at:', process.env.REACT_APP_API_URL, apiEndpoint);
    const { data: jwt } = await http.post(apiEndpoint, { email, password });
    localStorage.setItem(tokenKey, jwt);
    http.setJwt(getJwt());
}

export function loginWithJwt(jwt) {
    localStorage.setItem(tokenKey, jwt);
    http.setJwt(getJwt());
}
export function logout() {
    localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
    try {
        const jwt = localStorage.getItem(tokenKey);
        return jwtDecode(jwt);
    } catch (e) {
        return null;
    }
}

export function getJwt() {
    return localStorage.getItem(tokenKey);
}

export default {
    login,
    loginWithJwt,
    logout,
    getCurrentUser,
    getJwt
};
