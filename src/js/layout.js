import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home  from "./views/Home.js";
import Tickets from "./views/Tickets.js";
import injectContext from "./store/appContext";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Navbar />
					<Routes>
						<Route exact path="/" element={<Home />}>
						</Route>
						<Route exact path="tickets" element={<Tickets />}>
						</Route>
					</Routes>
					<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);