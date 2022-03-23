import axios from "axios";

const instance = axios.create({
	baseURL: process.env.REACT_APP_API_URI,
	headers: {
		"Cache-Control": "no-cache",
		"Content-Type": "application/json",
		"Allow-Access-Control-Allow-Origin": "*",
	},
});

export default instance;
