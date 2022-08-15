import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Cast, Crew } from "src/app/interfaces/credits";
import { Movie } from "src/app/interfaces/movie";
import { environment } from "src/environments/environment";

@Component({
    selector: 'app-movie-card-highlight',
    templateUrl: './movie-card-highlight.component.html',
    styleUrls: ['./movie-card-highlight.component.scss']
})
export class MovieCardHighlightComponent implements OnInit {

    @Input() movie: Movie | null = null;
    @Output() sendMovieDetail: EventEmitter<number> = new EventEmitter<number>();
    
    img_path: string = environment.IMG_PATH;

    constructor() {}

    ngOnInit(): void {
    }

    getMovieCover() {
        const path = this.movie?.backdrop_path ? 
        ('url(' + this.img_path + this.movie?.backdrop_path + ')') :
        'url(/assets/default-movie-cover.svg)';

        return { 'background-image': path }
    }

    getMovieDetail(): void {
        if (this.movie) {
            this.sendMovieDetail.emit(this.movie.id);
        }
    }

}