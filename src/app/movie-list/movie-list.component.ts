import {Component, OnDestroy, OnInit} from '@angular/core';
import {Movie} from "../models/movie";
import {MoviesService} from "../services/movies.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'media-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, OnDestroy {

  movies: Movie[] = [];
  movieSubscription: Subscription;

  constructor(private moviesService: MoviesService){ //constructor injection, inject MovServ into AppComponent
  }

  //subscribe to stream of data coming in when starting
  ngOnInit() : void {
    this.movieSubscription = this.moviesService.getMovies().subscribe(movies => {
      this.movies = movies;
    })
  }

  //stop subscribing to stream of data when quitting
  ngOnDestroy(): void {
    this.movieSubscription.unsubscribe();
  }


}
