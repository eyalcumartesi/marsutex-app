// App.js
import React from "react";
import { Box, Container } from "@mui/material";
import AppRoutes from "./routes/Routes";

function App() {
	return (
		<Box className="w-full h-full p-4">
			<Container>
				<AppRoutes />
			</Container>
		</Box>
	);
}

export default App;
