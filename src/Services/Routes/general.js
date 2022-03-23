const baseURL = "http://192.168.100.130:4000";

export const getAllServices = {
	method: "GET",
	url: "/api/services/",
	baseURL,
};

export const getAllServiceTires = {
	method: "POST",
	url: "/api/service-tiers",
	baseURL,
};

export const postUserService = {
	method: "POST",
	url: "/api/user-service",
	baseURL,
};
