import { Component, OnInit } from "@angular/core";
import { throwError } from "rxjs";
import { Movie } from "src/app/interfaces/movie";
import { SearchResult } from "src/app/interfaces/search-result";
import { HomeService } from "./home.service";

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    constructor(
        private homeService: HomeService
    ) {}

    nowPlayingLabels: string[] = ['Streaming', 'Na TV', 'Para Alugar', 'Nos Cinemas'];
    moviesPlayingNow: Movie[] = [];
    moviesResult: Movie[] = [];
    moviesUpcoming: Movie[] = [];
    queryResult: string = '';

    ngOnInit(): void {
        this.getData();
    }

    getData() {
        this.homeService.getNowPlaying()
            .subscribe({ next: (res) => this.moviesPlayingNow = res?.results, error: (err) => console.error(err)});

        this.homeService.getUpcoming()
            .subscribe({ next: (res) => this.moviesUpcoming = res?.results, error: (err) => console.log(err) });
    }

    handleMovieResult({ query, result }: SearchResult) {
        this.moviesResult = result;
        this.queryResult = query;
    }

    showMore(groupName: string): void {
        console.log('showMore: ', groupName);
    }
}