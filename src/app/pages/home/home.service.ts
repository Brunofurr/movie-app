import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Response } from "src/app/interfaces/response"
import { Movie } from "src/app/interfaces/movie";

const { API_ENDPOINT, API_KEY } = environment;

@Injectable()
export class HomeService {
    constructor(
        private http: HttpClient
    ) {}

    getNowPlaying(): Observable<Response<Movie>> {
        return this.http.get<Response<Movie>>(`${API_ENDPOINT}movie/now_playing`, { params: { api_key: API_KEY } });
    }

    getSearchMovies(query: string): Observable<Response<Movie>> {
        return this.http.get<Response<Movie>>(`${API_ENDPOINT}search/movie`, { params: { api_key: API_KEY, query } });
    }

    getUpcoming(): Observable<Response<Movie>> {
        return this.http.get<Response<Movie>>(`${API_ENDPOINT}movie/upcoming`, { params: { api_key: API_KEY } });
    }
}