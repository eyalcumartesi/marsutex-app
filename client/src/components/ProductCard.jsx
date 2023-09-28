import React from "react";
import { Card } from "@mui/material";
import { Cloudinary } from "@cloudinary/url-gen";
import {
	AdvancedImage,
	lazyload,
	responsive,
	placeholder,
} from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";

function ProductCard({ imageUrl, index }) {
	const cld = new Cloudinary({
		cloud: {
			cloudName: "ddundkemp",
		},
	});

	const myImage = cld.image(imageUrl).resize(fill());

	return (
		<Card sx={{ height: "auto", width: "250px" }}>
			<AdvancedImage
				cldImg={myImage}
				plugins={[lazyload(), responsive(), placeholder()]}
			/>
		</Card>
	);
}

export default ProductCard;
