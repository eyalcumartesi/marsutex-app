import React from "react";
import { Container, Typography } from "@mui/material";

const About = () => {
	return (
		<Container className="flex flex-col gap-3 h-full">
			<Typography variant="h5" className="self-center">
				Quienes Somos?
			</Typography>
			<Typography variant="p" className="self-center">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
				enim eius quas quod quia ipsum nulla doloribus ea deleniti molestiae,
				odio maiores fugiat, assumenda placeat debitis quae ratione. Vel,
				cupiditate?
			</Typography>
		</Container>
	);
};

export default About;
