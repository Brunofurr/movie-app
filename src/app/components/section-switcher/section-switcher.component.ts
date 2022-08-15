import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-section-switcher',
    templateUrl: './section-switcher.component.html',
    styleUrls: ['./section-switcher.component.scss']
})
export class SectionSwitcherComponent implements OnInit {

    @Input() labels: string[] = [];

    selected: number = 0;

    constructor() {}

    ngOnInit(): void {
        
    }

    isButtonSelected(iLabel: number): boolean {
        return this.selected === iLabel;
    }

    setSelected(iLabel: number): void {
        this.selected = iLabel;
    }

}