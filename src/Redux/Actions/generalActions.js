import axios from "../../Services/config";

import {
	GET_ALLSERVICES_FAILED,
	GET_ALLSERVICES_REQUEST,
	GET_ALLSERVICES_SUCCESS,
	GET_ALLSERVICES_TIERS_FAILED,
	GET_ALLSERVICES_TIERS_REQUEST,
	GET_ALLSERVICES_TIERS_SUCCESS,
	// POST_USER_SERVICES_FAILED,
	// POST_USER_SERVICES_REQUEST,
	// POST_USER_SERVICES_SUCCESS,
} from "../actionTypes";

import {
	getAllServices,
	getAllServiceTires,
} from "../../Services/Routes/general";

export const getServices = () => {
	return async (dispatch) => {
		try {
			dispatch({ type: GET_ALLSERVICES_REQUEST });
			let response = await axios({ ...getAllServices });
			dispatch({
				type: GET_ALLSERVICES_SUCCESS,
				payload: response.data.data.services,
			});
		} catch (error) {
			dispatch({
				type: GET_ALLSERVICES_FAILED,
				payload: error.response.data.data,
			});
		}
	};
};

export const getServicesTiers = (serviceId) => {
	const data = { serviceId: serviceId };
	return async (dispatch) => {
		try {
			dispatch({ type: GET_ALLSERVICES_TIERS_REQUEST });
			let response = await axios({
				...getAllServiceTires,
				data: data,
			});
			dispatch({
				type: GET_ALLSERVICES_TIERS_SUCCESS,
				payload: response.data.data.serviceTiers,
			});
		} catch (error) {
			dispatch({
				type: GET_ALLSERVICES_TIERS_FAILED,
				payload: error.response.data.data,
			});
		}
	};
};
