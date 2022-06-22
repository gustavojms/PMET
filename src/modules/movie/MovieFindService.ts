import { InterfaceMovieRepository, MovieSave } from "./repositories/InterfaceMovieRepository";

export class MovieFindService {
    constructor(
        private movieRepository: InterfaceMovieRepository
    ) {}

    async execute(data: MovieSave["id"]): Promise<MovieSave | null> {
        const movies = await this.movieRepository.findById(data);

        return movies;
    }
}