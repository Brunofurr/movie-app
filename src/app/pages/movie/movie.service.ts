import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Response } from "src/app/interfaces/response"
import { Movie, MovieDetail } from "src/app/interfaces/movie";
import { Credits } from "src/app/interfaces/credits";
import { Reviews } from "src/app/interfaces/reviews";

const { API_ENDPOINT, API_KEY } = environment;

@Injectable()
export class MovieService {
    constructor(
        private http: HttpClient
    ) {}

    getMovieDetail(movieId: string): Observable<Response<MovieDetail>> {
        return this.http.get<Response<MovieDetail>>(`${API_ENDPOINT}/movie/${movieId}`, { params: { api_key: API_KEY} });
    }

    getMovieCredits(movieId: string): Observable<Response<Credits>> {
        return this.http.get<Response<Credits>>(`${API_ENDPOINT}/movie/${movieId}/credits`, { params: { api_key: API_KEY} })
    }

    getMovieReviews(movieId: string): Observable<Response<Reviews>> {
        return this.http.get<Response<Reviews>>(`${API_ENDPOINT}/movie/${movieId}/reviews`, { params: { api_key: API_KEY} })
    }

    getMovieRecommendations(movieId: string): Observable<Response<Movie>> {
        return this.http.get<Response<Movie>>(`${API_ENDPOINT}/movie/${movieId}/recommendations`, { params: { api_key: API_KEY} })
    }
}