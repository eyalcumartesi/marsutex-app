import React from "react";
import { Routes, Route } from "react-router-dom";
import MarsutexApp from "./marsutex-client/MarsutexApp";
import ForbroApp from "./forbro-client/ForbroApp";
import ArnetApp from "./arnet-client/ArnetApp";
import ProductGrid from "../containers/ProductGrid";

function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<MarsutexApp />} />
			<Route path="/arnet" element={<ArnetApp />} />
			<Route path="/forbro" element={<ForbroApp />} />
			<Route path="/:category/:subcategory" element={<ProductGrid />} />
		</Routes>
	);
}

export default AppRoutes;
