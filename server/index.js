import express from "express";
import dotenv from "dotenv";
import axios from "axios";
import fs, { read, readFile } from "fs";
import { promisify } from "util";
import { v4 as uuidv4 } from "uuid";

dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();

const apiKey = process.env.SPOONACULAR_API_KEY;
const apiUrl = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`;

const readFilePromise = promisify(fs.readFile);
const writeFilePromise = promisify(fs.writeFile);

const readDatabase = async (path) => {
	const data = await readFilePromise(path, "utf-8");
	console.log("read db", data);
	return data;
};

const writeToDb = async (path, content) => {
	await writeFilePromise(path, JSON.stringify(content));
};

// GET DINNERS BY SEARCH TERM
app.get("/api/random/:tags", async (req, res) => {
	const { tags } = req.params;
	console.log("tags: ", tags);
	const url = `${apiUrl}&number=3&tags=${tags}`;
	const response = await axios.get(url);
	res.json(response.data);
});

// GET RANDOM DINNERS
app.get("/api/random/dinner", async (_, res) => {
	const url = `${apiUrl}&number=3&tags=dinner`;
	const response = await axios.get(url);
	res.json(response.data);
});

// GET RANDOM BREAKFASTS
app.get("/api/random/breakfast", async (_, res) => {
	const url = `${apiUrl}&number=3&tags=breakfast`;
	const response = await axios.get(url);
	res.json(response.data);
});

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
