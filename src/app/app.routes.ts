import { Routes } from "@angular/router";
import { AnimesComponent } from "./animes/animes.component";
import { MoviesComponent } from "./movies/movies.component";
import { SeriesComponent } from "./series/series.component";
import { DataBindingComponent } from "./demos/data-binding/data-binding.component";
import { HomeComponent } from "./navigation/home/home.component";
import { ListaAnimesComponent } from "./animes/lista-animes/lista-animes.component";
import { ListaSeriesComponent } from "./series/lista-series/lista-series.component";
import { ListaMoviesComponent } from "./movies/lista-movies/lista-movies.component";

export const rootRouterConfig: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "movies", component: ListaMoviesComponent },
  { path: "series", component: ListaSeriesComponent },
  { path: "animes", component: ListaAnimesComponent },
  { path: "movie/:router", component: MoviesComponent },
  { path: "anime/:router", component: AnimesComponent },
  { path: "serie/:router", component: SeriesComponent },
  { path: "feature-data-binding", component: DataBindingComponent },
];
