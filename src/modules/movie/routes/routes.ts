import { MovieController } from './../MovieController';
import { Router } from "express";
import { prismaClient } from '../../../database/prismaClient';

export const movieRouter = Router();

const movieController = new MovieController();

movieRouter.post("/", movieController.create);

movieRouter.get("/", async (request, response) => {
    const result = await prismaClient.movie.findMany();

    response.json(result);
});