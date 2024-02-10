import axios from "axios";

const Axios = axios.create({
  baseURL: "https://some-domain.com/api/",
  timeout: 1000,
  headers: { "Content-Type": "Application/json" },
});

export default Axios;
