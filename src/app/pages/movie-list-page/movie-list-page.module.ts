import { MovieListPageRoutingModule } from './movie-list-page.routing.module';
import { MovieListPageComponent } from './components/@init/movie-list-page.component';
import { NgModule } from '@angular/core';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

@NgModule({
  declarations: [MovieListPageComponent, MovieDetailsComponent],
  imports: [
    MovieListPageRoutingModule
  ]
})
export class MovieListPageModule { }
