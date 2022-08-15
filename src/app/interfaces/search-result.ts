import { Movie } from "./movie";

export interface SearchResult {
    query: string;
    result: Movie[];
}