import http from "./httpService";
import jwtDecode from "jwt-decode";

const apiEndpoint = "/api/auth";
const apiEndpointSignUp = "/api/users/createNewUser";
const tokenKey = process.env.REACT_APP_API_LOGIN_TOKEN_NAME;

export async function login(email, password) {
    const { data: jwt } = await http.post(apiEndpoint, { email, password });
    localStorage.setItem(tokenKey, jwt);
    http.setJwt(getJwt());
}

export async function signUp(name, email, password, stripePlan, token) {
    const { data: jwt } = await http.post(apiEndpointSignUp, { name, email, password, stripePlan, token });
    localStorage.setItem(tokenKey, jwt);
    http.setJwt(getJwt());
}

export async function loginWithSocial(email, name) {
    const res = await http.post(apiEndpoint, { email, name });
    localStorage.setItem(tokenKey, res.headers['x-auth-token']);
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
