import React from "react";
import MarsutexHome from "../../containers/MarsutexHome";
import Navbar from "../../components/Navbar";
import { Box, Container } from "@mui/material";

const navItems = [
	{
		name: "Home",
		link: "/",
	},
	{
		name: "Arnet",
		link: "/arnet",
	},
	{
		name: "Forbro",
		link: "/forbro",
	},
	{
		name: "Contactanos",
		link: "mailto:ersel@marsutex.com",
	},
];

function MarsutexApp() {
	return (
		<Box>
			<Navbar navItems={navItems} name={"MARSUTEX"} />
			<Container>
				<MarsutexHome />
			</Container>
		</Box>
	);
}

export default MarsutexApp;
