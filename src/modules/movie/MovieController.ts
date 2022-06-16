import { Request, Response } from "express";
import { MovieCreateService } from "./MovieCreateService";
import { MoviePrismaRepository } from "./repositories/prismarepositories/MoviePrismaRepository";

export class MovieController {
    async create(request: Request, response: Response) {
        const { body } = request;
        const prismaMovieRepository = new MoviePrismaRepository();
        const createMovieService = new MovieCreateService(prismaMovieRepository);

        const result = await createMovieService.execute(body);

        return response.json(result);
    }
}