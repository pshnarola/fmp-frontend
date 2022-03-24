import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getServices } from "../Redux/Actions/generalActions";
import Loader from "./../Component/Loader";

const HomePage = () => {
	const dispatch = useDispatch();

	const { servicesData, isLoading } = useSelector((state) => state.general);

	useEffect(() => {
		dispatch(getServices());
	}, [dispatch]);

	return (
		<div className='container pt-5'>
			<div className='row'>
				{isLoading ? (
					<Loader />
				) : (
					servicesData.map((service) => {
						return (
							<div key={service._id} className='col-md-4'>
								<div className='card h-100 border-0'>
									<div className='card-body'>
										<h2 className='card-title'>{service.name}</h2>
										<p className='card-text'>{service.description}</p>
									</div>
									<div className='card-footer bg-white border-0'>
										<Link to={`/services/${service.slug}`}>
											<button className='btn btn-secondary'>
												View details »
											</button>
										</Link>
									</div>
								</div>
							</div>
						);
					})
				)}
			</div>
		</div>
	);
};

export default HomePage;
