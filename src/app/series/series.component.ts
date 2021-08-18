import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Serie } from './serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styles: [
  ]
})
export class SeriesComponent implements OnInit{
  serie: Serie;

  constructor(
    private serieService: SerieService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.init();
  }

  private init() {
    this._activatedRoute.queryParams.subscribe((params) =>
      this.getSerie(params["id"])
    );
  }

  getSerie(id: number) {
    this.serieService.obterSeries().subscribe(
      (data) => {
        if (data.filter((x) => x.id == id).length > 0) {
          this.serie = data.find((x) => x.id == id) as Serie;
        } else {
          alert("erro: filme não encontrado");
        }
        console.log(this.serie);
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