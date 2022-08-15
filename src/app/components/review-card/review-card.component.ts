import { Component, Input, OnInit } from "@angular/core";
import { Reviews } from "src/app/interfaces/reviews";

@Component({
    selector: 'app-review-card',
    templateUrl: './review-card.component.html',
    styleUrls: ['./review-card.component.scss']
})
export class ReviewCardComponent implements OnInit {

    @Input() review: Reviews | null = null;

    constructor() {}

    ngOnInit(): void {
        
    }
}