import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api"; // Replace with your Django backend URL

export const api = axios.create({
  baseURL: API_URL,
});
