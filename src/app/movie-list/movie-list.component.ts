import { Component, OnInit } from '@angular/core';
import {Movie} from "../models/movie";
import {MoviesService} from "../services/movies.service";

@Component({
  selector: 'media-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {


  movies: Movie[] = [];

  constructor(private moviesService: MoviesService){ //constructor injection, inject MovServ into AppComponent
  }

  ngOnInit() : void {
    this.movies = this.moviesService.getMovies();
  }



}
