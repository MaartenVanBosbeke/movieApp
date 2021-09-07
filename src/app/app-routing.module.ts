import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {MovieListComponent} from "./movie-list/movie-list.component";
import {MovieDetailComponent} from "./movie-detail/movie-detail.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies', //redirect empty path to /movies
    pathMatch: 'full'
  },
  {
    path: 'movies',
    component: MovieListComponent
  },
  {
    path: 'movies/:id',
    component: MovieDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
