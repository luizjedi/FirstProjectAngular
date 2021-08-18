import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './navigation/menu/menu.component';
import { HomeComponent } from './navigation/home/home.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { MoviesComponent } from './movies/movies.component';
import { SeriesComponent } from './series/series.component';
import { AnimesComponent } from './animes/animes.component';
import { rootRouterConfig } from './app.routes';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';

import { ListaAnimesComponent } from './animes/lista-animes/lista-animes.component';
import { ListaSeriesComponent } from "./series/lista-series/lista-series.component";
import { ListaMoviesComponent } from "./movies/lista-movies/lista-movies.component";
import { MovieService } from './movies/movie.service';
import { AnimeService } from './animes/animes.service';
import { SerieService } from './series/serie.service';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    MoviesComponent,
    SeriesComponent,
    AnimesComponent,
    DataBindingComponent,
    ListaAnimesComponent,
    ListaSeriesComponent,
    ListaMoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false })]
  ],
  providers: [
    AnimeService,
    MovieService,
    SerieService,
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
