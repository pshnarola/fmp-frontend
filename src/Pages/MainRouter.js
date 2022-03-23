import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import AdminLayout from "../Layout/AdminLayout";

// const PmrOueres = React.lazy(() => import("../Containers/Pmr/Queues"));
// const PmrRemaning = React.lazy(() => import("../Containers/Pmr/Remaning"));
// const Dashboard = React.lazy(() => import("../Containers/Dashboard"));

export default function MainRouter() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={
							<main className='p-3'>
								<p> 404xvxcvxcve!</p>
							</main>
						}
					/>
					<Route
						path='*'
						element={
							<main className='p-3'>
								<p> 404 There's nothing here!</p>
							</main>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}
