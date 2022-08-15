import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/components/shared.module";
import { HomeComponent } from "./home.component";
import { HomeService } from "./home.service";

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        RouterModule,
        BrowserModule,
        SharedModule
    ],
    providers: [HomeService]
})
export class HomeModule {}