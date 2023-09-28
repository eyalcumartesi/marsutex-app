const express = require("express");
const cors = require("cors");
const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

cloudinary.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.CLOUD_API_KEY,
	api_secret: process.env.CLOUD_API_SECRET,
});

app.use(cors());

const getAllImages = async (prefix) => {
	let allImages = [];
	let nextCursor = null;

	do {
		const result = await cloudinary.api.resources({
			type: "upload",
			prefix: prefix,
			next_cursor: nextCursor,
		});

		allImages = allImages.concat(result.resources);
		nextCursor = result.next_cursor;
	} while (nextCursor);

	return allImages;
};

app.get("/images/:category/:subcategory", async (req, res) => {
	try {
		const { category, subcategory } = req.params;
		const prefix = `assets/${category}/${subcategory}/`;

		const images = await getAllImages(prefix);
		const imageNames = images.map((resource) => resource.public_id);

		res.json({ imageNames });
	} catch (error) {
		console.error("Error handling route:", error);
		res.status(500).json({ error: "Internal server error" });
	}
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
