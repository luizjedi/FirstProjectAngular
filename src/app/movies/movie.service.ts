import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Movie } from "./movie";
@Injectable()
export class MovieService {
  constructor(private http: HttpClient) {}

  protected UrlServiceV1: string = "http://localhost:3000/";

  obterMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(this.UrlServiceV1 + "movies");
  }
}
