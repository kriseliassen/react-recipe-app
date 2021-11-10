import express from 'express'
import dotenv  from "dotenv"
import axios from 'axios';
import fs, { read, readFile } from 'fs';
import { promisify } from 'util';
import { v4 as uuidv4 } from 'uuid';

dotenv.config()

const PORT = process.env.PORT || 3001;

const app = express();

const apiKey = process.env.SPOONACULAR_API_KEY

const readFilePromise = promisify(fs.readFile);
const writeFilePromise = promisify(fs.writeFile);

app.get("/api/random", async (_, res) => {
  const url = `https://api.spoonacular.com/recipes/random?number=1&apiKey=${apiKey}&tags=dinner`
  const response = await axios.get(url)
  res.json(response.data);
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});