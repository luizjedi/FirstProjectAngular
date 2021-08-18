import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { AnimeService } from '../animes.service';

@Component({
  selector: 'app-lista-animes',
  templateUrl: './lista-animes.component.html'
})

export class ListaAnimesComponent implements OnInit {
  
  constructor(private animeService: AnimeService) {

  }

  public animes: Anime[];

ngOnInit(){
  this.animeService.obterAnimes()
    .subscribe(
      animes => {
        this.animes = animes;
        console.log(animes);
      },
      error => console.log(error)
    );
}

}
