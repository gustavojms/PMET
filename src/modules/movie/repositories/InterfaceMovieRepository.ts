import { Movie } from "@prisma/client";

export type MovieCreate = {
    name: string;
    watch_date: string;
    review: number;
}

export type MovieSave = {
    id: string;
    name: string;
    watch_date: string;
    review: number;
}

export interface InterfaceMovieRepository {
    save(data: MovieCreate): Promise<MovieSave>;
    findByName(name: String): Promise<MovieCreate | null>;
    findAll(): Promise<MovieCreate[]>;
    delete(id: string): Promise<MovieSave>;
}