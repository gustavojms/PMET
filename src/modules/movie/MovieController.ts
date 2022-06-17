import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { MovieCreateService } from "./MovieCreateService";
import { MovieReadService } from "./MovieReadService";
import { MovieDeleteService } from "./MovieDeleteService";
import { MoviePrismaRepository } from "./repositories/prismarepositories/MoviePrismaRepository";

const prismaMovieRepository = new MoviePrismaRepository();
const createMovieService = new MovieCreateService(prismaMovieRepository);
const readMovieService = new MovieReadService(prismaMovieRepository);
const deleteMovieService = new MovieDeleteService(prismaMovieRepository);

export class MovieController {

    async create(request: Request, response: Response) {
        const { body } = request;

        const result = await createMovieService.execute(body);

        return response.json(result);
    }

    async read (request: Request, response: Response) {

        const result = await readMovieService.execute();

        //console.log(result)
        return response.json(result);
    }

    async delete(request: Request, response: Response) {
        const { body } = request;
        const result = await deleteMovieService.delete(body.id);

        console.log(result);
        return response.json(result);
    }
}