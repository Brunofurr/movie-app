import { Component, Input, OnInit } from "@angular/core";
import { Cast, Crew } from "src/app/interfaces/credits";
import { environment } from "src/environments/environment";

@Component({
    selector: 'app-person-card-highlight',
    templateUrl: './person-card-highlight.component.html',
    styleUrls: ['./person-card-highlight.component.scss']
})
export class PersonCardHighlightComponent implements OnInit {

    @Input() person: Cast | null = null;

    img_path: string = environment.IMG_PATH;

    constructor() {}

    ngOnInit(): void {
        
    }

    getPersonCover() {
        const path = this.person?.profile_path ? 
        ('url(' + this.img_path + this.person?.profile_path + ')') :
        'url(/assets/default-movie-cover.svg)';

        return { 'background-image': path }
    }
}