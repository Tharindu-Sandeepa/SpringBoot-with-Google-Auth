import axios from 'axios';

// const API_URL = 'http://localhost:8080/api/v1'; 
const API_URL = 'http://localhost:8080';
export const getUsers = () => axios.get(`${API_URL}/getusers`);
export const addUser = (user) => axios.post(`${API_URL}/adduser`, user);
export const getUserById = (id) => axios.get(`${API_URL}/user/${id}`);
export const deleteUser = (id) => axios.delete(`${API_URL}/deleteuser/${id}`);

export const getLoginUrl = () => axios.get(`/oauth2/authorization/google/login`);
export const getUserProfile = () => axios.get(`${API_URL}/profile`, { withCredentials: true });