import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-lista-movies',
  templateUrl: './lista-movies.component.html'
})

export class ListaMoviesComponent implements OnInit {
  
  constructor(private movieService: MovieService) {

  }

  public movies: Movie[];

ngOnInit(){
  this.movieService.obterMovies()
    .subscribe(
      movies => {
        this.movies = movies;
        console.log(movies);
      },
      error => console.log(error)
    );
}

}
