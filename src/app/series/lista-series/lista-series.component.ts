import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-lista-series',
  templateUrl: './lista-series.component.html'
})

export class ListaSeriesComponent implements OnInit {
  
  constructor(private serieService: SerieService) {

  }

  public series: Serie[];

ngOnInit(){
  this.serieService.obterSeries()
    .subscribe(
      series => {
        this.series = series;
        console.log(series);
      },
      error => console.log(error)
    );
}

}

