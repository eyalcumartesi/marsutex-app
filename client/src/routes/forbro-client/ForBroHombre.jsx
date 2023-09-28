import React from "react";
import ProductGrid from "../../containers/ProductGrid";
import ForBroNavbar from "./ForBroNavbar";
import { Box, Container } from "@mui/material";

const ForBroHombre = () => {
	return (
		<Box>
			<ForBroNavbar />
			<Container>
				<ProductGrid name={"Hombre"} />
			</Container>
		</Box>
	);
};

export default ForBroHombre;
