import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SeznamComponent} from './seznam/seznam.component';
import {FilmPodrobnostiComponent} from './seznam/film-podrobnosti.component';
import { FilmDodajComponent } from './seznam/film-dodaj.component';

const routes: Routes = [
    {path: '', redirectTo: '/seznam', pathMatch: 'full'},
    {path: 'seznam', component: SeznamComponent},
    {path: 'film/:id', component: FilmPodrobnostiComponent},
    {path: 'dodaj', component: FilmDodajComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
