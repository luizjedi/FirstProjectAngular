import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Anime } from "./anime";



@Injectable()
export class AnimeService {

constructor(private http: HttpClient) { }

protected UrlServiceV1: string = "http://localhost:3000/";

obterAnimes() : Observable<Anime[]> {

 return this.http.get<Anime[]>(this.UrlServiceV1 + "Animes")
  
 }

}

