import { InterfaceMovieRepository, MovieSave } from "./repositories/InterfaceMovieRepository";

export class MovieDeleteService {
    constructor(
        private movieRepository: InterfaceMovieRepository
    ) {}

    async delete(data: MovieSave) {
        const movies = await this.movieRepository.delete(data.id);
        return movies;
    }
}