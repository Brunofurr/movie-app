import { Component, Input, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";
import { MovieDetail } from "src/app/interfaces/movie";

@Component({
    selector: 'app-movie-card-cover',
    templateUrl: './movie-card-cover.component.html',
    styleUrls: ['./movie-card-cover.component.scss']
})
export class MovieCardCoverComponent implements OnInit {

    @Input() movie: MovieDetail | null = null;

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
}