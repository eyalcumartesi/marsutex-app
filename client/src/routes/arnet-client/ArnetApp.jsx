import React from "react";
import ArnetNavbar from "../../containers/ArnetNavbar";
import Home from "../../containers/Home";
import { Box, Container } from "@mui/material";
import imageCover from "./arnet-cover.png";
import HeroImage from "./hero-image.jpeg";

function ArnetApp() {
	return (
		<Box>
			<ArnetNavbar />
			<Container>
				<Home name={"arnet"} image={imageCover} heroImage={HeroImage} />
			</Container>
		</Box>
	);
}

export default ArnetApp;
