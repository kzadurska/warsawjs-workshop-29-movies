import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListPageComponent } from './components/@init/movie-list-page.component';

const routes: Routes = [
    {
        path: '',
        component: MovieListPageComponent
    },{
        path:'/:id',
        component: MovieDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MovieListPageRoutingModule { }