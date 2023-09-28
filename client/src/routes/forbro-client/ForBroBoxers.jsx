import React from "react";
import ProductGrid from "../../containers/ProductGrid";
import ForBroNavbar from "./ForBroNavbar";
import { Box, Container } from "@mui/material";

const ForBroBoxers = () => {
	return (
		<Box>
			<ForBroNavbar />
			<Container>
				<ProductGrid name={"Boxers"} />
			</Container>
		</Box>
	);
};

export default ForBroBoxers;
