import {
	GET_SERVICES_FAILED,
	GET_SERVICES_REQUEST,
	GET_SERVICES_SUCCESS,
} from "../actionTypes";

const initialState = {
	isLoading: false,
	errorMessage: "",
	serviceData: [],
};

const generalReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_SERVICES_REQUEST:
			return {
				...state,
				isLoading: true,
				errorMessage: "",
			};

		case GET_SERVICES_FAILED:
			return {
				...state,
				errorMessage: payload,
				isLoading: false,
			};

		case GET_SERVICES_SUCCESS:
			return {
				...state,
				signUpData: payload,
				isLoading: false,
			};

		default:
			return state;
	}
};

export default generalReducer;
