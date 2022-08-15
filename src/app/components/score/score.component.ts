import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-score',
    templateUrl: './score.component.html',
    styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

    constructor() {}

    @Input() score: number | undefined = 0;
    @Input() size: number | undefined = 35;
    @Input() left: string | undefined = 'unset';
    @Input() right: string | undefined = 'unset';
    @Input() top: string | undefined = 'unset';
    @Input() bottom: string | undefined = 'unset';

    ngOnInit(): void {
    }

    getStrokeDasharray(): number {
        if (typeof this.score === 'number') {
            const toFixedScore = this.score.toFixed(1);
            const patternizedScore = String(toFixedScore).replace('.', '');
            return parseInt(patternizedScore)
        }
        return 0;
    }

    getScoreStyle() {
        return {
            left: this.left,
            right: this.right,
            top: this.top,
            bottom: this.bottom,
            width: `${this.size}px`,
            height: `${this.size}px`,
            fontSize: `${typeof this.size === 'number' ? (this.size / 32) : 1}rem`
        }
    }
}