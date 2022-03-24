import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServicesTiers } from "../Redux/Actions/generalActions";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "./../Component/Loader";
import { SET_CART_LIST } from "../Redux/actionTypes";

const Services = () => {
	const dispatch = useDispatch();
	let navigate = useNavigate();
	let params = useParams();

	const { servicesTiersData, isLoading } = useSelector(
		(state) => state.general
	);

	useEffect(() => {
		dispatch(getServicesTiers(params.serviceId));
	}, [dispatch, params]);

	const handleCheckout = (service) => {
		const cartData = {
			tiereName: service.name,
			price: service.price,
			serviceName: service.serviceId.name,
			serviceId: service.serviceId._id,
			serviceTierId: service._id,
		};
		dispatch({
			type: SET_CART_LIST,
			payload: cartData,
		});
		navigate("/checkout");
	};

	return (
		<>
			<div className='container pt-5'>
				{isLoading ? (
					<Loader />
				) : (
					<>
						<div className='p-3 mx-auto text-center'>
							<h1 className='display-4'>
								{servicesTiersData[0]?.serviceId.name}
							</h1>
							<p className='lead'>
								{servicesTiersData[0]?.serviceId.description}
							</p>
						</div>
						<div className='row text-center'>
							{servicesTiersData.map((service) => {
								return (
									<div key={service._id} className='col-md-4'>
										<div className='card h-100'>
											<div className='card-header'>
												<h4 className='my-0 fw-normal'>{service.name}</h4>
											</div>
											<div className='card-body'>
												<h1 className='card-title pricing-card-title'>
													${service.price}{" "}
													<small className='text-muted'>/ mo</small>
												</h1>
												<p className='card-text'>{service.description}</p>
												<button
													type='button'
													onClick={() => handleCheckout(service)}
													className='btn btn-lg btn-block btn-primary'>
													Buy now
												</button>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default Services;
