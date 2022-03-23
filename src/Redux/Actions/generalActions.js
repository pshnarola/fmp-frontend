import axios from "../../Services/config";

import {
	GET_SERVICES_FAILED,
	GET_SERVICES_REQUEST,
	GET_SERVICES_SUCCESS,
} from "../actionTypes";

import { getServices as getServiceslist } from "../../Services/Routes/general";

export const getServices = () => {
	return async (dispatch) => {
		try {
			dispatch({ type: GET_SERVICES_REQUEST });
			let response = await axios({ ...getServiceslist });
			dispatch({ type: GET_SERVICES_SUCCESS, payload: response.data });
		} catch (error) {
			dispatch({
				type: GET_SERVICES_FAILED,
				payload: error.response.data.data,
			});
		}
	};
};
