import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-score-line',
    templateUrl: './score-line.component.html',
    styleUrls: ['./score-line.component.scss']
})
export class ScoreLineComponent implements OnInit {

    @Input() strokeDashArray: number = 0;

    ngOnInit(): void {
        
    }
}