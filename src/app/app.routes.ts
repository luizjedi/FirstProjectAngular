import { Routes } from "@angular/router";
import { AnimesComponent } from "./category/animes/animes.component";
import { MoviesComponent } from "./category/movies/movies.component";
import { SeriesComponent } from "./category/series/series.component";
import { DataBindingComponent } from "./demos/data-binding/data-binding.component";
import { HomeComponent } from "./navigation/home/home.component";
import { MenuComponent } from "./navigation/menu/menu.component";
// import { ListaAnimesComponent } from "./category/animes/lista-animes/lista-animes.component";


export const rootRouterConfig: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'animes', component: AnimesComponent },
  { path: 'feature-data-binding', component: DataBindingComponent },
  // { path: 'app-lista-animes', component: ListaAnimesComponent }
];