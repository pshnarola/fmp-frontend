import {
	GET_ALLSERVICES_FAILED,
	GET_ALLSERVICES_REQUEST,
	GET_ALLSERVICES_SUCCESS,
	GET_ALLSERVICES_TIERS_FAILED,
	GET_ALLSERVICES_TIERS_REQUEST,
	GET_ALLSERVICES_TIERS_SUCCESS,
	SET_CART_LIST,
	POST_USER_SERVICES_REQUEST,
	POST_USER_SERVICES_FAILED,
	POST_USER_SERVICES_SUCCESS,
} from "../actionTypes";

const initialState = {
	isLoading: false,
	isAlert: false,
	message: "",
	servicesData: [],
	servicesTiersData: [],
	cartList: {},
	userService: {},
};

const generalReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_ALLSERVICES_REQUEST:
		case GET_ALLSERVICES_TIERS_REQUEST:
		case POST_USER_SERVICES_REQUEST:
			return {
				...state,
				isLoading: true,
				isAlert: false,
				message: "",
			};

		case GET_ALLSERVICES_FAILED:
		case GET_ALLSERVICES_TIERS_FAILED:
		case POST_USER_SERVICES_FAILED:
			return {
				...state,
				message: payload,
				isAlert: false,
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

		case POST_USER_SERVICES_SUCCESS:
			return {
				...state,
				userService: payload,
				isLoading: false,
				isAlert: true,
			};

		case SET_CART_LIST:
			return {
				...state,
				cartList: payload,
			};

		default:
			return state;
	}
};

export default generalReducer;
