import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Cast, Credits, Crew } from "src/app/interfaces/credits";
import { Movie, MovieDetail } from "src/app/interfaces/movie";
import { Reviews } from "src/app/interfaces/reviews";
import { MovieService } from "./movie.service";

@Component({
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

    movieId: string | null = '';
    movieDetail: MovieDetail | null = null;
    movieRecommendations: Movie[] = [];
    movieCredits: Credits | null = null;
    cast: Cast[] = [];
    crew: Crew[] = [];
    reviews: Reviews[] = [];

    constructor(
        private route: ActivatedRoute,
        private movieService: MovieService
    ) {}

    ngOnInit(): void {
        this.getParams();
    }

    getParams() {
        this.movieId = this.route.snapshot.paramMap.get('movieId');
        if (this.movieId) {
            this.movieService.getMovieDetail(this.movieId)
                .subscribe({ next: (res) => {
                    this.movieDetail = res as unknown as MovieDetail;
                }, error: (err) => console.log('getMovieDetail err: ', err) });

            this.movieService.getMovieCredits(this.movieId)
                .subscribe({ next: (res) => {
                    this.movieCredits = res as unknown as Credits;
                    this.cast = this.movieCredits.cast;
                }, error: (err) => console.log('getMovieCredits err: ', err) });

            this.movieService.getMovieReviews(this.movieId)
                .subscribe({ next: (res) => {
                    this.reviews = res.results;
                }, error: (err) => console.log('getMovieReviews err: ', err)})

            this.movieService.getMovieRecommendations(this.movieId)
                .subscribe({next: (res) => {
                    console.log('getMovieRecommendations res: ', res);
                    this.movieRecommendations = res.results;
                }, error: (err) => console.log('getMovieRecommendations err: ', err)})
        }
    }


    showMore(groupName: string): void {
        console.log('showMore: ', groupName);
    }
}