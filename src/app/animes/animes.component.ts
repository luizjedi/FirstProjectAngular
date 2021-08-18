import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AnimeService } from "./animes.service";
import { Anime } from "./anime";

@Component({
  selector: "app-animes",
  templateUrl: "./animes.component.html",
})
export class AnimesComponent implements OnInit {
  anime: Anime;

  constructor(
    private animeService: AnimeService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.init();
  }

  private init() {
    this._activatedRoute.queryParams.subscribe((params) =>
      this.getAnime(params["id"])
    );
  }

  getAnime(id: number) {
    this.animeService.obterAnimes().subscribe(
      (data) => {
        if (data.filter((x) => x.id == id).length > 0) {
          this.anime = data.find((x) => x.id == id) as Anime;
        } else {
          alert("erro: anime não encontrado");
        }
        console.log(this.anime);
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
