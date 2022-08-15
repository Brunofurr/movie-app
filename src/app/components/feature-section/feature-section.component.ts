import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { faPlus, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Cast } from "src/app/interfaces/credits";
import { Movie } from "src/app/interfaces/movie";
import { Reviews } from "src/app/interfaces/reviews";

@Component({
    selector: 'app-feature-section',
    templateUrl: './feature-section.component.html',
    styleUrls: ['./feature-section.component.scss']
})
export class FeatureSectionComponent implements OnInit {

    @Input() sectionGroupName: string = '';
    @Input() title: string = '';
    @Input() sectionLabels: string[] = [];
    @Input() movies: Movie[] = [];
    @Input() cast: Cast[] = [];
    @Input() reviews: Reviews[] = [];
    @Input() hasScroll: boolean = false;
    @Output() sendShowMore: EventEmitter<string> = new EventEmitter<string>();

    iconPlus: IconDefinition = faPlus;

    constructor(
        private router: Router,
    ) {}

    ngOnInit(): void {
        
    }

    handleShowMore() {
        this.sendShowMore.emit(this.sectionGroupName);
    }

    handleMovieDetail(movieId: number) {
        this.router.navigate([`movie/${movieId}`]);
    }

}