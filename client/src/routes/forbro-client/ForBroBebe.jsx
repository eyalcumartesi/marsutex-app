import React from "react";
import ProductGrid from "../../containers/ProductGrid";
import ForBroNavbar from "./ForBroNavbar";
import { Box, Container } from "@mui/material";

const ForBroBebe = () => {
	return (
		<Box>
			<ForBroNavbar />
			<Container>
				<ProductGrid name={"Bebe"} />
			</Container>
		</Box>
	);
};

export default ForBroBebe;
