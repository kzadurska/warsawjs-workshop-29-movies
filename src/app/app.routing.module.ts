import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'movies'
    },
    {
        path: 'movies',
        loadChildren:'./pages/movie-list-page/movie-list-page.module#MovieListPageModule'
    },
    {
        path: 'contact',
        loadChildren:'./pages/contact-page/contact-page.module#ContactPageModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
        // imports: [RouterModule.forRoot(routes,  {useHash: true})],

    exports: [RouterModule]
})
export class AppRoutingModule { }