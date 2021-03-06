import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../Component/Navbar";

const HomePage = React.lazy(() => import("./HomePage"));
const Services = React.lazy(() => import("./Services"));
const Checkout = React.lazy(() => import("./Checkout"));

export default function MainRouter() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/services/:serviceId' element={<Services />} />
					<Route path='/checkout' element={<Checkout />} />
					<Route path='*' element={<Navigate replace to='/' />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
