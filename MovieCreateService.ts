import { prismaClient } from '../../database/prismaClient';
import { InterfaceMovieRepository, MovieCreate } from './repositories/InterfaceMovieRepository';


export class MovieCreateService {

    constructor(
        private movieRepository: InterfaceMovieRepository,
    ) {}

    async execute(data: MovieCreate) {
        const movie = await this.movieRepository.findByName(data.name);

        if(movie) {
            throw new Error("O filme já existe")
        }

        const movieCreated = await this.movieRepository.save(data);

        return movieCreated;
    }
}