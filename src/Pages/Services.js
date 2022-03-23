import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServicesTiers } from "../Redux/Actions/generalActions";
import { useParams } from "react-router-dom";
import Loader from "./../Component/Loader";

const Services = () => {
	const dispatch = useDispatch();
	let params = useParams();

	const { servicesTiersData, isLoading } = useSelector(
		(state) => state.general
	);

	useEffect(() => {
		dispatch(getServicesTiers(params.serviceId));
	}, [dispatch, params]);

	return (
		<>
			<div className='container'>
				<div
					className='px-3 py-3 pt-md-5 pb-md-4 mx-auto
				text-center'>
					<h1 className='display-4'>Pricing</h1>
					<p className='lead'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
						eligendi ipsa similique laboriosam voluptates blanditiis sint qui
						voluptatibus, dolores, quisquam, eaque deleniti possimus doloremque
						repellendus?
					</p>
				</div>
				<div className='row text-center'>
					{isLoading ? (
						<Loader />
					) : (
						servicesTiersData.map((service) => {
							return (
								<div className='col-md-4'>
									<div className='card h-100'>
										<div className='card-header'>
											<h4 class='my-0 fw-normal'>{service.name}</h4>
										</div>
										<div className='card-body'>
											<h1 className='card-title pricing-card-title'>
												${service.price}{" "}
												<small className='text-muted'>/ mo</small>
											</h1>
											<p className='card-text'>{service.description}</p>
											<button
												type='button'
												class='btn btn-lg btn-block btn-primary'>
												Get started
											</button>
										</div>
									</div>
								</div>
							);
						})
					)}
				</div>
			</div>
		</>
	);
};

export default Services;
