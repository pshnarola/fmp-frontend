import {
	GET_ALLSERVICES_FAILED,
	GET_ALLSERVICES_REQUEST,
	GET_ALLSERVICES_SUCCESS,
	GET_ALLSERVICES_TIERS_FAILED,
	GET_ALLSERVICES_TIERS_REQUEST,
	GET_ALLSERVICES_TIERS_SUCCESS,
} from "../actionTypes";

const initialState = {
	isLoading: false,
	errorMessage: "",
	servicesData: [],
	servicesTiersData: [],
};

const generalReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_ALLSERVICES_REQUEST:
		case GET_ALLSERVICES_TIERS_REQUEST:
			return {
				...state,
				isLoading: true,
				errorMessage: "",
			};

		case GET_ALLSERVICES_FAILED:
		case GET_ALLSERVICES_TIERS_FAILED:
			return {
				...state,
				errorMessage: payload,
				isLoading: false,
			};

		case GET_ALLSERVICES_SUCCESS:
			return {
				...state,
				servicesData: payload,
				isLoading: false,
			};

		case GET_ALLSERVICES_TIERS_SUCCESS:
			return {
				...state,
				servicesTiersData: payload,
				isLoading: false,
			};

		default:
			return state;
	}
};

export default generalReducer;
