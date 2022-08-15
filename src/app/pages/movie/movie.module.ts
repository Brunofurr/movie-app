import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/components/shared.module";
import { MovieComponent } from "./movie.component";
import { MovieService } from "./movie.service";

@NgModule({
    declarations: [MovieComponent],
    imports: [
        CommonModule,
        RouterModule,
        BrowserModule,
        SharedModule
    ],
    exports: [MovieComponent],
    providers: [MovieService]
})
export class MovieModule {}