import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { Genres, MovieDetail } from "src/app/interfaces/movie";

@Component({
    selector: 'app-movie-info-detail',
    templateUrl: './movie-info-detail.component.html',
    styleUrls: ['./movie-info-detail.component.scss']
})
export class MovieInfoDetailComponent implements OnInit, OnChanges {

    @Input() movie: MovieDetail | null = null;

    genres: string = '';

    constructor() {}

    ngOnInit(): void {
        
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.movie) {
            const hours = Math.floor(this.movie.runtime / 60);
            const minutes = this.movie.runtime % 60;
        }
    }

    getMovieRuntime(movie: MovieDetail | null): string {
        if (movie?.runtime) {
            const hours = Math.floor(movie.runtime / 60);
            const minutes = movie.runtime % 60;
            return `${hours}h ${minutes}m`;
        }
        return '';
    }

    getMovieGenre(movie: MovieDetail | null): string {
        if (movie?.genres.length) {
            this.genres = movie.genres.reduce((acumulador, elemento, index) => 
            acumulador += `${index > 0 ? ', ' : ''}${elemento.name}`, '');

            return this.genres;
        }
        return '';
    }

}