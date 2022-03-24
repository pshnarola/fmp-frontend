import React from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { postUserServices } from "./../Redux/Actions/generalActions";

const Checkout = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const dispatch = useDispatch();

	const { cartList, isLoading, isAlert } = useSelector(
		(state) => state.general
	);

	const onSubmit = (data) => {
		let formData = data;
		formData.serviceId = cartList.serviceId;
		formData.serviceTierId = cartList.serviceTierId;
		dispatch(postUserServices(formData));
	};

	return (
		<div className='container pt-5'>
			{isAlert && (
				<div className='alert alert-success' role='alert'>
					Form Submitted sucessfully
				</div>
			)}
			<div className='row'>
				<div className='col-md-4 order-md-2 mb-4'>
					<h4 className='d-flex justify-content-between align-items-center mb-3'>
						<span className='text-muted'>Your cart</span>
					</h4>
					<ul className='list-group mb-3'>
						<li className='list-group-item d-flex justify-content-between lh-condensed'>
							<div>
								<h6 className='my-0'>{cartList.serviceName}</h6>
								<small className='text-muted'>{cartList.tiereName}</small>
							</div>
							<span className='text-muted'>${cartList.price}</span>
						</li>
						<li className='list-group-item d-flex justify-content-between'>
							<span>Total (USD)</span>
							<strong>${cartList.price}</strong>
						</li>
					</ul>
				</div>
				<div className='col-md-8 order-md-1'>
					<h4 className='mb-3'>Billing address</h4>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className='row'>
							<div className='col-md-6 mb-3'>
								<label htmlFor='firstnameField' className='form-label'>
									First Name
								</label>
								<input
									type='text'
									className='form-control'
									id='firstnameField'
									placeholder='First name'
									{...register("firstName", { required: true, maxLength: 20 })}
								/>
								{errors?.firstName?.type === "required" && (
									<p className='text-danger'>This field is required</p>
								)}
							</div>
							<div className='col-md-6 mb-3'>
								<label htmlFor='lastnameField' className='form-label'>
									Last Name
								</label>
								<input
									type='text'
									className='form-control'
									id='lastnameField'
									placeholder='Last name'
									{...register("lastName", { required: true, maxLength: 20 })}
								/>
								{errors?.lastName?.type === "required" && (
									<p className='text-danger'>This field is required</p>
								)}
							</div>
						</div>
						<div className='mb-3'>
							<label htmlFor='emailField' className='form-label'>
								Email
							</label>
							<input
								type='text'
								className='form-control'
								id='emailField'
								placeholder='name@example.com'
								{...register("email", {
									required: true,
									pattern: /^\S+@\S+$/i,
								})}
							/>
							{errors?.email?.type === "required" && (
								<p className='text-danger'>This field is required</p>
							)}
							{errors?.email?.type === "pattern" && (
								<p className='text-danger'>Please Enter a valid Email</p>
							)}
						</div>
						<div className='mb-3'>
							<label htmlFor='addressTextArea' className='form-label'>
								Address
							</label>
							<textarea
								className='form-control'
								id='addressTextArea'
								rows='3'
								{...register("address", { required: true })}
							/>
							{errors?.address?.type === "required" && (
								<p className='text-danger'>This field is required</p>
							)}
						</div>
						<div className='row'>
							<div className='col-md-5 mb-3'>
								<label htmlFor='country'>Country</label>
								<select
									className='form-select d-block w-100'
									id='country'
									{...register("country", { required: true })}>
									<option value=''>Choose...</option>
									<option>India</option>
								</select>
								{errors?.country?.type === "required" && (
									<p className='text-danger'>This field is required</p>
								)}
							</div>
							<div className='col-md-4 mb-3'>
								<label htmlFor='state'>State</label>
								<select
									className='form-select d-block w-100'
									id='state'
									{...register("state", { required: true })}>
									<option value=''>Choose...</option>
									<option>Gujarat</option>
									<option>Delhi</option>
									<option>Maharastra</option>
								</select>
								{errors?.state?.type === "required" && (
									<p className='text-danger'>This field is required</p>
								)}
							</div>
							<div className='col-md-3 mb-3'>
								<label htmlFor='zip'>Zip</label>
								<input
									type='number'
									className='form-control'
									id='zip'
									placeholder='Zip'
									{...register("zipcode", { required: true, maxLength: 6 })}
								/>
								{errors?.zipcode?.type === "required" && (
									<p className='text-danger'>This field is required</p>
								)}
							</div>
						</div>
						<div className='form-check'>
							<input
								className='form-check-input'
								type='radio'
								name='paymentOptions'
								id='paymentOptionsPaypal'
								value='Paypal'
								{...register("payment", { required: true })}
							/>
							<label
								className='form-check-label'
								htmlFor='paymentOptionsPaypal'>
								Paypal
							</label>
							{errors?.payment?.type === "required" && (
								<p className='text-danger'>This field is required</p>
							)}
						</div>
						<hr className='mb-4' />
						<button className='btn btn-primary btn-block' type='submit'>
							{isLoading && (
								<span
									className='spinner-border spinner-border-sm me-2'
									role='status'
									aria-hidden='true'></span>
							)}
							Continue to checkout
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
