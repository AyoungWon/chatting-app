import axios from "axios";

const base = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL ?? "http://localhost:8000"}/v1`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache, no-store, must-revalidate",
  },
});

export default base;
