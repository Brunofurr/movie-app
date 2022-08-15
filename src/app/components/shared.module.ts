import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../app-routing.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SearchBarComponent } from "./search-bar/search-bar.component";
import { HeaderComponent } from "./header/header.component";
import { FeatureSectionComponent } from "./feature-section/feature-section.component";
import { SectionSwitcherComponent } from "./section-switcher/section-switcher.component";
import { MovieCardHighlightComponent } from "./movie-card-highlight/movie-card-highlight.component";
import { ScoreComponent } from "./score/score.component";
import { ScoreLineComponent } from "./score-line/score-line.component";
import { MovieCardCoverComponent } from "./movie-card-cover/movie-card-cover.component";
import { MovieInfoDetailComponent } from "./movie-info-detail/movie-info-detail.component";
import { PersonCardHighlightComponent } from "./person-card-highlight/person-card-highlight.component";
import { ReviewCardComponent } from "./review-card/review-card.component";
import { AvatarComponent } from "./avatar/avatar.component";

@NgModule({
    declarations: [
        SearchBarComponent,
        HeaderComponent,
        FeatureSectionComponent,
        SectionSwitcherComponent,
        MovieCardHighlightComponent,
        ScoreComponent,
        ScoreLineComponent,
        MovieCardCoverComponent,
        MovieInfoDetailComponent,
        PersonCardHighlightComponent,
        ReviewCardComponent,
        AvatarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        FontAwesomeModule
    ],
    exports: [
        SearchBarComponent,
        HeaderComponent,
        FeatureSectionComponent,
        SectionSwitcherComponent,
        MovieCardHighlightComponent,
        ScoreComponent,
        ScoreLineComponent,
        MovieCardCoverComponent,
        MovieInfoDetailComponent,
        PersonCardHighlightComponent,
        ReviewCardComponent,
        AvatarComponent
    ],
    providers: []
})
export class SharedModule {}