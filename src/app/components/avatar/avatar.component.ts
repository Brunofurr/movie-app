import { Component, Input, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
    selector: 'app-avatar',
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

    @Input() path: string | undefined = '';
    @Input() size: number = 44;

    img_path: string = environment.IMG_PATH;

    constructor() {}

    ngOnInit(): void {
        
    }

    getAvatar() {
        const basePath = this.path?.includes('http') ? '' : this.img_path;
        const path = this.path ? 
        ('url(' + basePath + this.path + ')') :
        'url(/assets/default-movie-cover.svg)';

        return {
            'background-image': path,
            'width': `${this.size}px`,
            'height': `${this.size}px`
        }
    }

}