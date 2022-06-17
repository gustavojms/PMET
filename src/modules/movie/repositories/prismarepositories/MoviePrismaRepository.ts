import { Movie, prisma } from '@prisma/client';
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

    async findAll(): Promise<MovieCreate[]> {
        const movie = await prismaClient.movie.findMany({
            // where: {
            //     name
            // }
        });
        return movie;
    }

    async delete(id: string): Promise<MovieSave> {
        const movie = await prismaClient.movie.delete({
            where: {
                id
            }
        });
        return movie;
    }
}