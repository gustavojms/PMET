import { InterfaceMovieRepository, MovieSave } from "./repositories/InterfaceMovieRepository";

export class MovieDeleteService {
    constructor(
        private movieRepository: InterfaceMovieRepository
    ) {}

    async execute(data: MovieSave["id"]): Promise<MovieSave> {
        const movies = await this.movieRepository.delete(data);
        
        return movies;
    }
}