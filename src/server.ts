import express from "express";
import { movieRouter } from "./modules/movie/routes/routes";

const app = express();

app.use(express.json());

app.use("/movies", movieRouter);

app.listen(8000);