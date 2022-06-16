import { Movie } from '@prisma/client';
import { prismaClient } from '../../../../database/prismaClient';
import { InterfaceMovieRepository, MovieCreate, MovieSave } from './../InterfaceMovieRepository';


export class MoviePrismaRepository implements InterfaceMovieRepository { 
    async save({ name, watch_date, review }: MovieCreate): Promise<MovieSave> {
        const movie = await prismaClient.movie.create({
            data: {
                name,
                watch_date,
                review
            },
        });
        return movie;
    }

    async findByName(name: string): Promise<MovieCreate | null> {
        const movie = await prismaClient.movie.findFirst({
            where: {
                name
            }
        });
        return movie;
    }
}