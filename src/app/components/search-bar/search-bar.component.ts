import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { HomeService } from "src/app/pages/home/home.service";
import { faSearch, faXmarkCircle, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Movie } from "src/app/interfaces/movie";
import { SearchResult } from "src/app/interfaces/search-result";

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

    @Output() sendResultMovie: EventEmitter<SearchResult> = new EventEmitter();

    form: FormGroup = this.formBuilder.group({});
    iconSearch = faSearch;
    iconXmarkCircle = faXmarkCircle;
    iconXmark = faXmark;
    allowSearch = true;
    results: Movie[] = [];
    query: string = '';

    constructor(
        private formBuilder: FormBuilder,
        private homeService: HomeService
    ) {}

    ngOnInit(): void {
        this.formInit()
    }

    formInit(): void {
        this.form.addControl('search', new FormControl(''));
    }

    getSearch(): void {
        this.query = this.form.get('search')?.value;
        if (this.query.length >= 3)
            this.allowSearch = false;
            this.homeService.getSearchMovies(this.query)
            .subscribe({next: (res) => {
                this.results = res.results;
                this.sendResultMovie.emit({ query: this.query, result: this.results });
            },
            error: (err) => {
                console.log(`getSearchMovies ${this.query} err: `, err);
            }, complete: () => {
                this.allowSearch = true;
            }})
    }

    searchDisabled(): boolean {
        const query = this.form.get('search')?.value;
        return this.allowSearch && query.length < 3;
    }

    resetSearch(): void {
        this.results = [];
        this.form.get('search')?.setValue('');
        this.query = '';
        this.sendResultMovie.emit({ query: this.query, result: this.results });
    }
}