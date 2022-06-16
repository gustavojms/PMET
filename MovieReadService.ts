import { prismaClient } from '../../database/prismaClient';
import { InterfaceMovieRepository, MovieCreate } from './repositories/InterfaceMovieRepository';
export class MovieReadService {
    constructor (
        private movieRepository: InterfaceMovieRepository
    ) {}

    async execute() {
        const movies =  await this.movieRepository.findAll();
        return movies;
    }
}