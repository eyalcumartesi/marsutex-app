import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { Box, Container, CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import ArnetNavbar from "./ArnetNavbar";
import ForBroNavbar from "./ForBroNavbar";
import axios from "axios";

function ProductGrid() {
	const { category, subcategory } = useParams();
	const [images, setImages] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get(
					`${process.env.REACT_APP_SERVER_URL}/images/${category}/${subcategory}`
				);

				if (response.status !== 200) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}

				const data = response.data;
				setImages(data.imageNames); // Updated property name
				setLoading(false);
			} catch (error) {
				console.error("Error fetching images:", error);
				setLoading(false);
			}
		}

		fetchData();
	}, [category, subcategory]);

	return (
		<Box>
			{category === "arnet" ? <ArnetNavbar /> : <ForBroNavbar />}
			<Container className="mt-20">
				<h1>CATALOGO {subcategory.toUpperCase()}</h1>
				{loading ? (
					<CircularProgress />
				) : (
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
						{images.map((imageName, index) => {
							// Use imageUrl directly
							return (
								<div
									key={index}
									className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
								>
									<ProductCard imageUrl={imageName} />
								</div>
							);
						})}
					</div>
				)}
			</Container>
		</Box>
	);
}

export default ProductGrid;
