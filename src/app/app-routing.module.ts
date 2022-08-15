import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MovieComponent } from './pages/movie/movie.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movie/:movieId', component: MovieComponent },
  { path: 'dashboard', component: DashboardComponent },
  {path: '**', redirectTo: ''}
];

//{path: 'document/:idStudent', component: DocumentsComponent, canActivate: [AuthGuard]},


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
