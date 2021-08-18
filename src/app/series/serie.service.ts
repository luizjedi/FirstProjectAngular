import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Serie } from "./serie";
@Injectable()
export class SerieService {
  constructor(private http: HttpClient) {}

  protected UrlServiceV1: string = "http://localhost:3000/";

  obterSeries(): Observable<Array<Serie>> {
    return this.http.get<Array<Serie>>(this.UrlServiceV1 + "series");
  }
}
