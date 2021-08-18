import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Movie } from "./movie";
import { MovieService } from "./movie.service";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
})
export class MoviesComponent implements OnInit{
  movie: Movie;

  constructor(
    private movieService: MovieService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.init();
  }

  private init() {
    this._activatedRoute.queryParams.subscribe((params) =>
      this.getMovie(params["id"])
    );
  }

  getMovie(id: number) {
    this.movieService.obterMovies().subscribe(
      (data) => {
        if (data.filter((x) => x.id == id).length > 0) {
          this.movie = data.find((x) => x.id == id) as Movie;
        } else {
          alert("erro: filme não encontrado");
        }
        console.log(this.movie);
      },
      (error) => console.log(error)
    );
  }

  alertDownload(p: any) {
    alert(
      "Seu download de " +
        p +
        " foi iniciado com sucesso!!! Obrigado por utilizar Jedi Torrent!!!"
    );
  }
}
