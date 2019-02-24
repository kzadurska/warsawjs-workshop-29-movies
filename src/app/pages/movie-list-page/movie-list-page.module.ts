import { CommonModule } from '@angular/common';
import { MovieListPageRoutingModule } from './movie-list-page.routing.module';
import { MovieListPageComponent } from './components/@init/movie-list-page.component';
import { NgModule } from '@angular/core';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material';
import {MatChipsModule} from '@angular/material/chips';


@NgModule({
  declarations: [MovieListPageComponent, MovieDetailsComponent],
  imports: [
    CommonModule,
    MovieListPageRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule
  ]
})
export class MovieListPageModule { }
