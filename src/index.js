import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import store from "./Redux/Store/index";
import Loader from "./Component/Loader";

ReactDOM.render(
	<React.StrictMode>
		<Suspense
			fallback={
				<div className='pt-5'>
					<Loader />
				</div>
			}>
			<Provider store={store}>
				<App />
			</Provider>
		</Suspense>
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
