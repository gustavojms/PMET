import { InterfaceMovieRepository } from './repositories/InterfaceMovieRepository';
export class MovieReadService {
    constructor (
        private movieRepository: InterfaceMovieRepository
    ) {}

    async execute() {
        
    }
}