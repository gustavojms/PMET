import { InterfaceMovieRepository, MovieCreate } from "./repositories/InterfaceMovieRepository";

export class MovieUpdateService {
    constructor(
        private movieRepository: InterfaceMovieRepository
    ) {}

    async execute(data: MovieCreate): Promise<MovieCreate> {
        const movies = await this.movieRepository.update(data);
        
        return movies;
    }
}